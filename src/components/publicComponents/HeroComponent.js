import React from 'react';
import CTA from '../ReadNowCta';

const HeroComponent = () => {
  return (
    <div className="heroWrapper">
      <div className="heroContainer">
        <div class="heroContents">
          <div className="headline h1">
            Stay hungry. Stay follish.
        </div>
          <div className="description paragraph">
            Learn from the hottest startups in the world.
          </div>
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
