import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I know if earwigs are invading my home?",
    answer: "Common signs include finding clusters of earwigs in damp areas like basements, bathrooms, or under kitchen sinks. You may also notice small, jagged holes in young garden plants or seedlings overnight."
  },
  {
    question: "Do earwigs bite or cause structural damage?",
    answer: "Earwigs do not bite humans, though they can use their pincers if handled. They don't cause structural damage like termites, but they are a major nuisance and can damage gardens and indoor plant life."
  },
  {
    question: "How do you provide earwig control in Fulton MD?",
    answer: "We use a combination of perimeter barrier treatments, foundation sealing, and moisture management. By addressing the damp conditions that attract earwigs, we create an environment that's naturally repellent to them."
  },
  {
    question: "Why are earwigs so common in Howard County?",
    answer: "Howard County's humid climate and lush landscapes provide the perfect damp environments earwigs love. They thrive in mulch, leaf litter, and wood piles before seeking the moisture of your home's foundation."
  },
  {
    question: "How long does the treatment process take?",
    answer: "Most assessments and initial barrier treatments are completed within 24 hours. The full moisture mitigation and foundation sealing process usually takes 2 to 4 days, depending on the property size."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Earwig control <span className="text-indigo-600">in Fulton MD FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about earwig behavior, moisture risks, and our professional barrier process in Howard County.
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
