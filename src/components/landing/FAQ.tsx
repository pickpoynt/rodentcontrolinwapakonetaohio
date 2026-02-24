import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a rodent control service take in Wapakoneta?",
    answer: "An initial inspection and trapping setup typically takes 1.5 to 3 hours. We then perform follow-up visits every few days to monitor progress and ensure the population is eliminated."
  },
  {
    question: "Is rodent exclusion permanent?",
    answer: "Yes, our exclusion methods use professional-grade steel mesh, copper wool, and specialized sealants that rodents cannot chew through, providing a permanent physical barrier for your home."
  },
  {
    question: "Are your rodent baits safe for my pets?",
    answer: "We use Tier 1 bait stations that are tamper-resistant and designed to keep children and pets out. Our technicians strategically place these in areas inaccessible to domestic animals."
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer: "In most cases, no. Our rodent control methods are localized and don't involve broad chemical spraying, so you can remain in your home during the entire process."
  },
  {
    question: "How can I tell the difference between mice and rats?",
    answer: "Mice are smaller with larger ears and long thin tails. Rats are significantly larger (up to 10 inches), have thicker tails, and leave larger, pill-shaped droppings."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Rodent Control <span className="text-indigo-600">in Wapakoneta FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about rodent elimination, exclusion techniques, and pest prevention in Wapakoneta.
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
