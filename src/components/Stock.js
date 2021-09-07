import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { Component } from "react";
import StockGraph from "./StockGraph";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSeries: "Daily",
      change: 0,
    };
  }
  changeTimeSeries = (e) => {
    this.setState({
      timeSeries: e.target.value,
    });
  };
  calcChange = (parsedData) => {
    var percentage = parsedData[0].data[0].y / parsedData[0].data[29].y;
    percentage -= 1;
    percentage *= 100;
    this.setState({
      change: percentage,
    });
  };
  render() {
    console.log("State: ", this.state);
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h6">{this.props.symbol}</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined">
              <InputLabel>Time</InputLabel>
              <Select
                value={this.state.timeSeries}
                onChange={this.changeTimeSeries}
                label="Time"
              >
                <MenuItem value="Daily">Month</MenuItem>
                <MenuItem value="Intraday">Hourly</MenuItem>
                <MenuItem value="Monthly">Year</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              style={{
                color: parseFloat(this.state.change) >= 0 ? "green" : "red",
              }}
            >
              change: {this.state.change.toFixed(2)}%{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StockGraph
              timeSeries={this.state.timeSeries}
              symbol={this.props.symbol}
              calcChange={this.calcChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Stock;
