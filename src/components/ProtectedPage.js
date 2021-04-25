import React, {useState, useEffect} from 'react';
import HeaderComponent from './publicComponents/HeaderComponent';
import SkinnyHero from './protectedComponents/SkinnyHero';

const ProtectedPage = (props) => {
  const [showModel, setModel] = useState(false);

  return (
    <div className="protectedPage">
      <HeaderComponent/>
      <SkinnyHero />
    </div>
  );
};

export default ProtectedPage;
