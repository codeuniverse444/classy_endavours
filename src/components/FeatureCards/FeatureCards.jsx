import React from 'react';
import FeatureCard from '../FeatureCard';
import './FeatureCards.module.css';

const FeatureCards = () => {
  const features = [
    {
      image: '/images/feature_logo.png',
      title: 'Visualize Data',
      description: 'Visualize your data with our intuitive chart maker'
    },
    {
      image: '/images/feature_logo.png', 
      title: 'Make a Workflow',
      description: 'Build process flows and diagrams with ease'
    },
    {
      image: '/images/feature_logo.png', 
      title: 'Write Code Snippets',
      description: 'Generate code for your projects in multiple languages'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl pt-6 md:text-2xl font-bold text-gray-900 mb-4 text-center">
          What our users say
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              image={feature.image} 
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
