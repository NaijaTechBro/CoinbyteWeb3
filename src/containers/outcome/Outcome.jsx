import React from 'react';
import possibilityImage from '../../assets/art01.JPG';
import './outcome.css';

const Outcome = () => (
  <div className="teenwolf__outcome section__padding" id="outcome">
    <div className="teenwolf__outcome-image">
      <img src={possibilityImage} alt="outcome" />
    </div>
    <div className="teenwolf__outcome-content">
      <h1 className="gradient__text">AUTOMATIC LP</h1>
      <p>A Small Fraction of each trade is diverted to auto-generating liquidity <br />that goes to collective pools utilized by the exchange</p>
    </div>
  </div>
);

export default Outcome;
