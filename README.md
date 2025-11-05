# Custom Buzz — Next.js 14 + Tailwind + Supabase + Stripe

Modern e-commerce landing with live product customization tool and Stripe Checkout.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- Supabase (products, orders, users)
- Stripe Checkout + webhook
- Resend (email)

## Getting Started

1. Install dependencies:
```bash
npm i
```

2. Configure environment variables (copy `.env.example` to `.env.local` and fill the values):
```bash
cp .env.example .env.local
```

3. Run the dev server:
```bash
npm run dev
```

4. Stripe webhook (optional but recommended):
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Supabase Setup
- Create a new project on Supabase and copy the Project URL and anon/service keys into `.env.local`.
- Create tables `products` and `orders`.
- Seed with `seeds/products.sql`.

### Minimal tables
```sql
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  name text,
  price int,
  image text
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  email text,
  amount int,
  currency text,
  status text,
  design_url text,
  created_at timestamp with time zone default now()
);
```

## Deploy on Vercel
- Push the repository to GitHub.
- Import the project on Vercel.
- Set environment variables in Vercel Project Settings.

## Notes
- The customization tool uses `fabric.js` and exports a high-res PNG (2x). You can switch to PDF generation later if required.
- Admin dashboard at `/admin` lists orders from Supabase.

## License
MIT

