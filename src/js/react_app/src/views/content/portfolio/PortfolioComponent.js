import React from "react";
import ReactDOM from "react-dom";
import { url } from "Utils/consts";
import PortfolioGrid from "Components/datagrid/PortfolioGrid";
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import injectSheet, { jss } from "react-jss";
import { Layout, Icon } from "antd";
import notify from "Components/base/notify/notify"
const { Content } = Layout;
import axios from "Config/axios";
import { api_url } from 'Utils/consts'
import zip from "Utils/zip"


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

  handleSubmit = (data, totalWeight) => {
    // calculate weight
    if (totalWeight != 100) {
       notify(
        "error",
        "",
        "Total weight must be exactly 100%"
      );
      return;
    } else if (data.length < 1) {
      notify(
       "error",
       "",
       "Please select at least one asset."
     );
     return;
    } else {
      axios.defaults.headers.post['content-type'] = 'multipart/form-data'
      axios.post(`${api_url}/portfolios`, {portfolio: data})
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
        className={classes.portfolio}
      >
        <ScrollToTopOnMount />

        <h1 className='title-small'>The WiseHive Portfolio</h1>
        <h4>
          Your vote for the optimal cryptoasset allocation.
        </h4>
        <h6 className='subtitle-small'>
          Submit your asset allocation contribution to the WiseHive portfolio. Top
          pickers will get preferred access on any future token sale.
        </h6>
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

const portfolio = {
  portfolio: {
    textAlign: 'center',
    margin: "45px auto",
    height: '100%',

    '@media (max-width: 860px)': {
       maxWidth: '90vw',
       gridTemplateColumns: '90vw 90vw',
      // gridTemplateAreas: '"sidebar" "content"',
    },

    '@media (min-width: 860px)': {
      maxWidth: "600px",
      // gridTemplateColumns: '2fr 8fr',
      // gridTemplateAreas: '"sidebar content"',
    },
  },


};
export default injectSheet(portfolio)(PortfolioComponent);
