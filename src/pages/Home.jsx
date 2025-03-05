import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import WhyChoose from '../components/WhyChoose';
import PricingPlans from '../components/PricingPlans';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureCards />
        <WhyChoose />
        <PricingPlans />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;