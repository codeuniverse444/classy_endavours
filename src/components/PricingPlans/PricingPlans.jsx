import React from 'react';
import PlanCard from '../PlanCard';
import './PricingPlans.module.css';

const PricingPlans = () => {
  const plans = [
    {
      name: "FREE",
      price: "0",
      duration: "/Month",
      features: ["5 documents a month", "Activity timeline"],
      buttonText: "Select Plan",
      bgColor: "bg-white text-black",
      border: "border border-gray-300",
      highlight: false,
    },
    {
      name: "Premium",
      price: "10",
      duration: "/Month",
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
      buttonText: "Select Plan",
      bgColor: "bg-[#224b7a] text-white",
      border: "",
      highlight: true,
    },
    {
      name: "Teams",
      price: "8",
      duration: "/Month per month",
      subtitle: "Minimum total of USD 24/month",
      features: ["Everything from Premium", "Team management", "Transferable contracts"],
      buttonText: "Select Plan",
      bgColor: "bg-[#224b7a] text-white",
      border: "",
      highlight: true,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8">
     
      <div className="w-full max-w-4xl bg-white p-6 mb-8">
        <h1 className="text-2xl font-bold text-center">
          Pick your plan. <span className="text-gray-600">We make this part easy too.</span>
        </h1>
        <div className="flex justify-center mt-4">
          <div className="flex bg-white border border-gray-400 rounded-full overflow-hidden">
            <button className="px-6 py-2 bg-[#224b7a] text-white font-medium rounded-full">
              Monthly
            </button>
            <button className="px-6 py-2 text-black font-medium">Annually</button>
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-lg ${plan.bgColor} ${plan.border} relative ${
              plan.highlight ? "ring-2 ring-pink-300" : ""
            }`}
          >
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="text-3xl font-semibold flex items-baseline">
              USD <span className="text-5xl ml-2">{plan.price}</span>
              <span className="text-lg">{plan.duration}</span>
            </p>
            {plan.subtitle && <p className="text-sm font-semibold">{plan.subtitle}</p>}
            <ul className="mt-4 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  • {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 rounded-full ${
                plan.highlight ? "bg-white text-[#224b7a]" : "bg-[#224b7a] text-white"
              } font-medium`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
