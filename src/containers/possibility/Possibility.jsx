import React from 'react';
import possibilityImage from '../../assets/art03.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="teenwolf__possibility section__padding" id="possibility">
    <div className="teenwolf__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="teenwolf__possibility-content">
      <h1 className="gradient__text">RF STATIC REWARD</h1>
      <p>4% of each transaction with the $TEEN token is deducted and redistributed to our pool of holders by <br />simply holding, you will be exposed
        to a broad variety of tokens <br /> increasing progressively each day as the community transacts.
      </p>
    </div>
  </div>
);

export default Possibility;
