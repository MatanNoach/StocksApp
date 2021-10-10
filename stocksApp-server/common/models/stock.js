"use strict";
const https = require("https");
const baseURL = "https://www.alphavantage.co/query?function=TIME_SERIES_";
const apiKey = "TYO04VOOTGSCCHSN";
const dataNum = 30;
const exdata = require("../exData.json");

function ConstructUrl(timeSeries, symbol) {
  var url = baseURL;
  url += timeSeries + "&symbol=" + symbol;
  if (timeSeries === "INTRADAY") {
    url += "&interval=60min";
  }
  url += "&apikey=" + apiKey;
  console.log("URL: ", url);
  return url;
}
function parseData(dataToParse, type, symbol) {
  var parsedData = [];
  var someData = [];
  var timeSeries = "";
  if (type === "INTRADAY") {
    timeSeries = dataToParse[`Time Series (60min)`];
  } else if (type === "MONTHLY") {
    timeSeries = dataToParse[`Monthly Time Series`];
  } else if (type === "DAILY") {
    timeSeries = dataToParse[`Time Series (Daily)`];
  } else {
    throw new Error("Invalid time series type");
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
    id: symbol+"-"+timeSeries,
    data: someData,
  });
  return parsedData;
}

module.exports = function (Stock) {
  Stock.getFromAV = function (req, res, cb) {
    const symbol = req.query.symbol.toUpperCase();
    const timeSeries = req.query.timeSeries.toUpperCase();
    // // test function
    // const parsed = parseData(exdata, timeSeries, symbol);
    // res.send(parsed);
    // real function
    https
      .get(ConstructUrl(timeSeries, symbol), (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });
        resp.on("end", () => {
          const parsedData = parseData(JSON.parse(data), timeSeries, symbol);
          res.send(parsedData);
        });
      })
      .on("error", (err) => {
        cb(err);
      });
  };
  Stock.remoteMethod("getFromAV", {
    accepts: [
      { arg: "req", type: "object", http: { source: "req" } },
      { arg: "res", type: "object", http: { source: "res" } },
      { arg: "timeSeries", type: "string", http: "query" },
      { arg: "symbol", type: "string", http: "query" },
    ],
    returns: { arg: "stockData", type: ["stock"] },
    http: { verb: "get", path: "/AlphaVantage/stock" },
  });
};
