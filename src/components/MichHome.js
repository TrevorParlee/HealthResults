import React from 'react';
import image2 from '../images/michelleBig.jpg';
import './MichHome.css';

import Grid from '@material-ui/core/Grid';

function MichHome() {
  return (
    <>
      <div className='homeAbout'>
        <Grid
          container
          direction='row'
          alignItems='flex-start'
          justify='center'
        >
          <Grid item style={{ margin: '10px' }}>
            <img className='image' src={image2} alt='Michelle' />
          </Grid>

          <Grid item xs={6} className='aboutMe' style={{ margin: '20px' }}>
            <h3 style={{ margin: '10px' }}>
              {`MICHELLE GREENHOUGH, B.Sc., R.Ac. is a very thorough and
        determined individual with a passion to help her patients attain
        their best possible health. Michelle has a kind and
        compassionate nature, carefully taking the time to learn about
        your current and past symptoms, in order to accurately diagnose
        and treat you accordingly. She is excited to bring you the
        benefits of this safe, effective, and drug-free form of therapy
        at her Calgary Clinic, located in Strathcona Park. Her focus is
        on providing her patients with thorough, individualized, and
        comprehensive care.`}
            </h3>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default MichHome;
