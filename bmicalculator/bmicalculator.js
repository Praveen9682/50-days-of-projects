const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));



app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/bmicalculator", function(req,res){
    var n1 = Number(req.body.w);
    var n2 = Number(req.body.h);
    var calculate = n1/(n2*n2);
    if(calculate<20){
        res.send("your BMI is "+ calculate + " you are underweight.");
    }else if(calculate<25){
        res.send("your BMI is "+ calculate + " fit and fine.");
    }else{
        res.send("your BMI is "+ calculate + " you are overweight.");

    }
})
app.listen(600, function(){
    console.log("your server is starting on port 600 ");
})