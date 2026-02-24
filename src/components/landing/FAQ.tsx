import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How often should I have my electrical panel inspected in Marietta?",
    answer: "For homes in Marietta, we recommend a professional electrical safety inspection every 3-5 years, or immediately if you notice flickering lights, buzzing sounds, or frequently tripping breakers."
  },
  {
    question: "What are the benefits of upgrading to a modern circuit breaker?",

    answer: "Modern circuit breakers provide superior protection against electrical fires through AFCI (Arc Fault Circuit Interrupter) and GFCI (Ground Fault Circuit Interrupter) technology, and can handle the higher power demands of today's appliances."
  },
  {
    question: "How long does a circuit breaker installation marietta ga typically take?",
    answer: "A standard circuit breaker replacement can take as little as 30 minutes, while a complete panel upgrade usually takes a full day (8-10 hours) to ensure everything is code-compliant and safely integrated."
  },
  {
    question: "Can I replace a circuit breaker myself?",
    answer: "No. Electrical work is extremely dangerous and requires specialized knowledge of load balancing and safety protocols. In Marietta, electrical work must be performed by a licensed professional to ensure insurance coverage and safety."
  },
  {
    question: "Will my power be off during the installation?",
    answer: "Yes, for safety reasons, we must disconnect the main power while working on the panel. We will coordinate with you to minimize disruption and ensure your power is restored as quickly as possible."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Electrical <span className="text-indigo-600">in Marietta FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about circuit breaker installation, panel upgrades, and electrical safety in Marietta.
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
