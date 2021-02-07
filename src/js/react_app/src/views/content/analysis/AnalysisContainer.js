import React from "react"
import ReactDOM from "react-dom"
import TopicContainer from "Content/topics/TopicContainer"
import TokensContainer from "Content/tokens/TokensContainer"
import { Tabs, Radio, Affix } from 'antd';
const {TabPane} = Tabs;
import { connect } from "react-redux";
import { Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import colors from "Styles/colors"

class AnalysisContainer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        mode: 'top',
        key: 'analysis'
      }
  }

  componentDidMount() {
    const {match} = this.props
    this.setState({key: match.url.replace('/','')})
  }


  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

  setKey = (key) => {
    this.setState({ key });
    this.props.history.replace(`/${key}`)
  }

  render() {
    const { mode, key } = this.state;
    return (
      <div style={{marginTop: 82}}>
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
        </Radio.Group> */}

          <Tabs
            size='large'
            tabBarStyle={{ fontWeight: 800}}
            tabPosition='top'
            tabBarGutter={-20}
            defaultActiveKey={'strategy'}
            activeKey={key === "analysis" ? 'strategy' : key}
            onChange={key => this.setKey(key)}
            tabBarStyle={
                {
                  color: `${colors.midtone}`,
                  position: 'fixed',
                  height: 52,
                  zIndex: 100,
                  background: 'rgba(0,0,0,1)',
                  width: '100vw'
               }
             }
          >
          <TabPane tab="Strategy" key='strategy'><TopicContainer setKey={this.setKey} topic='strategy'/></TabPane>
          <TabPane tab="Assets" key='assets'><TokensContainer setKey={this.setKey} topic='assets'/></TabPane>
          <TabPane tab="Economics" key='economics'><TopicContainer setKey={this.setKey} topic='economics'/></TabPane>
          <TabPane tab="Research" key='research'><TopicContainer setKey={this.setKey} topic='research'/></TabPane>
          </Tabs>
      </div>
    )
  }
}


export default connect(null,null)(withRouter(AnalysisContainer));

// <TabPane tab="Taxonomy" key='taxonomy'><TreeAnalysisComponent topic='taxonomy'/></TabPane>
// <TabPane tab="Economics" key='economics'><TreeAnalysisComponent topic='economics'/></TabPane>
// <TabPane tab="Strategy" key='strategy'><TreeAnalysisComponent topic='strategy'/></TabPane>
// <TabPane tab="Analysis" key='analyze'><TreeAnalysisComponent topic='analysis'/></TabPane>
// <TabPane tab="Valuation" key='valuation'><TreeAnalysisComponent topic='valuation'/></TabPane>
// <TabPane tab="Research" key='research'><TreeAnalysisComponent topic='research'/></TabPane>
