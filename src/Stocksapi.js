import axios from "axios";
var apiKey = "TYO04VOOTGSCCHSN";
var urlDaily =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=TYO04VOOTGSCCHSN";
var urlMinute =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=TYO04VOOTGSCCHSN";
export const createAPIClient = () => {
  return {
    fetchStockTimeSeries(timeSeries, symbol, interval) {
      var url =
        "http://localhost:4000/fetch/stock?timeSeries=" +
        timeSeries +
        "&symbol=" +
        symbol;
      if (interval) {
        url += "&interval=" + interval;
      }
      var data = axios.get(url).then((res) => res.data);
      return data;
    },
  };
};
