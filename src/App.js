import React from 'react';

import { Footer, Art, Tokenomics, Possibility, Outcome, Features, RoadMap, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Tokenomics />
    <Features />
    <Outcome />
    <Possibility />
    <CTA />
    <RoadMap />
    <Art />
    <Footer />
  </div>
);

export default App;
