import React from 'react';
import './App.css';
import Graph from './components/Graph'
import HeightSlider from './components/HeightSlider'
import RestitutionSlider from './components/RestitutionSlider'
import Axios from 'axios'
import {Grid,AppBar,Toolbar,Button,Typography} from '@material-ui/core'
function App() {
  const [height,setHeight] = React.useState(5);
  const [restitution,setRestitution] = React.useState(0.5);

  const [heights,setHeights] = React.useState([]);
  const [time,setTime] = React.useState([]);
  const [bounces,setBounces] = React.useState(0);

  const handleClick = () => {
    console.log(height,restitution)
    Axios.post('https://us-central1-edunomics-ball.cloudfunctions.net/api/ball',{height : height, restitution:restitution})
    .then((res)=> {
      console.log(res.data);
      setHeights(res.data.height);
      setTime(res.data.time);
      setBounces(res.data.bounces);
    })
  }
  return (
    <div className="App">
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Edunomics
      </Typography>
        </Toolbar>
      </AppBar>
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      <div className = "inputs"> <HeightSlider setHeight = {setHeight} /></div>
      <div className = "inputs"> <RestitutionSlider time = {time} setRestitution = {setRestitution}/></div>
      <div  className = "inputs">
      <Button variant="contained" color="primary" onClick = {handleClick}>
        Submit
      </Button>
      </div>
        </Grid>
    </div>
    <Graph heights = {heights} time = {time}/>
    <div>
      {bounces ? <div>
        <Typography variant="h6">Number of Bounces : {bounces}</Typography></div> : <div> </div>}
    </div>
  </div>
  );
}

export default App;
