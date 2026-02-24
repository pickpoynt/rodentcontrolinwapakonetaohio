import { ShieldCheck, Zap, Activity, Shield, ArrowRight, Heart } from "lucide-react";

const MariettaCircuitBreakerInfo = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold">
                                <ShieldCheck className="w-4 h-4" />
                                Electrical Safety Experts
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
                                Precision <span className="text-indigo-600">circuit breaker installation marietta ga</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    In the heart of Marietta, GA, modern homes demand more power than ever before. If your circuit breakers are frequently tripping or your electrical panel is outdated, you're not just facing an inconvenience—you're dealing with a potential fire hazard.
                                </p>
                                <p className="italic border-l-4 border-indigo-600 pl-6 bg-slate-50 py-4 rounded-r-2xl">
                                    "Our mission is to fortify Marietta's residential electrical infrastructure through scientific diagnostics and premium hardware installation."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
                            <img
                                src="/4.jpeg"
                                alt="Professional Electrical Panel Work in Marietta"
                                className="rounded-[3rem] shadow-2xl relative z-10 border border-slate-100"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-50 max-w-[200px]">
                                <Activity className="w-8 h-8 text-indigo-600 mb-2" />
                                <p className="text-sm font-bold text-slate-900 uppercase">Real-time Load Balancing</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                icon: Zap,
                                title: "Panel Upgrades",
                                desc: "Replacing old or dangerous panels like Federal Pacific or Zinsco with modern, high-capacity systems."
                            },
                            {
                                icon: Shield,
                                title: "AFCI/GFCI Protection",
                                desc: "Integrated arc-fault and ground-fault protection to prevent electrical fires and shocks."
                            },
                            {
                                icon: Activity,
                                title: "Load Analysis",
                                desc: "Comprehensive power consumption audit to ensure your electrical system can handle modern appliances."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-600/20">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Warning Signs Section */}
                    <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <img src="/1.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase tracking-tight">
                                    Warning Signs You Need a <br />
                                    <span className="text-indigo-400">Breaker Replacement</span>
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Circuit breakers that trip frequently",
                                        "A burning smell coming from the electrical panel",
                                        "Physical damage or scorch marks on breakers",
                                        "Breakers that will not remain in the 'on' position",
                                        "Electrical panel feels hot to the touch",
                                        "Flickering lights when using large appliances"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                                    <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Marietta Service Area</p>
                                    <p className="text-white text-lg leading-relaxed font-medium">
                                        We serve all of Marietta, including West Side, East Cobb, Chestnut Ridge, and Kennesaw Mountain areas. Our technicians are local and arrive with fully stocked vans.
                                    </p>
                                </div>
                                <a
                                    href="tel:8449012684"
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-20 rounded-3xl flex items-center justify-center gap-4 font-bold uppercase tracking-widest text-lg transition-all shadow-2xl shadow-indigo-900/40 hover:-translate-y-1"
                                >
                                    <Zap className="w-6 h-6" />
                                    Request Emergency Service
                                    <ArrowRight className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof/Trust */}
                    <div className="mt-24 grid md:grid-cols-4 gap-8">
                        {[
                            { label: "Panel Upgrades", value: "3,500+" },
                            { label: "Marietta Response", value: "45 Min" },
                            { label: "Expert Techs", value: "Licensed" },
                            { label: "Safety Rating", value: "Elite" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MariettaCircuitBreakerInfo;
