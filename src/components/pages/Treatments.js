import { Grid } from '@material-ui/core';
import React from 'react';
import image from '../../images/treatment.jpg';
import Footer from '../Footer';
import './Treatment.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 425,
    margin: 20,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,

    margin: 5,
  },
});

function Treatments() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <img src={image} alt='accupunture needles being used' width='100%' />
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <h1 className='treatTitle'>Conditions Treated</h1>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <text className='treatText'>{`Below is a list of common conditions we treat with acupuncture.`}</text>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='space-evenly'
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Pain Problems
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Back pain</li>
                    <li>Neck pain</li>
                    <li>Knee pain</li>
                    <li>Frozen shoulder</li>
                    <li>Sports injuries</li>
                    <li>Plantar fasciitis</li>
                    <li>Tendonitis</li>
                    <li>Carpal tunnel syndrome</li>
                    <li>Sciatica</li>
                    <li>Migraines / Headaches</li>
                    <li>Arthritis</li>
                    <li>Bell's palsy</li>
                    <li>Fibromyalgia</li>
                    <li>Shingles / Post herpetic neuralgia</li>
                    <li>Abdominal Pain</li>
                    <li>All pain problems / Musculoskeletal issues</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  General Wellness / Anti-aging
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Anxiety / Stress</li>
                    <li>Weight loss</li>
                    <li>Cosmetic acupuncture / Facial rejuvenation</li>
                    <li>Scar reduction</li>
                    <li>Depression</li>
                    <li>Insomnia</li> <li>Fatigue</li>
                    <li>High blood pressure</li>
                    <li>Hair loss / Alopecia</li>
                    <li>Skin conditions like eczema, acne, hives, psoriasis</li>
                    <li>Cellulite reduction</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Digestive Disorders
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Constipation</li>
                    <li>Diarrhea</li>
                    <li>Hemorrhoids</li>
                    <li>Heartburn / GERDS</li>
                    <li>Irritable Bowel Syndrome (IBS)</li>
                    <li>Gas / Bloating / Cramping</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Addiction
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Smoking</li>
                    <li>Alcohol dependence</li>
                    <li>Substance abuse</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Respiratory Issues
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Asthma</li>
                    <li>Allergies</li>
                    <li>Chronic sinusitis</li>
                    <li>Common cold / Flu</li>
                    <li>Low immunity / Susceptibility to catching cold</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Reproductive Health
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Infertility</li>
                    <li>Boost IVF success</li>
                    <li>Polycyctic Ovarian Syndrome (PCOS)</li>
                    <li>Fibroids</li>
                    <li>Menopause</li>
                    <li>PMS</li>
                    <li>Morning sickness</li>
                    <li>Endometriosis</li>
                    <li>Irregular menstruation</li>
                    <li>Painful menstruation</li>
                    <li>Prostate problems</li>
                    <li>Erectile dysfunction (ED)</li>
                    <li>Gynecological concerns</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Recovery
                </Typography>

                <Typography variant='body2' component='p'>
                  <ul>
                    <li>Stroke rehabilitation</li>
                    <li>Chemotherapy / radiation side effects</li>
                    <li>Post surgery pain</li>
                  </ul>
                </Typography>
                <br></br>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Treatments;
