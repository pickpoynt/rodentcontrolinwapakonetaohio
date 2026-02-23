import { ShieldCheck, Target, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Home, Shield, Volume2, Sparkles, Sprout, Hammer, Droplets } from "lucide-react";

const FultonEarwigControlInfo = () => {
    return (
        <section id="earwig-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Fulton Maryland Pest Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">Earwig control Fulton MD</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting your basement, crawl spaces, and foundation from moisture-seeking "pincher bugs." Our Fulton-based earwig control specialists deploy targeted barrier treatments and dehumidification strategies to ensure the comfort of your Howard County home.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Earwig Nuisance in Howard County
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Moisture Migration Analysis</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                In Maryland, humid summers drive earwigs into residential structures. They exploit foundation cracks and gaps around doors to find damp refuge. Our Earwig control Fulton MD team performs deep-foundation audits to identify every moisture source and hidden nesting site.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Perimeter Defense</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We create an impenetrable chemical and physical barrier around your home. By treating mulch beds and foundation lines, we intercept earwigs before they reach your interior. Our techniques are designed to withstand the varying weather of Maryland's transition seasons.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Crawl Space Restoration</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Earwigs thrive in damp dark spaces. We provide moisture control services to dry out crawl spaces and basements, making them uninhabitable for "pincher bugs." We ensure your home's lower levels are dry, clean, and pest-free.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Fulton & Howard County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid response for Earwig control Fulton MD in:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Fulton",
                                        "Scaggsville",
                                        "Maple Lawn",
                                        "North Laurel",
                                        "Columbia",
                                        "Highland",
                                        "Clarksville",
                                        "West Laurel"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <img src="/3.jpeg" alt="Earwig Control Mitigation" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Fulton Standard</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In Fulton, our lush landscaping provides the perfect habitat for earwigs. Our Earwig control Fulton MD experts are deeply familiar with the Howard County soil and moisture patterns. We provide high-efficiency management plans that secure your home without disrupting your beautiful garden.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">Earwig control Fulton MD</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Search, title: "Foundation Gatherings", desc: "Finding groups of earwigs under potted plants or near basement windows is a clear sign that a larger population is seeking entry." },
                                { icon: Droplets, title: "Damp Spot Clusters", desc: "Earwigs aggregate in high-moisture zones. If you see them in laundry rooms or bathrooms, you likely have a humidity issue they're exploiting." },
                                { icon: Activity, title: "Seedling Damage", desc: "Jagged holes in young garden plants or flowers overnight often indicates a nocturnal earwig infestation in your yard's mulch beds." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical CTA Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Eliminate the Pincher Bug Invasion Today
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't let earwigs take over your basement or garden. Our Fulton earwig control team provides immediate assessment and intervention to remove pests and seal your foundation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Pest Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Barrier Tech</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">24/7 Response</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Earwig control Fulton MD</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    Earwig control Fulton MD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FultonEarwigControlInfo;
