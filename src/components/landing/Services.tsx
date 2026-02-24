import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Mice Extermination",
    description: "Our rodent control in Wapakoneta Ohio experts use specialized trapping systems to eliminate mice populations without toxic residue."
  },
  {
    icon: Search,
    title: "Rat Protection",
    description: "Advanced exclusion techniques that are safe for your family while providing long-term structural protection against returning rats in Wapakoneta."
  },
  {
    icon: ShieldCheck,
    title: "Rodent Exclusion",
    description: "Thorough visual inspections and sealing of entry points to confirm and prevent the presence of rodents throughout your Wapakoneta property."
  },
  {
    icon: Activity,
    title: "Sanitization Services",
    description: "Cleaning and decontaminating affected areas to remove nests, droppings, and potential bacteria after successful rodent removal."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">rodent control in Wapakoneta Ohio</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive rodent solutions designed for Wapakoneta's unique properties. We reclaim your home's hygiene and safety.
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
