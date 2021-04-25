import React from 'react';

const SideBySide = (props) => {
  return (
    <div className="sideBySideWrapper">
      <div className={props.textSide === 'right' ? 'sideBySideContainer' : 'sideBySideContainer reverse'}>
        <div className={props.textSide === 'left' ? 'leftSide text' : 'leftSide'}>
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
        <div className={props.textSide === 'right' ? 'rightSide text' : 'rightSide'}>
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
