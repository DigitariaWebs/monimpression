import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ orders: data });
}

export async function PATCH(req: NextRequest) {
  const { id, status } = await req.json();
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
    .select('*')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ order: data });
}

export async function POST(req: NextRequest) {
  try {
    const { productId, email, design } = await req.json();
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({ error: 'Supabase non configuré. Ajoutez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY dans .env.local' }, { status: 500 });
    }
    if (!email || !productId || !design) {
      return NextResponse.json({ error: 'Champs manquants: email, productId, design' }, { status: 400 });
    }

    // find product price (fallback if table absente)
    const { data: product, error: productErr } = await supabase
      .from('products')
      .select('*')
      .eq('slug', productId)
      .maybeSingle();
    if (productErr && productErr.message) {
      // table peut ne pas exister: laisser un montant par défaut mais reporter l'avertissement
      console.warn('Supabase products error:', productErr.message);
    }
    const amount = product?.price ?? 2500;

    const { data, error } = await supabase
      .from('orders')
      .insert({ status: 'pending', email, amount, currency: 'cad', design_url: design })
      .select('id, amount')
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ orderId: data.id, amount: data.amount });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Erreur serveur' }, { status: 500 });
  }
}


