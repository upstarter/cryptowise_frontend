import React from "react";
import ReactDOM from "react-dom";
import { url } from "Utils/consts";
import PortfolioGrid from "Components/datagrid/PortfolioGrid";
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import injectSheet, { jss } from "react-jss";
import { Layout, Icon } from "antd";
const { Content } = Layout;

class PortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokens: [],
      selectedToken: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {

    this.setState({
      isLoading: true
    });

    // fetch(`${url}/api/v1/portfolios/new`)
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

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          maxWidth: "600px",
          textAlign: 'center',
          margin: "0 auto",
          height: '100vh'
        }}
      >
        <ScrollToTopOnMount />

        <h1>The CryptoWise Portfolio</h1>
        <h5 className='subtitle-small'>
          We painstakingly research the best assets in the cryptocosm so you
          don't have to. Allocate a portfolio from our continuously
          re-constructed synthesis of top selections. Enter your 'optimal'
          portfolio allocation to see how you compare over time. Top spots on
          leaderboards will get preferred access on any future token sale.
        </h5>
        <br />
          <PortfolioGrid />
      </div>
    );
  }
}

const portfolioStyles = {};
export default injectSheet(portfolioStyles)(PortfolioComponent);
