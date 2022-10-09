const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("Hii I am weather");
    const ur̥l = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e057d19400dd2c683a9d4af0cab2fa42";
    https.get(ur̥l, function (r̥esponse) {
        console.log(r̥esponse);
    })
});
app.listen(port, function(){
    console.log("Sever is running on 3000 port");
});