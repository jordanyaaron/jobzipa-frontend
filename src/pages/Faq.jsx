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
    <div className="max-w-3xl mx-auto p-4 mt-10 text-[var(--text)]" >

      <h1 className="text-2xl font-bold mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3">

        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 bg-white dark:bg-gray-900"
          >

            {/* QUESTION */}
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium">
                {faq.question}
              </span>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}


