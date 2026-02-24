import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Media Blasting",
    description: "Our log home restoration montana experts use eco-friendly media blasting to safely remove old finishes and prepare logs for new treatment."
  },
  {
    icon: Search,
    title: "Chinking & Caulking",
    description: "High-performance chinking services in Montana to seal gaps, improve energy efficiency, and prevent pest intrusion in your log structure."
  },
  {
    icon: ShieldCheck,
    title: "Log Repair & Replacement",
    description: "Specialized repair for log rot and structural damage caused by Montana's extreme weather, ensuring your home's longevity."
  },
  {
    icon: Activity,
    title: "Staining & Sealing",
    description: "Professional staining and UV protection specifically formulated for Montana's climate to keep your log home beautiful and resilient."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">log home restoration montana</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive preservation solutions designed for Montana's unique log home architecture. We protect your mountain retreat from the elements.
          </p>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
