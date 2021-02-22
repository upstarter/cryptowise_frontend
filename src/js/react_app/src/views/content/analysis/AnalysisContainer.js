import React from "react";
import ReactDOM from "react-dom";
import TopicContainer from "Content/topics/TopicContainer";
import TokensContainer from "Content/tokens/TokensContainer";
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
    if (key === 'discuss') {
      this.setState({key: 'strategy'})
    } else {
      this.setState({ key: key })
    }
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  setKey = (key) => {
    console.log('setkey', key)
    this.setState({ key: key, topicID: key });
    this.props.history.replace(`/${key}`);
  };

  render() {
    const { classes } = this.props;
    const { mode, key } = this.state;
    return (
      <div style={{marginTop: 60}}>
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
        </Radio.Group> */}

        <Tabs
          className={classes.tabs}
          size="large"
          tabBarStyle={{ fontWeight: 800 }}
          tabPosition="top"
          tabBarGutter={20}
          centered
          defaultActiveKey={"strategy"}
          activeKey={key === "discuss" ? "strategy" : key}
          onChange={(key) => this.setKey(key)}
          tabBarStyle={{
            color: `${colors.silver8}`,
            position: "fixed",
            height: 55,
            zIndex: 100,
            background: "rgba(0,0,0,1)",
            width: "100vw",
          }}
        >
          <TabPane tab="Strategy" key="strategy">
            <TopicContainer setKey={this.setKey} topic="strategy" />
          </TabPane>
          <TabPane tab="Economics" key="economics">
            <TopicContainer setKey={this.setKey} topic="economics" />
          </TabPane>
          <TabPane tab="Assets" key="assets">
            <TopicContainer setKey={this.setKey} topic="discuss/topics/193" />
          </TabPane>
          <TabPane tab="Research" key="research">
            <TopicContainer setKey={this.setKey} topic="research" />
          </TabPane>
        </Tabs>
      </div>
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
