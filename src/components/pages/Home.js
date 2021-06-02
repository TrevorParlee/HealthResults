import React from 'react';

import './Home.css';

import Reviews from '../Reviews';
import TreatmentsHome from '../TreatmentsHome';
import MichHome from '../MichHome';
import HomeImage from '../HomeImage';
import Footer from '../Footer';

function Home(props) {
  return (
    <>
      <HomeImage />
      <MichHome />
      <Reviews />
      <TreatmentsHome />
      <Footer />
    </>
  );
}

export default Home;
