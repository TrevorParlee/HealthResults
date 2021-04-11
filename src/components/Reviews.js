import React from 'react';
import './Reviews.css';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
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

function Reviews(props) {
  const classes = useStyles();

  return (
    <div className='reviews'>
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
                  N. McDougall
                </Typography>

                <Typography variant='body2' component='p'>
                  {`"I have been going for acupuncture during these past few months for numerous reasons.  I have been treated for wrist, hip, foot and neck pain. Every time I come to Michelle it's something different.  I am now feeling  healthy and vibrant  thanks to acupuncture and Michelle's professional, knowledgeable, friendly manner and effective treatments.  I highly recommend Michelle for anyone suffering from pain or any other complaint you might have"`}
                </Typography>
                <br></br>
                <Typography variant='body3'>Calgary, AB</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  J.A.W.
                </Typography>

                <Typography variant='body2' component='p'>
                  {`"Michelle possess an equal quantity of creativity as she does determination. This is a rare combo in a therapist; as she will not slavishly stick to one method in treatment she will constantly assess and reassess results striving to find the best path for her patient to achieve their goals. Plus she has a wonderful bedside manner."`}
                </Typography>
                <br></br>
                <Typography variant='body3'>Calgary, AB</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Stacey F.
                </Typography>

                <Typography variant='body2' component='p'>
                  {`"I met Michelle over 1 ½ years ago and during this time, she helped me with amazing results for a frozen shoulder and shin splints and currently she is resetting my body balance getting it back on track.  When I first met Michelle I had no interest in Acupuncture as I was completely scared of needles! Looking back now, I realized there was no need to have this emotion at all.  Michelle is the most caring individual I have ever met.  She truly makes you feel comfortable and will never do anything that you are  not sure of, but she will absolutely go out of her way to research everything about your certain situation and incorporate different options in your treatment with the ultimate goal of getting you back to 100%.  Without a doubt you need to see Michelle."`}
                </Typography>
                <br></br>
                <Typography variant='body3'>Calgary, AB</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Reviews;
