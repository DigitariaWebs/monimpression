"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

const nav = [
  { label: 'Personnaliser', href: '/personnaliser/tshirt' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Soumission', href: '/soumission' },
  { label: 'Contactez-nous', href: '/contact' },
  { label: 'Tableau des tailles', href: '/tailles' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="glass sticky top-0 z-50 shadow-sm">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/assets/Logo320x320pixels(Facebook)-1920w.webp" alt="monimpression" width={64} height={64} className="rounded transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded bg-gradient-to-br from-transparent to-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-xl gradient-text">monimpression</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`text-sm font-medium animated-underline ${pathname===n.href? 'text-slate-900':'text-slate-600 hover:text-slate-900'}`}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Rechercher" className="p-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"><FaSearch /></button>
          <Link href="/account" aria-label="Compte" className="p-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"><FaRegUser /></Link>
          <Link href="/cart" aria-label="Panier" className="p-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 relative group">
            <FaShoppingCart />
            <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white text-[10px] leading-4 rounded-full w-5 h-5 grid place-content-center font-bold shadow-lg group-hover:scale-110 transition-transform">0</span>
          </Link>
        </div>
      </div>
      <div className="md:hidden border-t border-slate-200/50">
        <div className="container-page flex overflow-x-auto gap-6 py-2 no-scrollbar">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`text-sm whitespace-nowrap font-medium ${pathname===n.href? 'text-slate-900 border-b-2 border-slate-900':'text-slate-600'}`}>{n.label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}


