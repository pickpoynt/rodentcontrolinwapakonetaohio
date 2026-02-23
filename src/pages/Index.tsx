import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FultonEarwigControlInfo from "@/components/landing/FultonEarwigControlInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Earwig control Fulton MD - Fulton Earwig Control Pros</title>
        <meta name="description" content="Earwig control Fulton MD - Professional earwig extermination and barrier treatments in Fulton. Specialized pest experts providing rapid moisture control and property protection." />
        <meta name="keywords" content="Earwig control Fulton MD, earwig exterminator Fulton, basement pest control Fulton, moisture control Howard County, pincher bug removal Fulton MD" />
        <link rel="canonical" href="https://earwigcontrolfultonmd.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fulton Earwig Control Pros",
            "image": "/1.jpeg",
            "@id": "https://earwigcontrolfultonmd.vercel.app/",
            "url": "https://earwigcontrolfultonmd.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7600 Old Columbia Rd",
              "addressLocality": "Fulton",
              "addressRegion": "MD",
              "postalCode": "20759",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.1554",
              "longitude": "-76.9247"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Earwig Control & Moisture Management",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Fulton Earwig Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Fulton, MD"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Earwig Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Barrier Treatments" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Moisture Assessment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foundation Sealing" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="Earwig control Fulton MD - Fulton Earwig Control Pros" />
        <meta property="og:description" content="Earwig control Fulton MD - Expert earwig extermination and moisture management services in Fulton, MD." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://earwigcontrolfultonmd.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Earwig control <br />
              <span className="text-white drop-shadow-sm uppercase">in Fulton MD</span>
            </>
          }
          subtitle="Fulton's specialized experts in professional earwig pest control and moisture defense. We provide rapid-response barrier treatments, foundation sealing, and property protection to safeguard your home from humid-weather pests. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="FULTON EARWIG PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <FultonEarwigControlInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;

