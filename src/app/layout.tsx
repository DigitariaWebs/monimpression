import type { Metadata } from 'next';
import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'monimpression - Personnalisez vos produits',
  description: "Boutique d'impression personnalisée: t-shirts, hoodies, tasses, masques.",
  openGraph: {
    title: 'monimpression',
    description: 'Créez un t-shirt personnalisé ou laissez-nous le faire pour vous.',
    type: 'website'
  },
  metadataBase: new URL('https://monimpression.example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="min-h-screen flex flex-col font-poppins bg-gradient-to-br from-white via-slate-50/30 to-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}


