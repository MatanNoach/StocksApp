import axios from 'axios'
var apiKey = "TYO04VOOTGSCCHSN";
var urlDaily = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=TYO04VOOTGSCCHSN"
var urlMinute =
  'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=TYO04VOOTGSCCHSN';
export const createAPIClient = ()=>{
  return {
    checkGet(){
      console.log("in checkGet")
      var data = axios.get('http://localhost:4000/').then((res)=>res.data);
      return data;
    }
  };
}
