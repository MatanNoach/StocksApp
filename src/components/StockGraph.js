import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import { createAPIClient } from "../Stocksapi";
const data = [
  {
    id: "Random Stock",
    data: [],
  },
];
const api = createAPIClient();
function parseData(dataToParse, type) {
  var parsedData = [];
  var someData = [];
  const timeSeries = dataToParse[`Time Series (${type})`];
  var i = 0;
  console.log("Time Series: ", timeSeries);
  for (var key in timeSeries) {
    if (timeSeries.hasOwnProperty(key) && i < 30) {
      someData.push({
        x: new Date(key),
        y: timeSeries[key]["4. close"],
      });
      i++;
    }
  }
  parsedData.push({
    id: dataToParse["Meta Data"]["2. Symbol"],
    data: someData,
  });
  return parsedData;
}
class StockGraph extends Component {
  state = {
    stockData: data,
  };
  async componentDidMount() {
    this.setState({
      stockData: await api
        .fetchStockTimeSeries(
          this.props.timeSeries.toUpperCase(),
          this.props.symbol,
          this.props.interval
        )
        .then((res) => {
          const parsedData = parseData(res, this.props.timeSeries);
          this.props.calcChange(parsedData);
          return parsedData;
        }),
    });
  }
  render() {
    console.log("Data: ", this.state.stockData);
    return (
      <div className="Stock" style={{ height: "300px", width: "500px" }}>
        <ResponsiveLine
          data={this.state.stockData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ format: "%Y-%m-%dT%H:%M:%S.%L%Z", type: "time" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          yFormat=" >-.2f"
          xFormat="time:%d/%m/%y" // change the format
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: "every 5 day", // set the tick values.
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "%d/%m",
            legend: "Time",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "price",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "spectral" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor", modifiers: [] }}
          pointLabelYOffset={-12}
          useMesh={true} // animate on hover
        />
      </div>
    );
  }
}
export default StockGraph;
