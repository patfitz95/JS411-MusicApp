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
  let warning;

  if(value >= 80) {
    warning = 'Your music volume is at a level that might damage your ears.'
  }
  else {
    warning = ''

  }
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography id="continuous-slider" gutterBottom>
          <h1>Volume</h1>
          <p>{warning}</p>
        </Typography>
      
        <Slider
        onChange={handleChange}
        defaultValue={value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      </CardContent>
    </Card>
  );
}