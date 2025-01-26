import React from 'react';
import Form from './components/Form/Form';
import HeadLine from './components/HeadLine/HeadLine';
import './hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <HeadLine />
        <Form title="sign up" />
      </div>
    </div>
  );
}

export default Hero;
