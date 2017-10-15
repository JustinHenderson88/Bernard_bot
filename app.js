/* *
 * Creates an ExpressJS application by exporting express on node_modules
 * Declares port number
 * */
const express = require('express');
const path = require('path');
const app = express();
const PORT = 7500;

/* * 
 * Serve root directory in which we store static assets 
 * (i.e. images, css files, other third-party js files)
 * */
app.use('/public', express.static(path.join(__dirname,"public")));

/* *
 * Denotes app routing request 'localhost:PORT/' to respond
 * with 
 * */
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, (success,error)=>{
    console.log("Listening to localhost:"+ PORT);
});