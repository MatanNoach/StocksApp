import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import Wrapper from "./components/Wrapper";
import StocksTable from "./components/StocksTable";
import Login from "./components/Pages/Login";
import { connect } from "react-redux";
import Box from "@mui/material/Box";

class App extends Component {
  render() {
    return (
        <Router>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div>
                <Wrapper>
                  {this.props.auth.token ? (
                    <StocksTable />
                  ) : (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Login />
                    </Box>
                  )}
                </Wrapper>
              </div>
            )}
          />
        </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(App);
