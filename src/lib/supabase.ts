import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
);

export type DbProduct = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
};

export type DbOrder = {
  id: string;
  status: "paid" | "pending" | "failed" | "fulfilled";
  email: string;
  amount: number;
  currency: string;
  design_url?: string | null;
  created_at: string;
};
