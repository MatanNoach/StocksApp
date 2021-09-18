import React, { Component } from "react";
import Stock from "./Stock";
import { Divider, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { createUserApi } from "../UserApi";
const userApi = createUserApi();
const styles = () => ({
  stocksTable: {
    margin: "auto",
    width: "50%",
  },
});

class stocksTable extends Component {
  state = {
    stocks: [],
  };
  async componentDidMount() {
    this.setState({
      stocks: await userApi.getUserStocks(this.props.auth.userId),
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.stocksTable}>
        <Grid container>
          {this.state.stocks.map((s, i) => {
            return (
              <Grid item sx={6} key={i}>
                <Stock symbol={s.symbol} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(withStyles(styles)(stocksTable));
