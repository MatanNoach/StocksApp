import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";
import Wrapper from "./components/Wrapper";
import StocksTable from "./components/StocksTable";
import Login from "./components/Pages/Login";
import { connect } from "react-redux";
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
              {this.props.auth.token?
              (<StocksTable/>)
              // (<h1>Hello</h1>)
              :
              (<Login/>)
            }
                
              </Wrapper>
            </div>
          )}
        />
      </Router>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    auth:state.auth
  }
}
export default connect(mapStateToProps)(App);
