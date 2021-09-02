"use strict";

const https = require("https");

const express = require("express");
const app = express();

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

  var apiKey = "TYO04VOOTGSCCHSN";
  var urlDaily = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey="+apiKey
  var urlMinute =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey='+apiKey;
app.get("/", (req, res) => {
  https
    .get(urlDaily, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        res.send(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err);
    });
});

app.listen(4000, () => console.log("listening on port 4000"));

// var request = require('request');

// // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=TYO04VOOTGSCCHSN';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });
