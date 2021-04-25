import React, {useState, useEffect} from 'react';
import HeaderComponent from './publicComponents/HeaderComponent';
import SkinnyHero from './protectedComponents/SkinnyHero';
import storyData from '../utils/storyData';
import StoryComponent from './protectedComponents/StoryComponent';

const ProtectedPage = (props) => {
  useEffect(() => {
    console.log('data',storyData);
  });

  return (
    <div className="protectedPage">
      <HeaderComponent/>
      <SkinnyHero />
      <StoryComponent/>
      {Object.keys(storyData.stories).map((keyName, idx) => {
        return <StoryComponent key={idx} headline={keyName} data={storyData.stories[keyName]}/>
      })}
    </div>
  );
};

export default ProtectedPage;
