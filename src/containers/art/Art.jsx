import React from 'react';
import Article from '../../components/article/Article';
import { art01, art02, art03, art04, art05, logo } from './imports.js';
import './art.css';

const Art = () => (
  <div className="teenwolf__art section__padding" id="arts">
    <div className="teenwolf__art-heading">
      <h1 className="gradient__text">Our Art Collections.</h1>
    </div>
    <div className="teenwolf__art-container">
      <div className="teenwolf__art-container_groupB">
        <Article imgUrl={art01} />
        <Article imgUrl={art02} />
      </div>
      <div className="teenwolf__art-container_groupB">
        <Article imgUrl={art03} />
        <Article imgUrl={art04} />
      </div>
      <div className="teenwolf__art-container_groupB">
        <Article imgUrl={art05} />
        <Article imgUrl={logo} />
      </div>
    </div>
  </div>
);

export default Art;
