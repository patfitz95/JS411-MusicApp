import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

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

export default function SwitchCard() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    online: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let content;
  let mode;

  if(state.online) {
    content = "You are using Online Mode. Songs are available for streaming."
    mode = "Online Mode"
  }
  else {
    content = "You are Offline, toggle Online Mode to stream music."
    mode = "Offline Mode"
  }


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textPrimary">
          <h1>{mode}</h1>
          <p>{content}</p>
        </Typography>
      </CardContent>
      
      <CardActions>
      <Switch
        checked={state.online}
        onChange={handleChange}
        name="online"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </CardActions>
    </Card>
  );
}