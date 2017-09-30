const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = 7500;

app.use( express.static(path.join(__dirname, "public")));
app.set("view engine", 'ejs');

app.get("/",(req,res)=>{
    res.render('./page/index');
});

app.listen(PORT, (success,error)=>{
    console.log("Listening to localhost:"+ PORT);
});
