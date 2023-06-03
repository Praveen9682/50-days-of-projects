
const express = require('express');
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (res, req) {
    
    const query = res.body.cityName;
    const unit = "metric";
    const apiKey = "ab8584eb91782208df9dd154ac76af04";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const weatherDis = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            // console.log(weatherDis);
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDis + "</p>")
            res.write("<h1>The temperature in"+ query +" is " + temp + " degree Celcius.</h1>")
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    })
})


app.listen(3000, function () {
    console.log("server is staring on port 3000.")

})