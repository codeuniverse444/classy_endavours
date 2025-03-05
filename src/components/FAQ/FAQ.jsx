import React, { useState } from 'react';
import './FAQ.module.css';

const FAQ = () => {
  const faqs = [
    {
      question: "Are Docutech's signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
    },
    {
      question: "Are Docutech's signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
    },
    {
      question: "Are Docutech's signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
    },
    {
      question: "Are Docutech's signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen-except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 rounded-lg bg-blue-800 text-white font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-blue-50 border-b border-l border-r border-blue-200 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
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