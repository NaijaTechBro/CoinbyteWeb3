import React from 'react';
import people from '../../assets/people.PNG';
import headpng from '../../assets/headpng.PNG';

import './header.css';

const Header = () => (
  <div className="teenwolf__header section__padding" id="home">
    <div className="teenwolf__header-content">
      <h1>The First Decentralized Wolf Token with the Largest Community in its Ecosystem</h1>
      <p>Utility, Gaming has just got better with the wolf memetoken, an experience of confidence where Teens are given a voice where some are called the Alpha, Beta and Omega you should be A True Alpha.</p>

      <div className="teenwolf__header-buttons">
        <button type="button"><a href="https://pancakeswap.finance/swap?outputCurrency=0x176911057E53f60de2A5De23a4f4624Ad925b552">Buy TEEN</a></button>
        <button type="button"><a href="https://docs.google.com/document/d/130PTRdcZc61BW196vGGqGDqGjy3A21-yoRfUfFdNSuM/edit?usp=drivesdk">The Wolf Paper</a></button>
      </div>
      <div className="teenwolf__header-content__people">
        <img src={people} alt="people" />
        <p>Over 2,850  daily active Interactions in all our Community.</p>
      </div>
    </div>

    <div className="teenwolf__header-image">
      <img src={headpng} alt="headpng" />
    </div>
  </div>
);

export default Header;
