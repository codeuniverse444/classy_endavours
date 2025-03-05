import React, { useState } from 'react';
import './WhyChoose.module.css';


const WhyChoose = () => {
  const [selected, setSelected] = useState("Trusted by Thousands");

  const options = [
    "Trusted by Thousands",
    "SOC-2 Certified",
    "GDPR & HIPAA Compliant",
    "End-to-end encryption",
  ];

   
    const containerBoxStyle = {
      boxShadow: "0px 10px 30px rgba(150, 100, 200, 0.3)",
      background: "linear-gradient(135deg, #e0e7ff, #f8fafc)",
      backdropFilter: "blur(7px)",
    };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose <span className="text-blue-600">Docutech</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          {/* Left Side */}
          <div className="flex flex-col space-y-6">
            {options.map((option, index) => (
              <button
                key={index}
                className={`px-36 py-4 text-lg font-medium border rounded-xl 
                transition-all duration-300 ease-in-out
                ${
                  selected === option
                    ? "bg-white text-blue-600 border-2 border-purple-500 shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
                onClick={() => setSelected(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <div
          className="bg-white rounded-2xl border border-gray-300 max-w-2xl x-30 mx-auto p-60"
          style={containerBoxStyle}
        ></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
