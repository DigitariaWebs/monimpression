export type PriceTier = { label: string; price: string };
export type CatalogItem = {
  slug: string;
  title: string;
  audience: 'adult' | 'kids' | 'unisex';
  description: string;
  prices: PriceTier[];
  features: string[];
  image?: string;
};

export const COLORS = ['Bleu marin', 'Gris', 'Gris pâle', 'Noir', 'Blanc'];
export const SIZES = {
  adult: 'S à 3XL (autres tailles disponibles sur demande)',
  kids: 'XS à XL',
};

export const GARMENTS: CatalogItem[] = [
  {
    slug: 'hoodie',
    title: 'Chandail à capuchon unisexe (Hoodie)',
    audience: 'unisex',
    description: 'Confort supérieur. Procédé DTF par défaut — durable, souple et précis.',
    image: 'https://boutiqueethica.com/wp-content/uploads/2023/03/hooded-sweater-unisex-chandail-capuchon-unisexe-black-noir-attraction-ethica-515-v2-900x1050.jpg',
    prices: [
      { label: 'impression 1 face (avant / arrière / poitrine)', price: '29,99 $' },
      { label: 'impression 2 faces (avant+arrière / poitrine+dos)', price: '34,99 $' },
      { label: 'impression complète (avant+arrière+épaules)', price: '39,99 $' },
    ],
    features: ['Mélange coton/polyester doux et résistant','Capuchon ajustable avec cordon','Poche kangourou','Intérieur molletonné','Coupe unisexe'],
  },
  {
    slug: 'crewneck',
    title: 'Chandail à col rond unisexe',
    audience: 'unisex',
    description: 'Élégance et simplicité.',
    image: 'https://alternaeco.com/wp-content/uploads/2015/08/301-0502_crewneck-sweater-chandail-col-rond-unisex-unisex-black-noir-ethica-.jpg',
    prices: [
      { label: 'impression 1 face', price: '27,99 $' },
      { label: 'impression 2 faces', price: '32,99 $' },
      { label: 'impression complète', price: '37,99 $' },
    ],
    features: ['Tissu coton ouaté ou coton/polyester de qualité','Col rond classique','Coutures renforcées','Coupe unisexe'],
  },
  {
    slug: 'hoodie-kid',
    title: 'Chandail à capuche pour enfant',
    audience: 'kids',
    description: 'Style et durabilité (même style que le modèle adulte).',
    image: 'https://www.roots.com/dw/image/v2/BGGS_PRD/on/demandware.static/-/Sites-roots_master_catalog/default/dw1024414a/images/29030583_001_a.jpg?sw=1200&sh=1200&sm=fit',
    prices: [
      { label: 'impression 1 face', price: '27,99 $' },
      { label: 'impression 2 faces', price: '32,99 $' },
      { label: 'impression complète', price: '37,99 $' },
    ],
    features: ['Coton/polyester doux','Capuchon doublé sans cordon (sécurité)','Poche kangourou','Coupe unisexe'],
  },
  {
    slug: 'crewneck-kid',
    title: 'Chandail à col rond pour enfant',
    audience: 'kids',
    description: 'Confort durable.',
    image: 'https://m.media-amazon.com/images/I/61x-NMTPmiL._UY1000_.jpg',
    prices: [
      { label: 'impression 1 face', price: '25,99 $' },
      { label: 'impression 2 faces', price: '30,99 $' },
      { label: 'impression complète', price: '35,99 $' },
    ],
    features: ['Tissu doux et solide','Col rond renforcé','Coupe unisexe'],
  },
  {
    slug: 'tee-short',
    title: 'T-shirt à col rond – Manches courtes (adultes)',
    audience: 'adult',
    description: 'Léger et respirant.',
    image: 'https://assets.wordans.ca/files/model_specifications/2025/7/1/1440958/1440958_mediumbig.jpg?1751351539',
    prices: [
      { label: 'impression 1 face', price: '19,99 $' },
      { label: 'impression 2 faces', price: '22,99 $' },
      { label: 'impression complète', price: '25,99 $' },
    ],
    features: ['Coton/polyester léger','Col rond renforcé','Coupe unisexe'],
  },
  {
    slug: 'tee-long',
    title: 'T-shirt à col rond – Manches longues (adultes)',
    audience: 'adult',
    description: 'Plus épais, pour une tenue chaude et durable.',
    image: 'https://assets.wordans.ca/files/model_specifications/2024/2/9/1308361/1308361_mediumbig.jpg?1733443435',
    prices: [
      { label: 'impression 1 face', price: '21,99 $' },
      { label: 'impression 2 faces', price: '24,99 $' },
      { label: 'impression complète', price: '27,99 $' },
    ],
    features: ['Coton/polyester plus épais','Poignets','Coupe unisexe'],
  },
  {
    slug: 'tee-short-kid',
    title: 'T-shirt manches courtes (enfants)',
    audience: 'kids',
    description: 'Conçu pour bouger, résistant au lavage.',
    image: 'https://assets.wordans.ca/files/model_specifications/2024/2/9/1308360/1308360_mediumbig.jpg?1733831700',
    prices: [
      { label: 'impression 1 face', price: '19,99 $' },
      { label: 'impression 2 faces', price: '22,99 $' },
      { label: 'impression complète', price: '25,99 $' },
    ],
    features: [],
  },
  {
    slug: 'tee-long-kid',
    title: 'T-shirt manches longues (enfants)',
    audience: 'kids',
    description: 'Chaude et durable.',
    image: 'https://assets.wordans.ca/files/model_specifications/2024/2/9/1308361/1308361_mediumbig.jpg?1733443435',
    prices: [
      { label: 'impression 1 face', price: '21,99 $' },
      { label: 'impression 2 faces', price: '24,99 $' },
      { label: 'impression complète', price: '27,99 $' },
    ],
    features: [],
  },
  {
    slug: 'trucker-cap',
    title: 'Casquette camionneur unisexe – Maille ou pleine',
    audience: 'unisex',
    description: 'Version maille (mesh) ou pleine (noir ou blanc).',
    image: 'https://s.alicdn.com/@sc04/kf/Hd32fc5f0587e4abe8afcda35e7f37707B.jpg_321x321.jpg',
    prices: [{ label: 'personnalisation façade comprise', price: '25,00 $' }],
    features: ['Ajustable à l’arrière','Visière courbée','DTF par défaut, broderie sur demande'],
  },
];

