import { shortEscapeTours } from "../utilities/shortEscapeTours.js";

const SITE_URL = "https://www.zoraviaterrajourneys.com";
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/logo.jpeg`;

export const staticRoutesMeta = {
  "/": {
    path: "/",
    title: "Zoravia Terra Journeys | Luxury Rwanda Safaris & Custom Travel",
    description:
      "Experience Rwanda with Zoravia Terra Journeys. We design bespoke safaris, Akagera Big Five game drives, gorilla trekking in Volcanoes National Park, chimpanzee tracking in Nyungwe, and luxury cultural journeys.",
    canonical: `${SITE_URL}/`,
    ogTitle: "Zoravia Terra Journeys | Luxury Rwanda Safaris & Custom Travel",
    ogDescription:
      "Personalized luxury journeys and safaris across Rwanda. Akagera Big Five, gorilla trekking, chimpanzee tracking, and Kigali city experiences.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Zoravia Terra Journeys Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/images/logo.jpeg`,
      description:
        "Bespoke luxury tour operator offering private Rwanda safaris, gorilla trekking, chimpanzee tracking, and tailored adventures.",
      telephone: "+250783482368",
      email: "zoraviaterrajourneys@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Remera, KG 17 Ave",
        addressLocality: "Kigali",
        addressCountry: "RW",
      },
      sameAs: [
        "https://instagram.com/zoraviaterrajourneys",
        "https://facebook.com/zoraviaterrajourneys",
        "https://linkedin.com/company/zoraviaterrajourneys",
      ],
    },
  },
  "/about": {
    path: "/about",
    title: "About Us | Zoravia Terra Journeys Rwanda",
    description:
      "Learn the story and philosophy behind Zoravia Terra Journeys. Founded on intentional travel, authentic Rwandan encounters, and curated luxury across the Land of a Thousand Hills.",
    canonical: `${SITE_URL}/about`,
    ogTitle: "About Zoravia Terra Journeys | Our Story & Philosophy",
    ogDescription:
      "Discover how Zoravia Terra Journeys crafts slow, intentional, and unforgettable travel experiences throughout Rwanda.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/short-escapes": {
    path: "/short-escapes",
    title: "Short Escape Tours & Safaris in Rwanda | Zoravia Terra Journeys",
    description:
      "Explore curated 1-day and 2-day short escape tours in Rwanda. Experience Akagera National Park Big Five safaris, Nyungwe canopy walks, and Volcanoes gorilla trekking on an unhurried schedule.",
    canonical: `${SITE_URL}/short-escapes`,
    ogTitle: "Rwanda Short Escape Tours & Weekend Safaris",
    ogDescription:
      "Private 1-day and 2-day escapes: Akagera Big Five safaris, Nyungwe rainforest walks, and mountain gorilla encounters.",
    ogImage: `${SITE_URL}/assets/Akagera/13.jpg`,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/stories": {
    path: "/stories",
    title: "Short Escape Tours & Stories | Zoravia Terra Journeys",
    description:
      "Curated Rwanda short escape journeys and travel stories designed for travelers seeking depth, authenticity, and comfort.",
    canonical: `${SITE_URL}/short-escapes`,
    ogTitle: "Rwanda Short Escape Tours | Zoravia Terra Journeys",
    ogDescription:
      "Explore curated 1-day and 2-day safaris and immersive nature escapes in Rwanda.",
    ogImage: `${SITE_URL}/assets/Akagera/13.jpg`,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/gallery": {
    path: "/gallery",
    title: "Akagera Safari & Wildlife Gallery | Zoravia Terra Journeys",
    description:
      "A visual journey through Rwanda's breathtaking savannahs, lakes, wildlife, and landscapes captured on Zoravia Terra Journeys safaris.",
    canonical: `${SITE_URL}/gallery`,
    ogTitle: "Rwanda Safari Photo Gallery | Zoravia Terra Journeys",
    ogDescription:
      "Explore high-resolution photography from Akagera National Park and scenic Rwanda travel experiences.",
    ogImage: `${SITE_URL}/assets/Akagera/1.jpg`,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/travel-with-us": {
    path: "/travel-with-us",
    title: "Travel With Us – Custom Rwandan Journeys | Zoravia Terra Journeys",
    description:
      "Explore our extended flexible journeys: 'The Heart of Rwanda', 'Into The Mist', and city immersions. Designed around your pace, preferences, and style.",
    canonical: `${SITE_URL}/travel-with-us`,
    ogTitle: "Extended Flexible Tours & Journeys in Rwanda",
    ogDescription:
      "Signature multi-day itineraries designed to be lived, not rushed. Wildlife, primates, lakes, culture, and luxury.",
    ogImage: `${SITE_URL}/assets/images/The Heart of Rwanda.png`,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/booking": {
    path: "/booking",
    title: "Book Your Journey | Zoravia Terra Journeys Rwanda",
    description:
      "Start planning your Rwandan adventure. Share your travel preferences, dates, and group size to receive a personalized safari and tour proposal.",
    canonical: `${SITE_URL}/booking`,
    ogTitle: "Plan & Book Your Custom Rwanda Journey",
    ogDescription:
      "Tailor-made Rwanda itineraries: safaris, gorilla permits, accommodation, and private guided transport.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/contact": {
    path: "/contact",
    title: "Contact Zoravia Terra Journeys | Kigali, Rwanda",
    description:
      "Get in touch with the Zoravia Terra Journeys team in Kigali. Contact us via inquiry form, email, WhatsApp, or phone for travel guidance and bookings.",
    canonical: `${SITE_URL}/contact`,
    ogTitle: "Contact Zoravia Terra Journeys Rwanda",
    ogDescription:
      "Reach out to our Kigali team to design your custom Rwandan safari or private escape.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Zoravia Terra Journeys Rwanda",
    description:
      "Learn how Zoravia Terra Journeys collects, uses, and protects personal information when inquiring about bespoke safaris and travel experiences in Rwanda.",
    canonical: `${SITE_URL}/privacy-policy`,
    ogTitle: "Privacy Policy | Zoravia Terra Journeys",
    ogDescription:
      "Our commitment to privacy, data protection, and transparency for travelers inquiring about Rwanda journeys.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/terms-and-conditions": {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Zoravia Terra Journeys Rwanda",
    description:
      "Read the terms and conditions governing website use, safari inquiries, custom itinerary proposals, and travel services with Zoravia Terra Journeys.",
    canonical: `${SITE_URL}/terms-and-conditions`,
    ogTitle: "Terms & Conditions | Zoravia Terra Journeys",
    ogDescription:
      "Guidelines and terms governing travel planning, safari inquiries, and website use with Zoravia Terra Journeys.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  "/cancellation-policy": {
    path: "/cancellation-policy",
    title: "Cancellation & Refund Policy | Zoravia Terra Journeys Rwanda",
    description:
      "Understand our cancellation, rescheduling, and refund framework for bespoke safaris, short escapes, and national park permits across Rwanda.",
    canonical: `${SITE_URL}/cancellation-policy`,
    ogTitle: "Cancellation & Refund Policy | Zoravia Terra Journeys",
    ogDescription:
      "Clear guidance on travel modifications, cancellation requests, and national park permit policies in Rwanda.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
  },
};

// Generate SEO metadata for all individual tour slug pages
export function getTourRoutesMeta() {
  const tourMeta = {};
  for (const tour of shortEscapeTours) {
    const path = `/short-escapes/${tour.id}`;
    const cleanImage = tour.image.startsWith("http")
      ? tour.image
      : `${SITE_URL}${encodeURI(tour.image)}`;

    tourMeta[path] = {
      path,
      title: `${tour.title} | Zoravia Terra Journeys`,
      description: tour.highlight || tour.description.slice(0, 160),
      canonical: `${SITE_URL}${path}`,
      ogTitle: tour.title,
      ogDescription: tour.tagline || tour.highlight || tour.description.slice(0, 160),
      ogImage: cleanImage,
      ogType: "article",
      twitterCard: "summary_large_image",
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "TouristTrip",
            name: tour.title,
            description: tour.description,
            touristType: tour.quickFacts?.idealFor || "Travelers and wildlife enthusiasts",
            offers: {
              "@type": "Offer",
              price: tour.cardPrice || tour.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}${path}`,
            },
            provider: {
              "@type": "TravelAgency",
              name: "Zoravia Terra Journeys Ltd",
              url: SITE_URL,
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Short Escape Tours",
                item: `${SITE_URL}/short-escapes`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: tour.title,
                item: `${SITE_URL}${path}`,
              },
            ],
          },
        ],
      },
    };
  }
  return tourMeta;
}

export function getAllRoutesMeta() {
  return {
    ...staticRoutesMeta,
    ...getTourRoutesMeta(),
  };
}
