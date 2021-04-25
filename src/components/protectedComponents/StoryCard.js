import React from 'react';
import Slider from "react-slick";

const StoryCard = (props) => {

  return (
    <div className="storyCardWrapper">
      <div className="storyCardContainer">
        <div className="greyout"></div>
        <div className="headline">
          {props.headline}
        </div>
        <div className="author">
          {props.creator}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
