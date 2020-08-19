import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SliderCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography id="continuous-slider" gutterBottom>
          Volume
        </Typography>
      
        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
      </CardContent>
    </Card>
  );
}