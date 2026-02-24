import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How often does a log home in Montana need restoration?",
    answer: "Typically, log homes in Montana should be inspected every 2-3 years and may need full staining or resealing every 4-7 years, depending on UV exposure and the quality of previous treatments."
  },
  {
    question: "What is media blasting and why is it used?",
    answer: "Media blasting uses eco-friendly materials like corn cob or glass beads to safely strip old, failing finishes from logs. It's the most effective way to prepare the surface for new stains without damaging the wood."
  },
  {
    question: "Do you provide log home restoration montana services year-round?",
    answer: "While inspections and some repairs can be done year-round, stripping and staining are best performed during the warmer months (typically late spring through early fall) to ensure proper drying and bonding."
  },
  {
    question: "Can you fix logs that have already started to rot?",
    answer: "Yes. We specialize in log repair and replacement. We can remove the rotted sections and replace them with new, structurally sound logs that match your existing home's architecture."
  },
  {
    question: "How do you prevent pests from entering my log home?",
    answer: "We use high-quality chinking and caulking to seal all gaps between logs, around windows, and at corners. This not only improves energy efficiency but also creates a barrier against insects and rodents."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Restoration <span className="text-indigo-600">in Montana FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about log home preservation, media blasting, and our professional restoration process in Montana.
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
