"use strict";

const https = require("https");

const express = require("express");
const app = express();
const savedData = require('./data.json')

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
const baseURL = "https://www.alphavantage.co/query?function=TIME_SERIES_";
var apiKey = "TYO04VOOTGSCCHSN";

function ConstructUrl(timeSeries,symbol,interval=""){
  var url=baseURL;
  url+=timeSeries+"&symbol="+symbol;
  if(timeSeries==="INTRADAY"){
    url+="&interval="+interval;
  }
  url+="&apikey=" +apiKey;
  console.log("URL: ",url);
  return url;
}

app.get("/fetch/stock?", (req, res) => {
  const symbol = req.query.symbol;
  const timeSeries = req.query.timeSeries;
  const interval = req.query.interval;
  res.send(savedData)
  // https
  //   .get(ConstructUrl(timeSeries,symbol,interval), (resp) => {
  //     let data = "";
  //     resp.on("data", (chunk) => {
  //       data += chunk;
  //     });
  //     resp.on("end", () => {
  //       res.send(JSON.parse(data));
  //     });
  //   })
  //   .on("error", (err) => {
  //     console.log("Error: ", err);
  //   });
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
