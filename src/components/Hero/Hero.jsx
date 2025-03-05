import React, { useState } from "react";
import Button from "../Button";
import "./Hero.module.css";

const Hero = () => {
  const [textInput, setTextInput] = useState("");

 
  const buttonStyle = {
    borderRadius: "999px",
    padding: "10px 24px",
    fontSize: "16px",
    fontWeight: "500",
    backgroundColor: "#224b7a",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  
  const containerBoxStyle = {
    boxShadow: "0px 10px 30px rgba(150, 100, 200, 0.3)",
    background: "linear-gradient(135deg, #e0e7ff, #f8fafc)",
    backdropFilter: "blur(10px)",
  };

  return (
    <section className="bg-white pt-10 pb-16">
      <div className="container mx-auto px-6 text-center">
        
        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          AI-Powered Unified Platform:
          <span className="block text-blue-600">Create </span>Effortlessly
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
          Fast, Smart & Secure - Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
        </p>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        ✔  ESIGN Compliant   ✔  UETA Approved   ✔  eIDAS Certified
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="primary" size="large" style={buttonStyle}>
            Upload File
          </Button>
          <Button variant="secondary" size="large" style={buttonStyle}>
            Generate with AI
          </Button>
        </div>

        {/* Decorative Box */}
        <div
          className="bg-white rounded-2xl border border-gray-300 max-w-2xl mx-auto p-60"
          style={containerBoxStyle}
        ></div>

        {/* Business Stats Section */}
        <h1 className="text-2xl pt-6 md:text-2xl font-bold text-gray-900 mb-4 text-center">
          <span className="text-blue-600 font-extrabold">64.0K</span> businesses and individuals have signed with
          <span className="text-blue-800 font-extrabold"> DocuTech</span>
        </h1>

        {/* Logos Section */}
        <div className="flex justify-center items-center gap-10 mt-8 flex-wrap">
          <img src="/images/brand1.png" alt="UC San Diego" className="h-12" />
          <img src="/images/brand2.png" alt="VIRMA Global" className="h-12" />
          <img src="/images/brand3.png" alt="Howard University" className="h-12" />
          <img src="/images/brand4.png" alt="PharmBills" className="h-12" />
          <img src="/images/brand5.png" alt="Absa" className="h-12" />
          <img src="/images/brand6.png" alt="B2B Rocket" className="h-12" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
