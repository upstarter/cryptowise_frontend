import React from "react"
import ReactDOM from "react-dom"
import TreeAnalysisComponent from "./TreeAnalysisComponent"
import { Tabs, Radio } from 'antd';

const TabPane = Tabs.TabPane;

export default class AnalysisContainer extends React.Component {
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

  render() {
    const { mode } = this.state;
    return (
      <div style={{marginTop: 70}}>
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
        </Radio.Group> */}
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          size='large'
          tabBarStyle={{ fontWeight: 700}}
        >
          <TabPane tab="Economics" key="1"><TreeAnalysisComponent topic='topics_tree'/></TabPane>
          <TabPane tab="Taxonomy" key="2"><TreeAnalysisComponent topic='taxonomy'/></TabPane>
          <TabPane tab="Valuation" key="3"><TreeAnalysisComponent topic='valuation'/></TabPane>
          <TabPane tab="Strategy" key="4"><TreeAnalysisComponent topic='strategy'/></TabPane>
          <TabPane tab="Analysis" key="5"><TreeAnalysisComponent topic='analysis'/></TabPane>
          <TabPane tab="Research" key="6"><TreeAnalysisComponent topic='research'/></TabPane>
        </Tabs>
      </div>
    )
  }
}
