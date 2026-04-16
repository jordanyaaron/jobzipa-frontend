import React, { useState } from "react";

const FAQS = [
  {
    question: "Jobzipa ni nini?",
    answer: "Jobzipa ni platform ya kuonyesha na kuunganisha watu na kazi mbalimbali."
  },
  {
    question: "Je naweza kuapply kazi kupitia Jobzipa?",
    answer: "Kwa sasa unabonyeza Apply Now na unaelekezwa moja kwa moja kwa employer."
  },
  {
    question: "Je kuna account inahitajika?",
    answer: "Hapana, unaweza kutumia bila ku-login."
  },
  {
    question: "Ninawezaje kupata kazi mpya?",
    answer: "Tembelea homepage au tumia search kupata kazi mpya."
  }
];

export default function FaQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-2 lg:p-4 mt-4 lg:mt-10">

      <h1 className="text-2xl text-[var(--text)] font-bold mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3">

        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
                key={index}
                className={`
                        "border-0 rounded-lg  overflow-hidden"
                        ${
                            isOpen ? "bg-gray-200 dark:bg-gray-900" : "bg-[var(--background)]"
                        }
                    `
                }
            >

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4"
              >
                <span className="font-medium text-left  text-[var(--text)] ">
                  {faq.question}
                </span>

                {/* ICON ROTATION */}
                <span
                  className={`text-xl  text-[var(--text)]  transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* ANSWER WITH ANIMATION */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden px-4`}
              >
                <p className="pb-4 text-sm text-[var(--placeholder)]">
                  {faq.answer}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}