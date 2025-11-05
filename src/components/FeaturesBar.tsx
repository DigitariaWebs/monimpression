import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const items = [
  { icon: FaTruck, title: 'LIVRAISON', text: 'Gratuite pour toutes les commandes' },
  { icon: FaHeadset, title: '24/7 SUPPORT', text: 'On vous aide à accessoiriser' },
  { icon: FaShieldAlt, title: 'FAIT POUR DURER', text: "Garantie de vêtement" },
];

export default function FeaturesBar() {
  return (
    <section className="container-page grid sm:grid-cols-3 gap-6 my-12">
      {items.map(({ icon: Icon, title, text }, index) => (
        <div key={title} className="group card p-6 flex items-center gap-4 hover:bg-gradient-to-br hover:from-slate-50 hover:to-white cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="text-slate-900 text-2xl p-3 rounded-xl bg-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
            <Icon />
          </div>
          <div>
            <div className="font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{title}</div>
            <div className="text-sm text-slate-600 mt-1">{text}</div>
          </div>
        </div>
      ))}
    </section>
  );
}


