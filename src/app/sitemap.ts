import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://custom-buzz.example.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/customizer`, lastModified: new Date() },
    { url: `${base}/product/tshirt`, lastModified: new Date() },
    { url: `${base}/product/hoodie`, lastModified: new Date() },
    { url: `${base}/product/mug`, lastModified: new Date() },
    { url: `${base}/faq`, lastModified: new Date() },
    { url: `${base}/soumission`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/tailles`, lastModified: new Date() },
    { url: `${base}/catalogue`, lastModified: new Date() },
    { url: `${base}/tasses`, lastModified: new Date() },
  ];
}


