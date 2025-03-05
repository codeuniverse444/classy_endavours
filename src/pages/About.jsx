import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About FlowChart</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-700 mb-6">
            FlowChart is an AI-powered unified platform designed to make the creation of diagrams, 
            flowcharts, and visual content effortless for professionals across industries.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to simplify complex visualization tasks and enable everyone to create 
            professional-quality diagrams with minimal effort, powered by cutting-edge AI technology.
          </p>
        
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;