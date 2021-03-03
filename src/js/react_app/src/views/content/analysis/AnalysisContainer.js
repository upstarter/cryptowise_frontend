import React from "react";
import ReactDOM from "react-dom";
import TokensContainer from "Tokens/TokensContainer"
import { Tabs, Radio, Affix } from "antd";
const { TabPane } = Tabs;
import { connect } from "react-redux";
import { Link, NavLink, Route, Switch, withRouter } from "react-router-dom";
import colors from "Styles/colors";
import injectSheet, { jss } from "react-jss";

class AnalysisContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
      key: "",
    };
  }

  componentDidMount() {
    const { match } = this.props;
    let key = match.url.replace("/", "")
    if (key === 'explore') {
      this.setState({key: 'price'})
    } else {
      this.setState({ key: key })
    }
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  setKey = (key) => {
    this.setState({ key: key, tokenID: key });
    this.props.history.replace(`/${key}`);
  };

  render() {
    const { classes } = this.props;
    const { mode, key } = this.state;
    console.log('mm', mode, key)
    return (
      <>
        <div style={{ marginTop: 60}}>
            <Tabs
              className={classes.tabs}
              size="large"
              tabPosition="top"
              tabBarGutter={18}
              centered
              defaultActiveKey={"price"}
              activeKey={key === "explore" ? "volatility" : key}
              onChange={(key) => this.setKey(key)}
              tabBarStyle={{
                color: `${colors.silver}`,
                position: "fixed",

                zIndex: 100,
                background: "rgba(0,0,0,1)",
                width: "100vw",
              }}
            >
              <TabPane tab="Price" key="price">
                <TokensContainer setKey={this.setKey} token="price" />
              </TabPane>
              <TabPane tab="Volatility" key="volatility">
                <TokensContainer setKey={this.setKey} token="volatility" />
              </TabPane>
              <TabPane tab="Sentiment" key="sentiment">
                <TokensContainer setKey={this.setKey} token="sentiment" />
              </TabPane>
            </Tabs>
        </div>
      </>

    );
  }
}

const analysisStyles = {

  tabs: {
    '& .ant-tabs-tab-active': {

    }
  }

};

const AnalysisContainerWithRouter = withRouter(AnalysisContainer);

export default connect(
  null,
  null
)(injectSheet(analysisStyles)(AnalysisContainerWithRouter));
