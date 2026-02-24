import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MontanaLogHomeInfo from "@/components/landing/MontanaLogHomeInfo";
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
        <title>log home restoration montana - Montana Log Home Restoration Pros</title>
        <meta name="description" content="Professional log home restoration montana. Expert log house repair, chinking, staining, and media blasting in Montana. Call 8449012684 today!" />
        <meta name="keywords" content="log home restoration montana, log cabin repair Montana, chinking services Montana, log home staining Montana, media blasting Montana" />
        <link rel="canonical" href="https://loghomerestorationmontana.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Montana Log Home Restoration Pros",
            "image": "/1.jpeg",
            "@id": "https://loghomerestorationmontana.vercel.app/",
            "url": "https://loghomerestorationmontana.vercel.app/",
            "telephone": "+18449012684",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Helena",
              "addressRegion": "MT",
              "postalCode": "59601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.5891",
              "longitude": "-112.0391"
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
            "serviceType": "Log Home Restoration & Log Cabin Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Montana Log Home Restoration Pros"
            },
            "areaServed": {
              "@type": "State",
              "name": "Montana"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Log Home Restoration Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Home Stripping & Refinishing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Rot Repair & Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chinking & Caulking" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Home Staining & Sealing" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="log home restoration montana - Montana Log Home Restoration Pros" />
        <meta property="og:description" content="Expert log home restoration and log cabin repair services across Montana. Media blasting, chinking, and staining especialistas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loghomerestorationmontana.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Log Home <br />
              <span className="text-white drop-shadow-sm uppercase">Restoration in Montana</span>
            </>
          }
          subtitle="Montana's premier specialists in log home restoration montana. We provide expert log cabin repair, professional staining, chinking, and media blasting to preserve and protect your mountain retreat. Dedicated to preserving Montana's rustic heritage. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="MONTANA LOG HOME RESTORATION PROS"
          phone="8449012684"
        />
        <Services />
        <WhyUs />
        <MontanaLogHomeInfo />
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


