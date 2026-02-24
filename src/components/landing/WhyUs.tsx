import { ShieldCheck, Clock, Award, Hammer } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Rapid Emergency Response",
    description: "Bed bug discoveries can't wait. Our Wapakoneta team provides fast assessment and treatment to ensure your home remains safe and pest-free 24/7."
  },
  {
    icon: Hammer,
    title: "Thermal Mastery",
    description: "We are bed bug specialists. Our licensed techs use premium thermal equipment and precision methods to ensure complete elimination."
  },
  {
    icon: Award,
    title: "Wapakoneta Certified",
    description: "Fully licensed and insured specifically for residential pest control in Ohio. We follow strict safety protocols for all extermination services."
  },
  {
    icon: ShieldCheck,
    title: "Safety First Guarantee",
    description: "Our focus is on your family's safety. We use eco-friendly treatments and identify hidden clusters to prevent future bed bug infestations."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
            <img
              src="/3.jpeg"
              alt="Professional Bed Bug Exterminator in Wapakoneta Ohio"
              className="rounded-[3rem] shadow-2xl relative z-10 border border-white"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-[240px]">
              <p className="text-3xl font-bold text-red-600 mb-1">100%</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight leading-tight">Elimination Rate in Wapakoneta OH</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold">
              <ShieldCheck className="w-4 h-4" />
              Wapakoneta Bed Bug Excellence
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
              Why Wapakoneta Trusts Our Bed Bug Pros
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed italic font-medium">
              We specialize in the intersection of Wapakoneta's local housing and advanced thermal technology. Our methods are precise, safe, and designed for long-term peace of mind.
            </p>


            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{feature.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Ready to reclaim your home?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none">Call Wapakoneta's Best</h4>
                </div>
                <a
                  href="tel:3238801224"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-red-900/20 hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



export default WhyUs;
