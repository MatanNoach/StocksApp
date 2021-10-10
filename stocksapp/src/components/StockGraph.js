import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import { createAPIClient } from "../Stocksapi";
import { Typography } from "@material-ui/core";
const data = [
  {
    id: "Random Stock",
    data: [],
  },
];
const theme={
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: '#777777',
        strokeWidth: 1
      },
      text: {}
    },
    legend: {
      text: {
        fontSize: 12
      }
    }
  },
}
const formatMapper = new Map();
formatMapper.set("Daily", {
  xAxisFormat: "%d/%m/%y",
  xFormat: "%d/%m",
  ticks: "every 6 day",
});
formatMapper.set("Intraday", {
  xAxisFormat: "%dT%H",
  xFormat: "%dT%H",
  ticks: "every 8 hour",
});
formatMapper.set("Monthly", {
  xAxisFormat: "%m/%y",
  xFormat: "%m/%y",
  ticks: "every 6 month",
});

const api = createAPIClient();
class StockGraph extends Component {
  state = {
    stockData: data,
  };
  updateTimeSeries = async () => {
    this.setState({
      stockData: await api
        .fetchStockTimeSeries(this.props.timeSeries, this.props.symbol)
        .then((res) => {
          this.props.calcChange(res);
          return res;
        }),
    });
  };
  componentDidUpdate(prevProp) {
    if (prevProp.timeSeries !== this.props.timeSeries) {
      this.updateTimeSeries();
    }
  }
  componentDidMount() {
    this.updateTimeSeries();
  }
  render() {
    return (
      <div className="Stock" style={{width:"100%px",height:"250px" }}>
        <ResponsiveLine
          data={this.state.stockData}
          theme={{
            axis: {
              legend:{
                text:{
                  fontSize:14,
                  fontWeight:"bold"
                }
              }
            },

          }}
          margin={{ top: 10, right: 10, bottom: 60, left: 55 }}
          xScale={{ format: "%Y-%m-%dT%H:%M:%S.%L%Z", type: "time" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          yFormat=" >-.2f"
          xFormat={
            "time:" + formatMapper.get(this.props.timeSeries).xAxisFormat
          } // set x presentation format
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: formatMapper.get(this.props.timeSeries).ticks, // set the tick values.
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            format: formatMapper.get(this.props.timeSeries).xFormat, // set x axis presentation format
            legend: "Time",
            legendOffset: 50,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "price",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          colors={{ scheme: "spectral" }}
          pointSize={10}
          pointColor="white"
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
