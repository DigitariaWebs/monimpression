import Link from 'next/link';
import Image from 'next/image';

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group card hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-50 to-white">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px" className="object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">Personnaliser →</span>
          <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}


