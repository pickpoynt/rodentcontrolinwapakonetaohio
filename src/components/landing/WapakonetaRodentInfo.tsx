import { ShieldCheck, MousePointer2, Zap, Home, Clock, Heart, AlertTriangle } from "lucide-react";

const WapakonetaRodentInfo = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-slate-900 font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Main Info Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold shadow-lg shadow-indigo-900/20">
                                <AlertTriangle className="w-4 h-4" />
                                Rodent Infestation Alert
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
                                Professional <span className="text-indigo-600">rodent control in Wapakoneta Ohio</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Rodent issues in Wapakoneta can lead to structural damage and serious health risks. Mice and rats are not just a nuisance; they carry diseases and can chew through electrical wiring, creating fire hazards in your OH home.
                                </p>
                                <p className="italic border-l-4 border-indigo-600 pl-6 bg-slate-50 py-4 rounded-r-2xl">
                                    "We specialize in comprehensive rodent exclusion and elimination, ensuring your Wapakoneta property is sealed tight against future invaders."
                                </p>
                                <p>
                                    Our localized approach understands the seasonal movement of rodents in Auglaize County, providing proactive solutions that keep your family safe year-round.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
                            <img
                                src="/4.jpeg"
                                alt="Rodent Control Specialist at Work"
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
                                Pest & Rodent <span className="text-indigo-500">Knowledge Base</span>
                            </h3>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What kills rodents permanently?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Permanent rodent control requires a combination of high-grade exclusion (sealing entry points) and effective removal of the existing population. Our Wapakoneta experts ensure no new entry points remain.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What kills rats & mice instantly?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Snap traps and specialized CO2 traps are the most effective way to achieve instant results. However, baiting programs are often needed for larger colonies hidden within walls.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">Who has to pay for rodent extermination?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Typically, homeowners are responsible for their own properties. In rental situations in Wapakoneta, landlords are generally responsible for maintaining a pest-free environment unless the tenant caused the infestation.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">Does Ohio have a rodent problem?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Yes, Ohio's varied climate and agricultural history mean that both urban and rural areas like Wapakoneta face significant pressure from Norway rats and house mice, especially during harvest season.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What smell do rodents hate?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Rodents strongly dislike the scent of peppermint oil, cloves, and cayenne pepper. While these can deter them, they rarely solve a nested infestation.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What months are rodents most active?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Rodent activity in Wapakoneta spikes in late fall and early winter (October through December) as they seek warmth and shelter inside homes to escape the cold.</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What are three signs of infestation?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">1. Droppings in pantries or behind appliances. 2. Gnaw marks on wood, wires, or food packaging. 3. Scratching or scurrying noises in walls or attics at night.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">Can I have visitors if I have rodents?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">While not as socially isolating as bed bugs, rodents carry bacteria like Salmonella. It is best to resolve the issue quickly to ensure your home is hygienic for guests.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What is the number one cause of rodents?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Easy access to food and shelter is the primary driver. Unsecured trash, pet food left out, and small gaps in the foundation are open invitations for Wapakoneta rodents.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">Are landlords responsible in Ohio?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Ohio law generally requires landlords to keep residential premises in a fit and habitable condition, which includes pest control, provided the tenant maintains cleanliness.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">What kind of illness can rodents cause?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Rodents can transmit Hantavirus, Leptospirosis, and Rat-bite fever. Their droppings and urine can also trigger asthma and allergic reactions.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-sm">Which Ohio city has the worst problem?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Major urban centers like Columbus and Cleveland report the highest numbers, but rural Wapakoneta sees significant field mouse pressure during seasonal changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Need expert <span className="text-indigo-600">rodent control in Wapakoneta Ohio</span>?</h3>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium">Don't let rodents compromise your home's integrity. Our specialists are ready to provide immediate inspections and permanent solutions in Wapakoneta.</p>
                        <a
                            href="tel:3238801224"
                            className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-indigo-900/20 hover:-translate-y-1"
                        >
                            Contact Wapakoneta Specialists
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WapakonetaRodentInfo;
