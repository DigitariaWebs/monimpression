# Custom Buzz — Manuel d'administration

Ce document explique comment gérer les produits, suivre les commandes et exporter les designs. Exportez-le en PDF pour la livraison finale.

## Produits (Supabase)
- Table: `products` — colonnes: `id, slug, name, price (cents), image`.
- Ajoutez/modifiez via le dashboard Supabase. Les images peuvent pointer vers des SVG/PNG du dossier `/public/assets/products` ou une URL publique.

## Commandes
- Table: `orders` — colonnes: `id, email, amount, currency, status, design_url, created_at`.
- Le webhook Stripe remplit automatiquement une ligne à la fin du paiement.
- Le tableau de bord `/admin` liste les commandes et permet de changer le `status`.

## Outil de personnalisation
- Route: `/customizer`.
- Bouton "Exporter (PNG)" génère une image (2x) qui est transmise à Stripe comme aperçu.
- Vous pouvez sauvegarder l'URL du design avant le paiement (intégration cloud à ajouter si nécessaire).

## Emails
- Service: Resend. Définir `RESEND_API_KEY`.
- Les emails de confirmation sont envoyés après l'évènement `checkout.session.completed`.

## Déploiement
- Vercel: importer le projet, puis définir les variables d'environnement.
- Stripe: ajouter un webhook (évènement `checkout.session.completed`) vers `/api/webhooks/stripe`.

## Maintenance
- Mettez à jour les dépendances périodiquement.
- Sauvegardez la base Supabase et protégez les clés API.

