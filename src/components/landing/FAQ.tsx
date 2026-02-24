import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is bed bug heat treatment safe for my home in Wapakoneta?",
    answer: "Yes, thermal heat treatment is 100% non-toxic and eco-friendly. It is the safest method for Wapakoneta families as it leaves no chemical residue and only uses controlled high temperatures to eliminate pests."
  },
  {
    question: "Do I need to throw away my furniture after an infestation?",
    answer: "In most cases, no. Our advanced thermal treatments penetrate deep into furniture, mattresses, and box springs to kill bed bugs hidden inside, allowing you to save your belongings."
  },
  {
    question: "How long does a bed bug exterminator in Wapakoneta Ohio service take?",
    answer: "A standard thermal heat treatment typically takes 6 to 10 hours depending on the size of the home. This ensures every corner reaches the lethal temperature required for complete elimination."
  },
  {
    question: "How do I prepare for a bed bug treatment?",
    answer: "Preparation involves removing heat-sensitive items (like aerosols, candles, and certain electronics) and ensuring clutter is minimized so heat or chemicals can reach all hiding spots. We provide a detailed checklist."
  },
  {
    question: "Can bed bugs travel between apartments or houses?",
    answer: "Yes, they are expert hitchhikers. In Wapakoneta's denser residential areas, they can travel through wall voids, electrical outlets, or via shared laundry facilities and common areas."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Bed Bug <span className="text-red-600">in Wapakoneta FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about bed bug extermination, thermal heat treatments, and pest prevention in Wapakoneta.
          </p>
        </div>





        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
