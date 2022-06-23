import React from 'react';
import Feature from '../../components/feature/Feature';
import './roadmap.css';

const RoadMap = () => (
  <div className="teenwolf__roadmap section__margin" id="roadmap">
    <div className="teenwolf__roadmap-feature">
      <Feature title="Why Us" text="There is a massive need to nurture and breed an era of traders who are part of the global decentralized finance which they need to overcome technological hurdles and truly recognize how money works. This is where TEENWOLF comes in, providing tools and content materials that will make the upcoming generation comfortable with knowledge and technology while they learn and invest, thereby creating exceptional possibilities for wealth creation and enhancement in the tech-inclined level of finance." />
    </div>
    <div className="teenwolf__roadmap-heading">
      <h1 className="gradient__text">RoadMap</h1>
      <a href="#roadmapit">Explore</a>
    </div>
    <div className="teenwolf__roadmap-container" id="roadmapit">
      <Feature title="Q1-Q2 2022" text="1.Website  2.Teaming  3.Token/Protocol  4.Private Sale  5.Airdrop/Public/Sale  6.PanCake Swap/Launch   7.Contract Auditing 8.Community WorkLoads." />
      <Feature title="Q2-Q3 2022" text="1.Lisiting(CoinMarketcap, CoinGecko) 2.Twitter Influencer Marketing 3. DEX Trending 4.Press Release Submissions 5.DAPPs Development 6. NFT Integeration." />
      <Feature title="Q3-Q4 2022" text="1. Stage One Exchange Application 2.TeenWolf Blockchain Bootcamp 3.BlockChain Migration." />
      <Feature title="Q1 2023" text="1.Teenwolf Exchange, 2.Teenwolf Park Preparation 3.MetaVerse Integration/Amusement 4.Teenwolf BlockChain Academy" />
    </div>
  </div>
);

export default RoadMap;
