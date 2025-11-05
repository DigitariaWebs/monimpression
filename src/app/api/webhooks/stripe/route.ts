import { NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

export const config = { api: { bodyParser: false } } as any;

export async function POST(req: NextRequest) {
  const buf = await req.arrayBuffer();
  const sig = req.headers.get('stripe-signature') as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
  try {
    const event = stripe.webhooks.constructEvent(Buffer.from(buf), sig, webhookSecret);
    if (event.type === 'checkout.session.completed') {
      const session: any = event.data.object;
      const email = session.customer_details?.email || '';
      const amount = session.amount_total || 0;
      const orderId = session.metadata?.orderId as string | undefined;
      if (orderId) {
        await supabase.from('orders').update({ status: 'paid', email, amount, currency: session.currency || 'cad' }).eq('id', orderId);
      } else {
        await supabase.from('orders').insert({ status: 'paid', email, amount, currency: session.currency || 'cad' });
      }

      if (process.env.RESEND_API_KEY && email) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'monimpression <no-reply@monimpression.dev>',
          to: email,
          subject: 'Merci pour votre commande — monimpression',
          html: `<p>Merci pour votre achat! Nous avons bien reçu votre commande.</p>`
        });
      }
    }
    return new Response('ok');
  } catch (err: any) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
}


