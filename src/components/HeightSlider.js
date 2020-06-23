import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {Button} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 80,
    label: '80',
  },
];

export default function HeightSlider({setHeight}) {
  const classes = useStyles();
  function valuetext(value) {
      if(value !== NaN){setHeight(value)};
    return `${value}`;
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Select the initial height of the ball(m)
      </Typography>
      <Slider
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
