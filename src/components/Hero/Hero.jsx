import React from 'react';
import Form from './components/Form/Form';
import HeadLine from './components/HeadLine/HeadLine';
import OffersAndBenefits from './components/OffersAndBenefits/OffersAndBenefits';
import Visuals from './components/Visuals/Visuals';
import './hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <HeadLine />
        <Form title="sign up" />
        <Visuals />
        <OffersAndBenefits />
      </div>
    </div>
  );
}

export default Hero;
