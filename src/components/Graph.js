import React from 'react';
import {Line} from 'react-chartjs-2';
import animation from './graph.gif'
import { Typography,Grid } from '@material-ui/core';
export default class Graph extends React.Component {
  render() {
    const heights = this.props.heights;
    const time = this.props.time;

    const state = {
        labels: time,
        datasets: [
          {
            label: 'Ball Height',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,0,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: heights 
          }
        ]
      }
    return (
        <div>
        {heights.length ?
            <div>
            <Line
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Height V/s Time',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div> :
          <div>
          <img src = {animation}></img>
         <Typography variant="h6">Start playing with the slider values to see real graphs !</Typography>
         </div>
         }
        </div>
    );
  }
}
