import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WapakonetaRodentInfo from "@/components/landing/WapakonetaRodentInfo";
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
        <title>rodent control in Wapakoneta Ohio - Wapakoneta Rodent Control Pros</title>
        <meta name="description" content="Looking for rodent control in Wapakoneta Ohio? Professional mice and rat extermination, exclusion services, and preventative pest control. Call 3238801224 today!" />
        <meta name="keywords" content="rodent control in Wapakoneta Ohio, Wapakoneta mice exterminator, rat control Wapakoneta OH, rodent exclusion Wapakoneta, pest control Wapakoneta" />
        <link rel="canonical" href="https://rodentcontrolinwapakonetaohio.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wapakoneta Rodent Control Pros",
            "image": "/1.jpeg",
            "@id": "https://rodentcontrolinwapakonetaohio.vercel.app/",
            "url": "https://rodentcontrolinwapakonetaohio.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Wapakoneta",
              "addressRegion": "OH",
              "postalCode": "45895",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.5678",
              "longitude": "-84.1936"
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
            "serviceType": "Rodent Control & Exclusion Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Wapakoneta Rodent Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Wapakoneta, OH"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Rodent Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mice Extermination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rat Prevention" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rodent Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sanitization Services" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="rodent control in Wapakoneta Ohio - Wapakoneta Rodent Control Pros" />
        <meta property="og:description" content="Expert rodent control services in Wapakoneta, OH. Mice and rat extermination and eco-friendly solutions to protect your home." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodentcontrolinwapakonetaohio.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Rodent <br />
              <span className="text-white drop-shadow-sm uppercase">Control in Wapakoneta Ohio</span>
            </>
          }
          subtitle="Wapakoneta's leading specialists in professional rodent control in Wapakoneta Ohio. We provide advanced exclusion techniques, effective trapping solutions, and comprehensive sanitization to keep your home pest-free. Dedicated to Wapakoneta's safety and comfort. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="WAPAKONETA RODENT CONTROL PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <WapakonetaRodentInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Rodent Control Corvallis Oregon</a>
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Leaking Pipe Repair Modesto</a>
              <a href="https://bedbugexterminatorinwapakonetaohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Bed Bug Exterminator Wapakoneta</a>
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