export const SHIPPING = {
  price: '12,99 $',
  freeFrom: '100 $',
  care: ['Lavage à l’eau froide, cycle délicat','Ne pas javelliser','Séchage à basse température','Repasser à l’envers si nécessaire'],
};

export type MugItem = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  price: string;
};

export const MUGS: MugItem[] = [
  {
    slug: 'tasse-isotherme-591',
    title: 'Tasse isotherme – 591 mL',
    description: 'Grande tasse isotherme double paroi, garde la chaleur / fraîcheur plusieurs heures.',
    bullets: ['Capacité : 591 mL (20 oz)','Chaudes et froides 3 à 6 heures','Sublimation (personnalisation complète)'],
    price: '25,00 $',
  },
  {
    slug: 'tasse-blanche-ceramique',
    title: 'Tasse à café blanche (céramique)',
    description: 'Classique 11 oz, parfaite pour boissons chaudes.',
    bullets: ['Capacité : 325 mL (11 oz)','Boissons chaudes uniquement','Sublimation'],
    price: '15,00 $',
  },
  {
    slug: 'tasse-magique',
    title: 'Tasse à café magique – Change de couleur',
    description: 'Tasse noire qui révèle le visuel avec la chaleur.',
    bullets: ['Capacité : 325 mL (11 oz)','Réagit à la chaleur','Finition noire mat au repos'],
    price: '20,00 $',
  },
  {
    slug: 'tasse-isotherme-355',
    title: 'Tasse isotherme – 355 mL',
    description: 'Version compacte, idéale pour emporter.',
    bullets: ['Capacité : 355 mL (12 oz)','Garde chaud/froid plusieurs heures','Sublimation'],
    price: '22,00 $',
  },
  {
    slug: 'verre-givre-473',
    title: 'Verre en vitre givré – 473 mL',
    description: 'Idéal pour boissons froides (bières, cocktails, cafés glacés).',
    bullets: ['Capacité : 473 mL (16 oz)','Boissons froides uniquement','Sublimation'],
    price: '—',
  },
];


