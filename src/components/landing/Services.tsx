import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Full Panel Upgrades",
    description: "Our circuit breaker installation marietta ga experts provide complete electrical panel replacements to support modern home power demands safely."
  },
  {
    icon: Search,
    title: "Precision Diagnostics",
    description: "Advanced troubleshooting to identify why your breakers are tripping and providing long-term solutions for electrical stability in Marietta."
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description: "Comprehensive audits of your electrical system to ensure compliance with Georgia electrical codes and modern safety standards."
  },
  {
    icon: Activity,
    title: "Sub-Panel Installation",
    description: "Adding extra capacity for home additions, EV chargers, or specialized equipment with professional sub-panel integration."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">circuit breaker installation marietta ga</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive electrical solutions designed for Marietta's unique residential landscape. We protect your home's safety and power efficiency.
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
