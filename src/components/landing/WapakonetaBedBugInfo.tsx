import { ShieldCheck, Bug, Zap, Home, Clock, Heart, AlertTriangle } from "lucide-react";

const WapakonetaBedBugInfo = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Main Info Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold shadow-lg shadow-red-900/20">
                                <AlertTriangle className="w-4 h-4" />
                                Urgent Bed Bug Alert
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
                                Trusted <span className="text-red-600">bed bug exterminator in Wapakoneta Ohio</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Discovering bed bugs in your Wapakoneta home can be a traumatizing experience. These elusive pests are experts at hiding and multiply rapidly, making DIY solutions nearly impossible.
                                </p>
                                <p className="italic border-l-4 border-red-600 pl-6 bg-slate-50 py-4 rounded-r-2xl">
                                    "Our goal is to provide Wapakoneta residents with the most advanced thermal and chemical solutions to eliminate infestations at the source."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-red-600/5 rounded-[3rem] blur-2xl" />
                            <img
                                src="/4.jpeg"
                                alt="Professional Bed Bug Treatment Service"
                                className="rounded-[3rem] shadow-2xl relative z-10 border border-slate-100"
                            />
                        </div>
                    </div>

                    {/* Q&A Section */}
                    <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden mb-24">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <img src="/1.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center uppercase tracking-tight">
                                Understanding <span className="text-red-500">Bed Bugs in Ohio</span>
                            </h3>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What kills bed bugs permanently?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">The only way to kill bed bugs permanently is to eliminate every single egg, nymph, and adult. This is best achieved through professional whole-room heat treatment or a series of rigorous chemical applications by a licensed exterminator.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What kills bedbugs instantly?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Direct contact with high heat (above 120°F) or specialized professional insecticides can kill bed bugs instantly. However, instant kills don't solve the infestation hidden in walls or furniture.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">Who has to pay for bed bug extermination?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">In many cases, the property owner or landlord is responsible, but this can vary based on local Wapakoneta ordinances and lease agreements. Homeowners are typically responsible for their own properties.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">Does Ohio have a bed bug problem?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Yes, Ohio consistently ranks as one of the states with the highest bed bug activity in the nation, with cities like Cleveland, Cincinnati, and Columbus often topping the lists.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What smell do bed bugs hate?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Bed bugs are known to dislike the smell of lavender, peppermint, tea tree oil, and professional-grade pheromone disruptors used by exterminators.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What are three signs of bed bug infestation?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">The most common signs are: 1. Small reddish-brown blood spots on sheets. 2. Dark clusters of fecal spotting. 3. Finding the actual bugs or their translucent shed skins.</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What month are bed bugs most active?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Bed bugs are active year-round indoors, but infestations often peak in late summer (August and September) due to increased travel and optimal breeding temperatures.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">Can I have visitors if I have bed bugs?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">It is highly discouraged. You risk spreading the infestation to your visitors' homes via their clothing or bags. It's best to wait until after the final professional clearance.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What is the number one cause of bed bugs?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">The primary cause is travel. Bed bugs are hitchhikers that latch onto luggage, used furniture, and clothing in infested hotels or public transport and are then brought into new environments.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">Are landlords responsible for bed bugs in Ohio?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Generally, the implied warranty of habitability in Ohio requires landlords to keep their units pest-free, though specific lease terms can sometimes complicate the responsibility.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">What kind of illness can bed bugs cause?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">While not known to transmit diseases, bed bugs cause significant psychological distress, insomnia, and secondary skin infections from scratching the itchy bites.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-3 uppercase tracking-tight text-sm">Which city has the worst bed bug infestation?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Nationwide, cities like Chicago and Philadelphia often swap ranks for the top spot, but within Ohio, Cleveland remains a significantly affected area.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Need a professional <span className="text-red-600">bed bug exterminator in Wapakoneta Ohio</span>?</h3>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium">Don't wait for the problem to grow. Our team is ready to provide immediate inspections and elimination services in Wapakoneta.</p>
                        <a
                            href="tel:3238801224"
                            className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-red-900/20 hover:-translate-y-1"
                        >
                            Contact Specialist Now
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WapakonetaBedBugInfo;
