import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import Wrapper from "./components/Wrapper";
import StocksTable from "./components/StocksTable";
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
                <h6>&nbsp;</h6>
                <StocksTable/>
              </Wrapper>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
