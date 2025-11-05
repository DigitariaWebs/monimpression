insert into products (slug, name, price, image) values
('tshirt','T-shirt Personnalisé',500,'/assets/products/tshirt.svg') on conflict (slug) do nothing;
insert into products (slug, name, price, image) values
('hoodie','Hoodie Personnalisé',2900,'/assets/products/hoodie.svg') on conflict (slug) do nothing;
insert into products (slug, name, price, image) values
('mug','Tasse Personnalisée',1000,'/assets/products/mug.svg') on conflict (slug) do nothing;
insert into products (slug, name, price, image) values
('mask','Masque Personnalisé',800,'/assets/products/mask.svg') on conflict (slug) do nothing;

