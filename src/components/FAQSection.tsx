import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: "What does W3 Eco Friendly do?",
    answer:
      "We provide secure, documented e-waste collection, compliant recycling and refurbishment, certified data destruction, and reporting - focused on enterprises, government and institutions.",
  },
  {
    question: "Do you work with enterprises and institutions?",
    answer:
      "Yes. We handle bulk assets, on-site collection, chain-of-custody documentation, data sanitisation, and compliance certificates for ESG and audit needs.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "On volumes, device types, location and compliance requirements. Share a pickup scope and we’ll confirm timing, logistics and charges before collection.",
  },
  {
    question: "How do organisations request a collection?",
    answer:
      "Submit a Request Pickup via Contact Us or call our operations team. We confirm scope, timing and access, then schedule a documented, compliant pickup.",
  },
  {
    question: "What happens after collection?",
    answer:
      "Assets move through controlled logistics to approved facilities for sorting, data sanitisation, material recovery and responsible recycling - supported by audit trails and certificates.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        {/* Eyebrow + title - calm, Apple-like restraint */}
        <div className="text-center">
          <p className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600">
            Questions & answers
          </p>
          <h2 id="faq-heading" className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Answers, clearly.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600">
            Straightforward information about collection, data destruction and certification - without jargon.
          </p>
        </div>

        {/* Accordion - hairline dividers, no cards, no shadows */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <ul role="list" className="divide-y divide-zinc-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={faq.question} className="group">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-8"
                  >
                    <span className="flex-1 pr-2">
                      <span className="block text-sm font-medium leading-6 text-zinc-900 sm:text-base">{faq.question}</span>
                      {/* Subtle hint when collapsed - keeps the list scannable */}
                      {!isOpen && (
                        <span className="mt-1 hidden text-xs leading-5 text-zinc-500 sm:block">
                          {faq.answer.slice(0, 82)}…
                        </span>
                      )}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-zinc-900 bg-zinc-900 text-white"
                          : "border-zinc-200 bg-white text-zinc-600 group-hover:border-zinc-300 group-hover:text-zinc-900"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={
                          shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                        }
                        className="flex items-center justify-center"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="block">
                          <path d="M7 2.5V11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.32, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.2 } }
                        }
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 sm:px-8">
                          <p className="max-w-[60ch] text-sm leading-6 text-zinc-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-6 text-center text-sm">
          <span className="text-zinc-500">Still have questions? </span>
          <a
            href="/contact-us"
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Contact our team
          </a>
          <span className="text-zinc-500"> - we’ll route you to the right specialist.</span>
        </p>
      </div>
    </section>
  );
}
