import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import StamfordPlumbingInfo from "@/components/landing/StamfordPlumbingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>plumbers stamford ct</title>
        <meta name="description" content="plumbers stamford ct - Expert residential and commercial plumbing services in Stamford, CT. Emergency repairs, water heaters, and drain cleaning. Call (877) 792-1410." />
        <meta name="keywords" content="plumbers stamford ct, Stamford plumbing, emergency plumber Stamford, water heater repair Stamford, drain cleaning Fairfield County" />
        <link rel="canonical" href="https://plumbers-stamford-ct.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Plumber Stamford CT Pros",
            "image": "https://images.unsplash.com/photo-1585129777170-0708579d4760?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Stamford",
              "addressRegion": "CT",
              "postalCode": "06901",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.0534",
              "longitude": "-73.5387"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Stamford, CT"
            },
            "priceRange": "$$",
            "description": "Professional plumbing services in Stamford, Connecticut. Specialized in leak detection, water heater repair, and emergency plumbing for Fairfield County residents."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Plumber Stamford CT Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Stamford, Connecticut"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Stamford Plumbing Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Cleaning"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumbers stamford ct - Plumber Stamford CT Pros" />
        <meta property="og:description" content="Expert plumbing services in Stamford, CT. Rapid response for emergencies, leaks, and installations in Fairfield County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumbers-stamford-ct.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585129777170-0708579d4760?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumbers stamford ct
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Plumber Stamford CT Pros</span>
            </>
          }
          subtitle="Stamford's premier plumbing experts. We provide comprehensive residential and commercial plumbing services. Serving Fairfield County with integrity."
          image="https://images.unsplash.com/photo-1585129777170-0708579d4760?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80"
          badge="STAMFORD LICENSED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <StamfordPlumbingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
