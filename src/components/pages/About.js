import { Grid } from '@material-ui/core';
import React from 'react';
import image from '../../images/MichelleTed.jpg';
import Footer from '../Footer';
import './About.css';

function About() {
  return (
    <>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <img src={image} alt='Michelle and Ted' width='100%' />
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <h1>MICHELLE GREENHOUGH, B.Sc., R.Ac.</h1>
      </Grid>
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <blockquote>
            <p>
              I have come to know that one can change <strong>anything</strong>{' '}
              they want about themselves, no matter how{' '}
              <strong>"normal" </strong> they think it is or how difficult it
              may seem. If it isn’t working for them, chances are Chinese
              medicine, which incorporates acupuncture, can be most beneficial.
            </p>
          </blockquote>
        </Grid>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <text className='michText'>{`Michelle is a Board Licensed Acupuncturist and is registered with the College and Association of Acupuncturists of Alberta (CAAA). She completed her 3-year program with Calgary College of TCM and Acupuncture in 2015. Since then, she has traveled extensively to study directly under several highly respected Acupuncture Masters, including Dr. Ming Qing  Zhu, Kiiko Matsumoto, and Toby Daly. She also holds a Bachelor's degree in Physics and Mathematics from the University of Calgary. `}</text>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <text className='michText'>{`After hundreds of hours of mentorship from these Masters and thousands of additional hours of self-study, Michelle is widely regarded as a highly-skilled and dedicated healer. `}</text>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <text className='michText'>{`Her approach is also influenced by her ten years of experience as a Registered Massage Therapist. She utilizes cupping, gua sha, and dietary and lifestyle advice wherever needed. `}</text>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <text className='michText'>{`Michelle is a very thorough and determined individual with a passion to help her patients attain their best possible health.  She has a kind and compassionate nature and carefully takes the time to learn about your current and past symptoms, in order to accurately identify and treat the imbalances in your body that are causing symptoms and dysfunction. `}</text>
      </Grid>
      <Footer />
    </>
  );
}

export default About;
