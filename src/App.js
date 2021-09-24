import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Component } from "react";
import Wrapper from "./components/Wrapper";
import StocksTable from "./components/StocksTable";

import { connect } from "react-redux";
import Box from "@mui/material/Box";

import wrappedPages from "./Pages";
import NotFound from "./components/Pages/NotFound";
import Login from "./components/Pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/trending" />
          </Route>
          {wrappedPages.map((p, i) => {
            return (
              <Route
                exact={true}
                key={i}
                path={p.path}
                render={() => {
                  return (
                  <Wrapper page={p.name}>
                    {p.userOnly?
                    (// authenticated user? component. else, demand login
                      this.props.auth.token ? p.component : <Login/>
                    )
                    :
                    // not user required? component
                    p.component
                  }
                  </Wrapper>
                  )
                }}
              />
            );
          })}
        </Switch>
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
