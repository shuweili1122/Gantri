import React from 'react';

const SideBySide = (props) => {
  return (
    <div className="sideBySideWrapper">
      <div className="sideBySideContainer">
        <div className="leftSide">
          {props.textSide === 'left' &&
            <div className="textContents">
              <div className="headline h2">
                {props.headline}
              </div>
              <div className="description paragraph">
                {props.description}
              </div>
            </div>
          }
          {props.textSide === 'right' && <div className="greyOut"></div>}
        </div>
        <div className="rightSide">
        {props.textSide === 'right' &&
            <div className="textContents">
              <div className="headline h2">
                {props.headline}
              </div>
              <div className="description paragraph">
                {props.description}
              </div>
            </div>
          }
          {props.textSide === 'left' && <div className="greyOut"></div>}
        </div>
      </div>
    </div>
  );
};

export default SideBySide;
