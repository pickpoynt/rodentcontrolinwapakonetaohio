import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MariettaCircuitBreakerInfo from "@/components/landing/MariettaCircuitBreakerInfo";
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
        <title>circuit breaker installation marietta ga - Marietta Circuit Breaker Pros</title>
        <meta name="description" content="Professional circuit breaker installation marietta ga. Expert electrical panel upgrades, safety inspections, and circuit diagnostic services in Marietta. Call 8449012684!" />
        <meta name="keywords" content="circuit breaker installation marietta ga, electrical panel upgrade Marietta, circuit breaker replacement Marietta, emergency electrician Marietta GA, electrical safety inspection Marietta" />
        <link rel="canonical" href="https://circuitbreakerinstallationmariettaga.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Marietta Circuit Breaker Pros",
            "image": "/1.jpeg",
            "@id": "https://circuitbreakerinstallationmariettaga.vercel.app/",
            "url": "https://circuitbreakerinstallationmariettaga.vercel.app/",
            "telephone": "+18449012684",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Marietta",
              "addressRegion": "GA",
              "postalCode": "30060",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.9526",
              "longitude": "-84.5499"
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
            "serviceType": "Circuit Breaker Installation & Electrical Panel Upgrades",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Marietta Circuit Breaker Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Marietta, GA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electrical Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Main Breaker Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Panel Upgrades" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AFCI/GFCI Breaker Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Safety Inspections" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="circuit breaker installation marietta ga - Marietta Circuit Breaker Pros" />
        <meta property="og:description" content="Expert circuit breaker installation and electrical panel services in Marietta, GA. Our professional electricians ensure your home's safety and power efficiency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://circuitbreakerinstallationmariettaga.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Circuit Breaker <br />
              <span className="text-white drop-shadow-sm uppercase">Installation in Marietta GA</span>
            </>
          }
          subtitle="Marietta's trusted specialists in professional circuit breaker installation marietta ga. We provide expert panel upgrades, precision diagnostics, and high-performance electrical solutions to protect your home and enhance your power infrastructure. Dedicated to Marietta's safety. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="MARIETTA CIRCUIT BREAKER PROS"
          phone="8449012684"
        />
        <Services />
        <WhyUs />
        <MariettaCircuitBreakerInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Our Network of Service Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-blue-600 hover:underline">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-blue-600 hover:underline">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-blue-600 hover:underline">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-blue-600 hover:underline">Rodent Control Corvallis Oregon</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};


export default Index;


