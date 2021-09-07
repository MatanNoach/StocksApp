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
const apiKey = "TYO04VOOTGSCCHSN";
const dataNum = 30;

function ConstructUrl(timeSeries,symbol){
  var url=baseURL;
  url+=timeSeries+"&symbol="+symbol;
  if(timeSeries==="INTRADAY"){
    url+="&interval=60min";
  }
  url+="&apikey=" +apiKey;
  console.log("URL: ",url);
  return url;
}
function parseData(dataToParse, type,symbol ) {
  var parsedData = [];
  var someData = [];
  var timeSeries="";
  if(type==="INTRADAY"){
    timeSeries = dataToParse[`Time Series (60min)`];  
  }else if (type==="MONTHLY"){
    timeSeries = dataToParse[`Monthly Time Series`];
  }else if(type==="DAILY"){
    timeSeries = dataToParse[`Time Series (Daily)`];
  }else{
    throw new Error("Invalid time series type")
  }
  var i = 0;
  for (var key in timeSeries) {
    if (timeSeries.hasOwnProperty(key) && i < dataNum) {
      someData.push({
        x: new Date(key),
        y: timeSeries[key]["4. close"],
      });
      i++;
    }
  }
  parsedData.push({
    id: symbol,
    data: someData,
  });
  return parsedData;
}

app.get("/fetch/stock?", (req, res) => {
  const symbol = req.query.symbol.toUpperCase();
  const timeSeries = req.query.timeSeries.toUpperCase();
  // res.send(savedData)
  https
    .get(ConstructUrl(timeSeries,symbol), (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        res.send(parseData(JSON.parse(data),timeSeries,symbol));
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
