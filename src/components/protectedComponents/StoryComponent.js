import React, { useEffect } from 'react';
import CTA from '../ReadNowCta';
import StoryCard from './StoryCard';
import Slider from "react-slick";

const StoryComponent = (props) => {
  useEffect(() => {
    console.log('...adfas', props.width);
  })
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (props.width > 768) {
    return (
      <div className="StoryComponentWrapper">
        <div className="headline h3">
          {props.headline}
        </div>
        <div className="StoryComponentContainer">
          {props.data && props.data.map((each, idx) => {
            return <StoryCard headline={each.headline} creator={each.creator} width={props.width} />
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="StoryComponentWrapper">
        <div className="headline h3">
          {props.headline}
        </div>
        <div className="StoryComponentContainer">
          <Slider {...settings}>
            {props.data && props.data.map((each, idx) => {
              return <div><StoryCard headline={each.headline} creator={each.creator} width={props.width} /></div>
            })}
          </Slider>
        </div>
      </div>
    );

  }
};

export default StoryComponent;
