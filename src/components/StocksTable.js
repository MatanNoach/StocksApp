import React, { Component } from "react";
import Stock from "./Stock";
import Grid from "@mui/material/Grid";
import { withStyles } from "@material-ui/styles";

import { createUserApi } from "../UserApi";
import { Box } from "@mui/system";

class stocksTable extends Component {
  render() {
    return (
      <Box>
        {!this.props.stocks ? (
            <h1>No stocks</h1>
        ) : (
          <Grid container columnSpacing={2}>
            {this.props.stocks.map((s, i) => {
              return (
                <Grid item xs={12} md={6} key={i}>
                  <Stock symbol={s.symbol} name={s.name} isUser={s.isUser} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    );
  }
}
export default stocksTable;
