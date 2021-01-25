import React from "react"
import ReactDOM from "react-dom"
import TreeAnalysisComponent from "./TreeAnalysisComponent"
import { Tabs, Radio } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const {TabPane} = Tabs;

class AnalysisContainer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        mode: 'top',
      }
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

  callback = (key) => {
    console.log('keeey', key)
  }


  render() {
    const { mode } = this.state;
    return (
      <div style={{marginTop: 70}}>
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
        </Radio.Group> */}
        <Tabs
          // defaultActiveKey="4"
          size='large'
          tabBarStyle={{ fontWeight: 500}}
        >
          <TabPane tab="Taxonomy" key='taxonomy'><TreeAnalysisComponent topic='taxonomy'/></TabPane>
          <TabPane tab="Economics" key='economics'><TreeAnalysisComponent topic='economics'/></TabPane>
          <TabPane tab="Strategy" key='strategy'><TreeAnalysisComponent topic='strategy'/></TabPane>
          <TabPane tab="Analysis" key='analyze'><TreeAnalysisComponent topic='analysis'/></TabPane>
          <TabPane tab="Valuation" key='valuation'><TreeAnalysisComponent topic='valuation'/></TabPane>
          <TabPane tab="Research" key='research'><TreeAnalysisComponent topic='research'/></TabPane>
        </Tabs>
      </div>
    )
  }
}


export default connect(null,null)(withRouter(AnalysisContainer));
