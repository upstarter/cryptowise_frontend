import React from "react";
import ReactDOM from "react-dom";
import { url } from "Utils/consts";
import PortfolioGrid from "Components/datagrid/PortfolioGrid";
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import injectSheet, { jss } from "react-jss";
import { Layout, Icon } from "antd";
import { notify } from "Components/base/notify/notify"
const { Content } = Layout;
import axios from "Config/axios";
import { api_url } from 'Utils/consts'


class PortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokens: [],
      selectedToken: null,
      isLoading: true,
      error: null,
      totalWeight: 0,
      value: ''
    };
  }

  componentDidMount() {

    this.setState({
      isLoading: true
    });

    // fetch(`${url}/v1/portfolios/new`)
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Something went wrong ...");
    //     }
    //   })
    //   .then(data =>
    //     this.setState({
    //       blogPosts: data.portfolio,
    //       selectedPost: data.portfolio[0],
    //       isLoading: false
    //     })
    //   )
    //   .catch(error =>
    //     this.setState({
    //       error,
    //       isLoading: false
    //     })
    //   );
  }

  handleSubmit = (e) => {
    const data = new FormData(e.target);

    // console.log(data.get('DFINITY (DFN)'))
    // calculate weight
    if (this.state.totalWeight > 100) {
       notify(
        "warning",
        "",
        "Total weight must be less than 100%"
      );
      return;
    } else {
      // post portfolio
    //
    // data.append('name', 'ABC');   //append the values with key, value pair
    // data.append('age', 20);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
    axios.post(`${api_url}/portfolios`, data, config)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
  }

  handleWeightChange = (value) => {
    this.setState({ value }, () => {

      if (value > 100) {
         notify(
          "warning",
          "",
          "Total weight must be less than 100%"
        );
        return;
      }
    })
  }

  handleSelectChange = (tokenId) => {

  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          maxWidth: "600px",
          textAlign: 'center',
          margin: "45px auto",
          height: '100vh'
        }}
      >
        <ScrollToTopOnMount />

        <h1>Portfolio Strategist</h1>
        <h4>
          A tournament where investment strategists gain mastery.
        </h4>
        <h6 className='subtitle-small'>
          Construct your optimal portfolio allocation from our painstakingly
          curated assets. Top spots on leaderboards will get preferred access
          on any future token sale.
        </h6>
        <br />
          <PortfolioGrid
            handleSubmit={this.handleSubmit}
            handleWeightChange={this.handleWeightChange}
            handleSelectChange={this.handleSelectChange}
            value={this.state.value}
          />
      </div>
    );
  }
}

const portfolioStyles = {};
export default injectSheet(portfolioStyles)(PortfolioComponent);
