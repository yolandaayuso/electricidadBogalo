import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "electricista, Campo de Montiel, placas solares, servicio eléctrico urgente, instalación eléctrica, energía solar, Valdepeñas, Villanueva de los Infantes, La Solana, Alhambra, San Carlos del Valle",
  ogImage = "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
  url
}) => {
  const siteTitle = `${title} | Electricidad Bógalo`;
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Electricidad Bógalo",
    "image": ogImage,
    "url": canonicalUrl,
    "telephone": "+34 654 054 705",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Antonio Machado 34",
      "addressLocality": "Villanueva de los Infantes",
      "addressRegion": "Ciudad Real",
      "postalCode": "13320",
      "addressCountry": "ES"
    },
    "areaServed": [
      "Valdepeñas", "Villanueva de los Infantes", "La Solana", "San Carlos del Valle",
      "Alhambra", "Torre de Juan Abad", "Castellar de Santiago", "Cózar", "Campo de Montiel", "Villamanrique", "Ciudad Real", "Cózar"
    ],
    "description": description,
    "priceRange": "€€",
    "openingHours": "Mo-Fr 08:00-18:00"
  };

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Electricidad Bógalo" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TuCuentaTwitter" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/images/logobogalodef.png" />

      {/* Structured Data for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
