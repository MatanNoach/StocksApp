import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import Wrapper from "./components/Wrapper";
import StocksTable from "./components/StocksTable";
import Login from "./components/Pages/Login";
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
                {/* <h6>&nbsp;</h6> */}
              <Login/>
                {/* <StocksTable/> */}
              </Wrapper>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
