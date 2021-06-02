import React from 'react';
import image from '../images/smallerimg.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './HomeImage.css';

function HomeImage() {
  return (
    <Grid container direction='row' alignItems='center' justify='center'>
      <Grid item>
        <div className='homeImg'>
          {/* <img className='img' src={image} /> */}
          <blockquote>
            <p>
              <strong>If this is coffee,</strong> please bring me some tea;{' '}
              <strong>but if this is tea,</strong> please bring me some coffee.
            </p>
            <cite>Abraham Lincoln</cite>
          </blockquote>
        </div>
      </Grid>
    </Grid>
  );
}

export default HomeImage;
