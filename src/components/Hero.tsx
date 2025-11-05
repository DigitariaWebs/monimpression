import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-page grid md:grid-cols-2 gap-6 mt-8">
      <Link href="/catalogue" className="card overflow-hidden relative">
        <img
          src="https://boutiqueethica.com/wp-content/uploads/2023/03/hooded-sweater-unisex-chandail-capuchon-unisexe-black-noir-attraction-ethica-515-v2-900x1050.jpg"
          alt="Hoodie unisexe"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
          <div className="font-semibold">HOODIE</div>
          <div className="text-sm opacity-90">Voir le catalogue</div>
        </div>
      </Link>
      <div className="grid sm:grid-cols-2 gap-6">
        <Link href="/catalogue" className="card overflow-hidden relative">
          <img
            src="https://alternaeco.com/wp-content/uploads/2015/08/301-0502_crewneck-sweater-chandail-col-rond-unisex-unisex-black-noir-ethica-.jpg"
            alt="Col rond unisexe"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="font-semibold">COL ROND</div>
            <div className="text-sm opacity-90">Voir le catalogue</div>
          </div>
        </Link>
        <Link href="/catalogue" className="card overflow-hidden relative">
          <img
            src="https://assets.wordans.ca/files/model_specifications/2025/7/1/1440958/1440958_mediumbig.jpg?1751351539"
            alt="T-shirt adulte"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="font-semibold">T-SHIRT</div>
            <div className="text-sm opacity-90">Voir le catalogue</div>
          </div>
        </Link>
        <Link
          href="/catalogue"
          className="card overflow-hidden relative sm:col-span-2"
        >
          <img
            src="https://s.alicdn.com/@sc04/kf/Hd32fc5f0587e4abe8afcda35e7f37707B.jpg_321x321.jpg"
            alt="Casquette camionneur"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="font-semibold">CASQUETTE</div>
            <div className="text-sm opacity-90">Voir le catalogue</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
