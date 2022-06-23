import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Education',
    text: 'Lack of true education is a deterrent to actualization of dreams and maximization of talent among the teenage community. TEENWOLF solves this problem by creating social educational programs which can be incorporated into schooling ',
  },
  {
    title: 'Build',
    text: 'The TEENWOLFtoken is not just a regular token for passive holding. It doesnt end with just accumulating or trading the token. The teen crypto bank contains a section provided by TEENWOLF which allows teenagers and other users to build and develop crypto related projects such as NFTs on our blockchain system. It also enables them to engage in other  activities on the Blockchain which could improve the ecosystem in which people have invested in.',
  },
  {
    title: 'Gaming',
    text: 'The global gaming market is worth $180B at present- the form of entertainment with the highest and fastest rate of growth. This can be attributed to the rise and popularity of technology. With the integration of metaverse in TEENWOLF blockchain, users can play games on the blockchain.The players can earn tokens by playing and competing, and the earned tokens can be exchanged for other crypto assets or fiat.',
  },
  {
    title: 'NFT/Amusement',
    text: 'NFTs can be designed on the blockchain on which TEENWOLF is built. Digital arts such as music, drawings, paintings are displayed in the Teenwolf park where they can be traded and payment is immediately made with the Teenwolf token.',
  },
];

const Features = () => (
  <div className="teenwolf__features section__padding" id="about">
    <div className="teenwolf__features-heading">
      <h1 className="gradient__text">Our Utility & Ecosystem.</h1>
      <p>Get to Know Why People Choose Us</p>
    </div>
    <div className="teenwolf__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
