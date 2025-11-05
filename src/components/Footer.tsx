import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white mt-20">
      <div className="container-page py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-bold text-lg mb-4 gradient-text bg-gradient-to-r from-white to-slate-300 bg-clip-text">monimpression</h4>
          <p className="text-sm text-slate-300 leading-relaxed">7077 Blvd. Newman, LaSalle, QC H8N 1X1</p>
          <p className="text-sm text-slate-300 mt-3 hover:text-white transition-colors">📞 438-299-6565</p>
          <p className="text-sm text-slate-300 hover:text-white transition-colors">✉️ contact@monimpression.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Informations</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/a-propos" className="hover:text-white transition-colors animated-underline">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors animated-underline">Nous Contacter</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors animated-underline">Politique de Confidentialité</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors animated-underline">Conditions d'utilisation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Mon Compte</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/login" className="hover:text-white transition-colors animated-underline">Se connecter</Link></li>
            <li><Link href="/orders" className="hover:text-white transition-colors animated-underline">Mes commandes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Aide & Support</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/faq" className="hover:text-white transition-colors animated-underline">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors animated-underline">Infos sur les prix</Link></li>
            <li><Link href="/returns" className="hover:text-white transition-colors animated-underline">Retours</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} monimpression - Tous droits réservés</p>
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/assets/payments/visa.svg" alt="visa" className="h-6 hover:scale-110 transition-transform" />
            <img src="/assets/payments/mastercard.svg" alt="mc" className="h-6 hover:scale-110 transition-transform" />
            <img src="/assets/payments/amex.svg" alt="amex" className="h-6 hover:scale-110 transition-transform" />
            <img src="/assets/payments/stripe.svg" alt="stripe" className="h-6 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </footer>
  );
}


