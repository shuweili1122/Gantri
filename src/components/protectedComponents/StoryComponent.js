import React, { useEffect } from 'react';
import CTA from '../ReadNowCta';
import StoryCard from './StoryCard';

const StoryComponent = (props) => {
  useEffect(() => {
    console.log('...adfas', props.width);
  })

  return (
    <div className="StoryComponentWrapper">
      <div className="headline h3">
        {props.headline}
      </div>
      <div className="StoryComponentContainer">
        {props.data && props.data.map((each, idx) => {
          return <StoryCard headline={each.headline} creator={each.creator} width={props.width}/>
        })}
      </div>
    </div>
  );
};

export default StoryComponent;
