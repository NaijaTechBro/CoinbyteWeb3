import React from 'react';
import { google, meta, poo, trust, bsc } from './imports';
import './brand.css';

const Brand = () => (
  <div className="teenwolf__brand section__padding">
    <div>
      <img src={google} alt="goo" />
    </div>
    <div>
      <img src={meta} alt="meta" />
    </div>
    <div>
      <img src={poo} alt="poo" />
    </div>
    <div>
      <img src={trust} alt="trust" />
    </div>
    <div>
      <img src={bsc} alt="bsc" />
    </div>
  </div>
);

export default Brand;
