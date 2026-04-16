import React, { useState } from "react";

const FAQS = [
  {
    question: "What does Jobzipa stand for?",
    answer:
        "Jobzipa stands for 'Job Zipping Area' — a digital hub where job opportunities are gathered and made easily accessible. It’s designed to simplify the way people discover and connect with jobs across different industries."
  },
  {
    question: "Can I apply for jobs directly on Jobzipa?",
    answer:
      "At the moment, Jobzipa does not support direct job applications. Instead, you can click the 'Apply Now' button available on the job details page to be redirected to the employer’s application platform. In some cases, you may also need to follow the application instructions provided within the job description by the job provider."
  },
  {
    question: "Do I need an account to use Jobzipa?",
    answer:
      "No, you can browse and explore job listings on Jobzipa without creating an account."
  },
  {
    question: "Can I post a job on Jobzipa?",
    answer:
      "Currently, job postings are managed by the Jobzipa team. If you are a job provider and would like to share an opportunity, you can contact us for assistance. Future updates may allow employers to post jobs directly on the platform."
  },
  {
    question: "How can I find new jobs?",
    answer:
      "You can explore new job opportunities by visiting the homepage or using the search feature to find jobs that match your interests."
  },
  {
    question: "Is Jobzipa free to use?",
    answer:
      "Yes, Jobzipa is completely free for job seekers. You can browse and explore job opportunities without any cost."
  },
  {
    question: "Are the jobs on Jobzipa verified?",
    answer:
      "We strive to share only relevant and legitimate job opportunities. However, we encourage users to carefully review job details and apply through official company channels."
  },
  {
    question: "What countries does Jobzipa cover?",
    answer:
      "Jobzipa features job opportunities from various countries. Some listings are location-specific, while others include remote roles that can be done from anywhere. We recommend checking the job location details in each listing."
  },
  {
    question: "How often are new jobs added?",
    answer:
      "New jobs are added regularly. We recommend checking the platform frequently to stay up to date with the latest opportunities."
  },
  {
    question: "How can I contact Jobzipa?",
    answer:
      "You can reach out to us through our contact page or official communication channels for any inquiries or support."
  } ,
  {
    question: "Can I save jobs for later?",
    answer:
      "Yes, you can bookmark jobs to easily access them later."
  },
  {
    question: "What types of jobs are listed on Jobzipa?",
    answer:
      "Jobzipa features a wide range of opportunities, including full-time, part-time, contract, remote, and on-site jobs across different industries."
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

      <div className="space-y-0">

        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
                key={index}
                className={`
                        "border-0 rounded-lg  overflow-hidden"
                        ${
                            isOpen ? "bg-gray-100 dark:bg-gray-900" : "bg-[var(--main-bg)]"
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