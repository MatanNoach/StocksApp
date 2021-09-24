import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import React, { Component } from "react";
import StockGraph from "./StockGraph";
import { TrendingDown, TrendingUp } from "@mui/icons-material";

const selectOptions = [
  {
    value: "Daily",
    text: "Month",
  },
  {
    value: "Intraday",
    text: "Hourly",
  },
  {
    value: "Monthly",
    text: "Year",
  },
];

class Stock extends Component {
  state = {
    timeSeries: "Daily",
    change: 0,
    isUp: true,
  };
  calcChange = (parsedData) => {
    var percentage = parsedData[0].data[0].y / parsedData[0].data[29].y;
    percentage -= 1;
    percentage *= 100;
    this.setState({
      change: percentage,
      isUp: percentage >= 0,
    });
  };
  render() {
    console.log("Stock State: ", this.state);
    return (
      <Card sx={{ minWidth: 300, pr: 5, p: 1 }} variant="outlined">
        <CardHeader
          title={
            <Typography style={{ fontSize: 20 }}>
              {this.props.name + " (" + this.props.symbol + ") "}
              <Box
                component={this.state.isUp ? TrendingUp : TrendingDown}
                sx={{
                  color: this.state.isUp ? "success.dark" : "error.dark",
                  fontSize: 16,
                  verticalAlign: "sub",
                }}
              />
              <Box
                sx={{
                  color: this.state.isUp ? "success.dark" : "error.dark",
                  display: "inline",
                  fontWeight: "medium",
                  mx: 0.5,
                }}
              >
                {this.state.change.toFixed(2)}%{" "}
              </Box>
            </Typography>
          }
        />
        <CardContent>
          <StockGraph
            timeSeries={this.state.timeSeries}
            symbol={this.props.symbol}
            calcChange={this.calcChange}
          />
        </CardContent>
        <CardActions>
          <Box display="flex" sx={{ width: "100%" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Timeline: &nbsp;</Typography>
            </Box>
            <Box>
              <FormControl fullWidth={true}>
                <InputLabel id="select-label">Time</InputLabel>
                <Select
                  value={this.state.timeSeries}
                  onChange={(e) =>
                    this.setState({ timeSeries: e.target.value })
                  }
                  label="Time"
                  labelId="select-label"
                >
                  {selectOptions.map((option, i) => {
                    return (
                      <MenuItem value={option.value} key={i}>
                        {option.text}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </CardActions>
      </Card>
    );
  }
}
export default Stock;
