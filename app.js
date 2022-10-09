const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
     const cityName = req.body.cityName;
     const appKey = "e057d19400dd2c683a9d4af0cab2fa42";
     const ur̥l = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid="+ appKey;
     https.get(ur̥l, function (r̥esponse) {
         r̥esponse.on("data", function(data){
             const weatherData = JSON.parse(data);
             const temp = weatherData.main.temp;
             const weatherDecription = weatherData.weather[0].description;
             const icon = weatherData.weather[0].icon;
             const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
             res.write("<h1>Today "+ cityName +" tempreature is : "+ temp +"</h1>");
             res.write("<p>weatherDecription is  "+weatherDecription+"</p>");
             res.write("<img  src = "+ imageUrl+ ">");
             res.send();
         });
     });
});
app.listen(port, function(){
    console.log("Sever is running on 3000 port");
});