const functions = require('firebase-functions');
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

app.post('/ball',(req, res) => {
    console.log(req.body);
    var h = (req.body.height)
    var e = (req.body.restitution)
    g = 9.8
    height = [h]
    time = [0]
    t0 = Math.round(Math.sqrt(2*h/g)*100)/100;
    time.push(t0);
    height.push(0);
    var t_prev = t0;
    var bounce = 1;
    while(true){
        h_new = Math.round((Math.pow(e,2*bounce)*h)*10000)/10000;
        t_new = Math.round((t_prev + Math.sqrt(2*h_new/g))*100)/100;
        height.push(h_new);
        time.push(t_new);
        t_new = Math.round((t_prev + 2*Math.sqrt(2*h_new/g))*100)/100;
        height.push(0);
        time.push(t_new);
        t_prev = t_new;
        if(h_new == 0){
            break;
        }     
        bounce++;  
        console.log(height);
        console.log(time);
    }

    res.json({"height" : height,"time" : time,bounces : bounce});
})

exports.api = functions.https.onRequest(app);