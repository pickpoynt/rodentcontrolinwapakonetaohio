import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WapakonetaBedBugInfo from "@/components/landing/WapakonetaBedBugInfo";
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
        <title>bed bug exterminator in Wapakoneta Ohio - Wapakoneta Bed Bug Pros</title>
        <meta name="description" content="Looking for a bed bug exterminator in Wapakoneta Ohio? We offer professional heat treatments, chemical solutions, and inspections. Call 3238801224 today!" />
        <meta name="keywords" content="bed bug exterminator in Wapakoneta Ohio, Wapakoneta bed bug treatment, pest control Wapakoneta OH, bed bug heat treatment Wapakoneta, bed bug inspection Wapakoneta" />
        <link rel="canonical" href="https://bedbugexterminatorinwapakonetaohio.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wapakoneta Bed Bug Pros",
            "image": "/1.jpeg",
            "@id": "https://bedbugexterminatorinwapakonetaohio.vercel.app/",
            "url": "https://bedbugexterminatorinwapakonetaohio.vercel.app/",
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
            "serviceType": "Bed Bug Extermination & Pest Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Wapakoneta Bed Bug Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Wapakoneta, OH"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Bed Bug Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heat Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chemical Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bed Bug Inspections" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventative Pest Control" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="bed bug exterminator in Wapakoneta Ohio - Wapakoneta Bed Bug Pros" />
        <meta property="og:description" content="Expert bed bug extermination services in Wapakoneta, OH. Thermal heat treatments and eco-friendly solutions to eliminate bed bugs permanently." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bedbugexterminatorinwapakonetaohio.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Bed Bug <br />
              <span className="text-white drop-shadow-sm uppercase">Exterminator in Wapakoneta Ohio</span>
            </>
          }
          subtitle="Wapakoneta's leading specialists in professional bed bug exterminator in Wapakoneta Ohio. We provide advanced thermal heat treatments, precision chemical applications, and comprehensive inspections to reclaim your home from infestations. Dedicated to Wapakoneta's peace of mind. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="WAPAKONETA BED BUG PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <WapakonetaBedBugInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Industry Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Pest Control South Point Ohio</a>
              <a href="https://gophercontrolfrankenmuthmi.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Gopher Control Frankenmuth MI</a>
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Leaking Pipe Repair Modesto</a>
              <a href="https://termiteinspectionburbank.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Termite Inspection Burbank</a>
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



