import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = (props) => {

  return (
    <div className="headerWrapper">
      <div className="title">LearnStart</div>
      <div className="signup" onClick={() => window.location.pathname === '/' ? props.setModel(true) : ''}>Sign up</div>
    </div>
  );
};

export default HeaderComponent;
