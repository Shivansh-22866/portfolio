'use client'
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you offer freelance services or are looking for full-time employment opportunities only?",
    answer:
      "Both options are open; it depends on the project's scope and requirements.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
  {
    question: "Are there any specific industries or domains where you'd like to apply your skills?",
    answer:
      "While open to opportunities across various sectors, I'm particularly interested in applying my skills within tech startups focused on innovation and social impact.",
  }
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return <section id="faqs" className="section">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {faqs.map(({question, answer}, faqIndex) => (
          <div key={question} className="border-t pl-4 border-stone-400 border-dotted last:border-b py-6 md:py-8 lg:py-10 relative isolate group/faq"
          onClick={() => {
            if(selectedIndex === faqIndex) {
              setSelectedIndex(null)
            }
            else {
              setSelectedIndex(faqIndex)
            }
          }}>
            <div className="absolute h-0 w-full bg-stone-300 bottom-0 left-0 -z-10 group-hover/faq:h-full transition-all duration-700"></div>
            <div className="flex items-center justify-between py-6 gap-4">
              <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
              <div className={twMerge("inline-flex items-center justify-center bg-stone-200 size-11 border border-stone-400 rounded-full shrink-0 transition-transform duration-500",
                faqIndex === selectedIndex && 'rotate-45'
              )}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
              </div>

            </div>

            <AnimatePresence>
            {faqIndex === selectedIndex && (
                        <motion.div className="overflow-hidden" initial={{height: 0}} animate={{height: 'auto'}} exit={{height: 0}} transition={{duration: 0.5, ease: 'easeInOut'}}>
                          <p className="text-xl mt-4 pr-2">{answer}</p>
                        </motion.div>
            )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  </section>;
};

export default FAQs;
