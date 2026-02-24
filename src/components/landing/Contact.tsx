import { ShieldCheck, Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Wapakoneta Pest Control Safety
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                  Reclaim Your Home <br />
                  <span className="text-red-600">bed bug exterminator in Wapakoneta Ohio</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed italic font-medium">
                  Professional Wapakoneta bed bug specialists ready to eliminate infestations and harden your home's defenses. 24/7 emergency response for immediate pest concerns.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">BED BUG HOTLINE</p>
                  <a href="tel:3238801224" className="text-xl font-bold text-slate-900">(323) 880-1224</a>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">WAPAKONETA EXPERTS</p>
                  <p className="text-sm font-bold text-slate-900 uppercase">Wapakoneta, OH 45895</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-600 font-bold uppercase tracking-tight text-xs">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span>Emergency Service Area: Wapakoneta • Lima • St. Marys • Sidney</span>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative group">
              <div className="absolute inset-0 bg-red-600/[0.02] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight relative z-10">Request an Inspection</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <Input placeholder="Your Name" className="h-14 rounded-2xl bg-slate-50 border-slate-100 px-6 font-medium focus:ring-red-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <Input placeholder="Your Number" className="h-14 rounded-2xl bg-slate-50 border-slate-100 px-6 font-medium focus:ring-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Type</label>
                  <select className="w-full h-14 rounded-2xl bg-slate-50 border-slate-100 px-6 font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>Thermal Heat Treatment</option>
                    <option>Chemical Bed Bug Extermination</option>
                    <option>Bed Bug Inspection</option>
                    <option>Emergency Service Call</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Situation Details</label>
                  <Textarea placeholder="Describe the pest issues or concerns you're facing..." className="min-h-[150px] rounded-3xl bg-slate-50 border-slate-100 p-6 font-medium focus:ring-red-500" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-16 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-red-900/20 transition-all hover:gap-4">
                  Submit Request <Send className="w-5 h-5" />
                </Button>
                <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest pt-4 italic">
                  Rapid Response Guaranteed in Wapakoneta, OH
                </p>
              </form>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
