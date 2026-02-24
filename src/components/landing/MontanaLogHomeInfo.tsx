import { ShieldCheck, Target, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Home, Shield, Volume2, Sparkles, Sprout, Hammer, Droplets } from "lucide-react";

const MontanaLogHomeInfo = () => {
    return (
        <section id="restoration-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Montana Log Home Restoration Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">log home restoration montana</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Preserving the structural integrity and aesthetic beauty of Montana's iconic log structures. Our specialist team provides precision log home restoration montana, using advanced techniques like media blasting, chinking, and high-performance staining to protect your investment against the harsh Big Sky environment.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Log Home Challenge in Montana
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Hammer className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Structural Log Repair</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Montana's extreme temperature swings and heavy snow can lead to moisture trapping and log rot. Our log home restoration montana experts perform detailed inspections to identify soft spots, carpenter ant damage, and fungal growth, providing professional log replacement and structural reinforcement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Weatherization & Chinking</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Proper chinking is vital for energy efficiency and pest prevention in Montana. We apply high-performance, flexible chinking that moves with your logs, creating a weather-tight seal that keeps the mountain chill out and your heat in.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Surface Preparation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We use eco-friendly media blasting (corn cob or glass bead) to strip old, failing finishes without damaging the delicate wood surface. This ensures the best possible bond for new stains and preservatives, extending the life of your finish.
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
                                    Serving All of Montana
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Professional log home restoration montana in:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Helena",
                                        "Missoula",
                                        "Bozeman",
                                        "Billings",
                                        "Kalispell",
                                        "Whitefish",
                                        "Big Sky",
                                        "Hamilton"
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
                                <img src="/4.jpeg" alt="Log Home Restoration" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Montana Heritage</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    Log homes are part of Montana's soul. Our log home restoration montana services are dedicated to preserving these structures for generations to come. We combine old-world craftsmanship with modern material science to ensure your cabin survives everything from summer UV rays to brutal winter storms.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">log home restoration montana</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Search, title: "Faded Finish", desc: "UV damage in Montana can bleach logs and degrade protective stains. If your logs look grey or thirsty, it's time for a professional refinishing." },
                                { icon: Droplets, title: "Peeling Chinking", desc: "Gaps or peeling chinking allow moisture and pests to enter the log stack, leading to internal rot and high energy bills." },
                                { icon: Activity, title: "Log Checks", desc: "While some checking is normal, upward-facing cracks can collect water and lead to rot if not properly sealed or maintained." }
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
                                    Preserve Your Mountain Home
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't wait for rot to set in. Our Montana restoration team provides comprehensive assessments and tailored solutions to keep your log home beautiful and sound.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Media Blasting</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Rot Repair</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Big Sky Experts</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Restoration Hotline</p>
                                <a href="tel:8449012684" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (844) 901-2684
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    log home restoration montana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MontanaLogHomeInfo;
