import React from 'react';
import Slider from "react-slick";

const StoryCard = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (props.width <= 768) {
    return (
      <Slider {...settings}>
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

      </Slider>
    )
  } else {
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
  }
};

export default StoryCard;
