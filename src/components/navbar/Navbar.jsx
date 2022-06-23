import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.PNG';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="teenwolf__navbar">
      <div className="teenwolf__navbar-links">
        <div className="teenwolf__navbar-links_logo">
          <a href="https://teenwolftoken.com"><img src={logo} alt="logo" /></a>
        </div>
        <div className="teenwolf__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#roadmap">RoadMap</a></p>
          <p><a href="#tokenomics">Tokenomics</a></p>
          <p><a href="#arts">Arts</a></p>
          <p><a href="#about">About</a></p>
        </div>
      </div>
      <div className="teenwolf__navbar-sign">
        <button type="button">Connect</button>
      </div>
      <div className="teenwolf__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="teenwolf__navbar-menu_container scale-up-center">
          <div className="teenwolf__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#roadmap">RoadMap</a></p>
            <p><a href="#tokenomics">Tokenomics</a></p>
            <p><a href="#arts">Arts</a></p>
            <p><a href="#about">About</a></p>
          </div>
          <div className="teenwolf__navbar-menu_container-links-sign">
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x176911057E53f60de2A5De23a4f4624Ad925b552">How to Buy</a>
            <button type="button">Connect</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
