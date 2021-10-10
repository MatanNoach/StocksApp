import react, { Component } from "react";
import StocksTable from "../StocksTable";
import { createUserApi } from "../../UserApi";
import { connect } from "react-redux";
const userApi = createUserApi();
class MyStocks extends Component {
  state = {
    stocks: [],
  };
  async componentDidMount() {
    this.setState({
      stocks: await userApi
        .getUserStocks(this.props.auth.userId)
        .then((stocksList) => {
          console.log(stocksList)
          stocksList.map((s) => (s.isUser = true))
          return stocksList;
        }),
    });
  }
  render() {
    console.log(this.state.stocks)
    return (
      <div>
        <h1>Your Stocks</h1>
        <StocksTable stocks={this.state.stocks} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(MyStocks);
