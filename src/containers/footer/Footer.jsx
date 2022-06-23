import React from 'react';
import teenwolfLogo from '../../assets/logo.PNG';
import './footer.css';

const Footer = () => (
  <div className="teenwolf__footer section__padding">
    <div className="teenwolf__footer-heading">
      <h1 className="gradient__text">The Next Level Of Wolf Meme Token</h1>
    </div>

    <div className="teenwolf__footer-btn">
      <a href="https://discord.gg/5bKvAgjk">Join Our Discord</a>
    </div>
    <div className="teenwolf__footer-links">
      <div className="teenwolf__footer-links_logo">
        <img src={teenwolfLogo} alt="teenwolf_logo" />
        <p>Teen Wolf Token<br /> All Rights Reserved</p>
      </div>
      <div className="teenwolf__footer-links_div">
        <h4>Links</h4>
        <a href="https://t.me/teenwolftoken">Telegram</a>
        <a href="http://bit.ly/TeenWolfTokenYoutube">Youtube</a>
        <a href="https://twitter.com/teenwolftoken">Twitter</a>
      </div>
      <div className="teenwolf__footer-links_div">
        <h4>Company</h4>
        <a href="https://discord.gg/5bKvAgjk">The Wolf Paper</a>
        <a href="#howtobuy">How to Buy</a>
        <a href="support@teenwolftoken">Support</a>
      </div>
      <div className="teenwolf__footer-links_div">
        <h4>Get in touch</h4>
        <a href="https://www.teenwolftoken.com">TeenWolfToken</a>
        <a href="t&c.co">info@teenwolftoken</a>
      </div>
    </div>

    <div className="teenwolf__footer-copyright">
      <p>@2022 TeenWolfToken. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
