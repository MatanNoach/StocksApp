import react, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "../Wrapper";
class Trending extends Component {
  render() {
    return (
      <div>
        <h1>Trending Stocks</h1>
        {/* <StocksTable /> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Trending);
