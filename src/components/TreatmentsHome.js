import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './TreatmentsHome.css';
import imageD from '../images/digestion.jpg';
import imageH from '../images/HeadAche.jpg';
import imageE from '../images/emotional.jpg';
import imageP from '../images/physical.jpg';
import imageW from '../images/womenHealth.jpg';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 15,
  },
  media: {
    height: 140,

    margin: 5,
  },
});

function TreatmentsHome() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='space-evenly'
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageD}
                title='Digestion Disorders'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Digestion Disorders
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Accupuncture is great for digestion disorders
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageE}
                title='Digestion Disorders'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Emotional / ​Psychological
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Accupuncture is great for Emotional / ​Psychological
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageH}
                title='Digestion Disorders'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Head, Eyes, Ears, Nose & Throat
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Accupuncture is great for Head, Eyes, Ears, Nose & Throat
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
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
              <CardMedia
                className={classes.media}
                image={imageP}
                title='Digestion Disorders'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Physical Pain
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Accupuncture is great for Physical Pain
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageW}
                title='Digestion Disorders'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Women's Health
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Accupuncture is great for Women's Health
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default TreatmentsHome;
