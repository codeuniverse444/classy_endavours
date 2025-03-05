import React from 'react';
import Card from '../Card';
import './FeatureCard.module.css';

const FeatureCard = ({ image, title, description }) => {
  return (
    <Card>
      {/* Top content */}
      <img 
        src={image} 
        alt={title} 
        className="w-16 h-16 mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* 5-star rating at the bottom */}
      <div className="mt-4">
        <span className="inline-block text-yellow-400 text-2xl">&#9733;</span>
        <span className="inline-block text-yellow-400 text-2xl">&#9733;</span>
        <span className="inline-block text-yellow-400 text-2xl">&#9733;</span>
        <span className="inline-block text-yellow-400 text-2xl">&#9733;</span>
        <span className="inline-block text-yellow-400 text-2xl">&#9733;</span>
      </div>
    </Card>
  );
};

export default FeatureCard;
