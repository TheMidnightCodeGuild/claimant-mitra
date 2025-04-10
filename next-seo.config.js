// next-seo.config.js
const SEO = {
    title: "Claimant Mitra - Investment Consultants",
    description: "We help you get your insurance claims settled quickly and efficiently.",
    canonical: "https://claimantmitra.com/",
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: 'https://claimantmitra.com/',
      site_name: 'Claimant Mitra',
      images: [
        {
          url: 'https://claimantmitra.com/og-image.jpg', // your social preview image
          width: 1200,
          height: 630,
          alt: 'Claimant Mitra',
        },
      ],
    },
    twitter: {
      handle: '@claimantmitra', // if you have a Twitter
      site: '@claimantmitra',
      cardType: 'summary_large_image',
    },
  };
  
  export default SEO;
  