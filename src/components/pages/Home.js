import React from 'react';
import image from '../../images/smallerimg.jpg';
import image2 from '../../images/michelle.jpg';
import './Home.css';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Reviews from '../Reviews';
import TreatmentsHome from '../TreatmentsHome';
import MichHome from '../MichHome';
import HomeImage from '../HomeImage';
import Footer from '../Footer';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 20,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

function Home(props) {
  const classes = useStyles();

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
