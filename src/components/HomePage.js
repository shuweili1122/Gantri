import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from './publicComponents/HeaderComponent';
import HeroComponent from './publicComponents/HeroComponent';
import Banner from './publicComponents/Banner';
import SideBySideComponent from './publicComponents/SideBySideComponent';
import Footer from './publicComponents/Footer';
import SignUpModel from './publicComponents/SignupModel';

const HomePage = (props) => {
  const [showModel, setModel] = useState(false);

  useEffect(() => {
    console.log('setModel...',showModel);
    if (showModel) {
      const body = document.getElementsByTagName('body');
      body[0].classList.add('model');
    } else {
      const body = document.getElementsByTagName('body');
      body[0].classList.remove('model'); 
    }
  });

  return (
    <div>
      <div className="homePage">
        <SignUpModel showModel={showModel} setModel={setModel} history={props.history}/>
        <HeaderComponent setModel={setModel}/>
        <HeroComponent/>
        <Banner/>
        <SideBySideComponent headline={"Only the hottest startups."}
          description={"We hand-select only the hottest startups and our expert copywriters interview and produce every story."}
          textSide={'left'}/>
        <SideBySideComponent headline={"Simplest way to read"}
          description={"Learn from your phone or from your computer, and continue where you left off anytime."}
          textSide="right"/>
        <SideBySideComponent headline={"Free. Forever."}
          description={"We're a non-profit project supported by Silicon Valley's top VCs and startup incubators. You won't have to pay a cent."}
          textSide="left"/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
