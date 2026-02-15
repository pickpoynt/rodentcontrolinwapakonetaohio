import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone } from "lucide-react";

const WestSenecaPlumbingInfo = () => {
    return (
        <section id="west-seneca-info" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80')] opacity-[0.02] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <MapPin className="w-4 h-4" />
                            <span>West Seneca, NY</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-blue-600">Plumbing Services</span> in West Seneca
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Serving West Seneca homeowners and businesses with professional plumbing solutions. From emergency repairs to routine maintenance, we're your trusted local plumbing experts.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Why Choose Us */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Shield className="w-7 h-7 text-blue-600" />
                                    Why West Seneca Trusts Us
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">24/7 Emergency Response</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Plumbing emergencies don't wait for business hours. Our West Seneca team is available around the clock to handle burst pipes, severe leaks, and urgent repairs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Licensed & Insured Professionals</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                All our plumbers are fully licensed, insured, and background-checked. We maintain the highest standards of professionalism and expertise in every job.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Wrench className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Advanced Diagnostic Equipment</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We use state-of-the-art camera inspection systems, leak detection technology, and precision tools to diagnose and fix problems efficiently.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Services */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Wrench className="w-7 h-7 text-blue-600" />
                                    Our Specialized Services
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: Droplet, title: "Leak Detection & Repair", desc: "Advanced technology to find and fix hidden leaks" },
                                        { icon: Thermometer, title: "Water Heater Services", desc: "Installation, repair, and maintenance of all types" },
                                        { icon: Wrench, title: "Drain Cleaning", desc: "Professional hydro-jetting and rooter services" },
                                        { icon: Shield, title: "Pipe Repair & Replacement", desc: "Modern solutions for aging plumbing systems" },
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all group">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">{service.title}</h4>
                                                <p className="text-slate-600 text-xs">{service.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* West Seneca Specific Info */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Serving All of West Seneca
                                </h3>
                                <p className="text-blue-100 leading-relaxed mb-6 italic">
                                    From the historic neighborhoods near Union Road to the growing communities around Seneca Street, we provide comprehensive plumbing services throughout West Seneca. Our local expertise means we understand the unique plumbing challenges of Western New York homes, including frozen pipes in harsh winters and aging infrastructure in older properties.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-300" />
                                        <span className="text-sm font-medium">Same-day service available</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-300" />
                                        <span className="text-sm font-medium">Upfront pricing with no hidden fees</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-300" />
                                        <span className="text-sm font-medium">100% satisfaction guarantee</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="text-center">
                                    <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Call Us Now</p>
                                    <a href="tel:8777921410" className="text-4xl font-bold hover:text-blue-200 transition-colors block mb-4">
                                        (877) 792-1410
                                    </a>
                                    <p className="text-blue-100 text-sm italic">
                                        Available 24/7 for emergencies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg">
                            <h4 className="font-bold text-slate-900 mb-3 uppercase text-sm tracking-wide">Winter Plumbing Protection</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                West Seneca winters are harsh. We specialize in winterization services, frozen pipe repair, and preventative maintenance to protect your home during cold months.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg">
                            <h4 className="font-bold text-slate-900 mb-3 uppercase text-sm tracking-wide">Older Home Specialists</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Many West Seneca homes were built decades ago. We have extensive experience updating and repairing plumbing in older properties while preserving their character.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg">
                            <h4 className="font-bold text-slate-900 mb-3 uppercase text-sm tracking-wide">Commercial Services</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We also serve West Seneca businesses with commercial plumbing solutions, from restaurants to retail spaces and office buildings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WestSenecaPlumbingInfo;
