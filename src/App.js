import logo from "./logo.svg";
import "./App.css";
import Stock from "./components/Stock";
import { Grid } from "@material-ui/core";
import Topbar from "./components/Topbar";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
const appStyles = () => ({
  stocksTable: {
    margin: "auto",
    width: "50%",
  },
});
class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div>
              <Topbar />
              <Sidebar />
              <h6>&nbsp;</h6>
              <div style={appStyles().stocksTable}>
                <Grid container>
                  <Grid item xs={6}>
                    <Stock symbol="IBM" />
                  </Grid>
                  <Grid item xs={6}>
                    <Stock symbol="MFST" />
                  </Grid>
                  <Grid item xs={6}>
                    <Stock symbol="AMZN" />
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default withStyles(appStyles)(App);
