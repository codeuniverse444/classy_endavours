import React from 'react';
import Button from '../Button';
import Card from '../Card';
import './PlanCard.module.css';

const PlanCard = ({ name, price, features, isPopular, buttonText }) => {
  return (
    <div className={`overflow-hidden rounded-lg border ${isPopular ? 'border-blue-500' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-1 text-sm">
          Most Popular
        </div>
      )}
      <Card className="p-6" hover={false}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
        <div className="flex items-end mb-6">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-1">/month</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={isPopular ? 'primary' : 'secondary'} 
          className="w-full"
        >
          {buttonText}
        </Button>
      </Card>
    </div>
  );
};

export default PlanCard;