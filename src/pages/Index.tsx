import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WestSenecaPlumbingInfo from "@/components/landing/WestSenecaPlumbingInfo";
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
        <title>Plumber West Seneca NY West Seneca</title>
        <meta name="description" content="Plumber West Seneca NY West Seneca - Expert plumbing repair, leak detection & emergency services. 24/7 response for West Seneca homes & businesses. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber west seneca ny, West Seneca plumber, emergency plumber West Seneca, plumbing repair NY, Western New York plumbing, West Seneca plumbing services" />
        <link rel="canonical" href="https://west-seneca-plumbing.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "West Seneca Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1607472586893-edb57bdc0739?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "West Seneca",
              "addressRegion": "NY",
              "postalCode": "14224",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.8500",
              "longitude": "-78.7494"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "West Seneca, NY"
            },
            "priceRange": "$$",
            "description": "Professional residential and commercial plumbing services in West Seneca, NY. We specialize in 24/7 emergency response, leak detection, drain cleaning, and expert plumbing repair for Western New York homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "West Seneca Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "West Seneca, NY"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services & Repair",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leak Detection & Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Cleaning Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Installation & Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Plumber West Seneca NY - West Seneca Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing services in West Seneca, NY. 24/7 emergency response for Western New York homeowners. Licensed & insured professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://west-seneca-plumbing.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1607472586893-edb57bdc0739?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Plumber West Seneca NY West Seneca
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">West Seneca Plumbing Pros</span>
            </>
          }
          subtitle="West Seneca's trusted plumbing experts serving Western New York. We provide 24/7 emergency response, expert leak detection, drain cleaning, and professional plumbing repair for homes and businesses."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=2000"
          badge="WEST SENECA MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <WestSenecaPlumbingInfo />
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
