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
function parseData(dataToParse) {
  var parsedData = [];
  var someData = [];
  const timeSeries = dataToParse["Time Series (Daily)"];
  var i = 0;
  for (var key in timeSeries) {
    if (timeSeries.hasOwnProperty(key)&&i<20) {
      someData.push({
        x: new Date(key),
        y: timeSeries[key]["1. open"],
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
      stockData: await api.checkGet().then((res) => parseData(res)),
    });
  }
  render() {
    console.log("Data: ", this.state.stockData);
    return (
      <div className="Stock" style={{ height: "500px", width: "500px" }}>
        <ResponsiveLine
          data={this.state.stockData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ format: "%Y-%m-%dT%H:%M:%S.%L%Z", type: "time" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          yFormat=" >-.4f"
          xFormat="time:%Y-%m-%d"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: "every 1 day",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "%d",
            legend: "Time",
            legendOffset: 36,
            legendPosition: "middle"
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
        {/* <ResponsiveLine
          data={this.state.stockData}
          margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
          xScale={{ format: "%Y-%m-%dT%H:%M:%S.%L%Z", type: "time" }}
          xFormat="time:%Y-%m-%dT%H:%M:%S.%L%Z"
          yScale={{ type: "linear", stacked: true, min: 0.0, max: 1.0 }}
          curve="monotoneX"
          axisTop={null}
          axisRight={{
            tickValues: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "0.2",
            legend: "",
            legendOffset: 0,
          }}
          axisBottom={{
            tickValues: "every 1 second",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: "%S.%L",
            legend: "Time",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickValues: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: ".2",
            legend: "CPU",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          enableGridX={false}
          colors={{ scheme: "spectral" }}
          lineWidth={1}
          pointSize={4}
          pointColor={{ theme: "background" }}
          pointBorderWidth={1}
          pointBorderColor={{ from: "serieColor" }}
          enablePointLabel={false}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          gridXValues={[0, 20, 40, 60, 80, 100, 120]}
          gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 140,
              translateY: 0,
              itemsSpacing: 2,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 12,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        /> */}
      </div>
    );
  }
}
export default StockGraph;
