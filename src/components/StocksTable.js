import React, { Component } from "react";
import Stock from './Stock'
import { Divider, Grid } from '@material-ui/core'
import { withStyles } from "@material-ui/styles";
const styles = () => ({
  stocksTable: {
    margin: "auto",
    width: "50%",
  },
});

class stocksTable extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.stocksTable}>
        <Grid container>
          <Grid item xs={6}>
            <Stock symbol="IBM" />
          </Grid>
          <Grid item xs={6}>
            <Stock symbol="MSFT" />
          </Grid>          
          <Grid item xs={6}>
            <Stock symbol="AMZN" />
          </Grid>
          <Grid item xs={6}>
            <Stock symbol="AAPL" />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(stocksTable);
