import React, { Component } from "react";
import Stock from "./Stock";
import Grid from "@mui/material/Grid";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { createUserApi } from "../UserApi";
const userApi = createUserApi();
const styles = () => ({
  stocksTable: {
    margin: "auto",
    width: "60%",
  },
});

class stocksTable extends Component {
  state = {
    stocks: [],
    isDataLoaded: false,
  };
  async componentDidMount() {
    this.setState({
      stocks: await userApi
        .getUserStocks(this.props.auth.userId)
        .then(this.setState({ isDataLoaded: true })),
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.stocksTable}>
        {!this.state.stocks ? (
          !this.state.isDataLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <h1>No stocks</h1>
          )
        ) : (
          <Grid container columnSpacing={2}>
            {this.state.stocks.map((s, i) => {
              return (
                <Grid item xs={12} md={6} key={i}>
                  <Stock symbol={s.symbol} name={s.name} />
                </Grid>
              );
            })}
          </Grid>
        )}
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
