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
      <React.Fragment>
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
        </Radio.Group> */}
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          size='large'
          tabBarStyle={{ fontWeight: 700}}
        >
          <TabPane tab="Economics" key="1"><TreeAnalysisComponent /></TabPane>
          <TabPane tab="Analysis" key="2"></TabPane>
          <TabPane tab="AI" key="3"></TabPane>
          <TabPane tab="Taxonomy" key="4"></TabPane>
          <TabPane tab="Research" key="5"></TabPane>
        </Tabs>
      </React.Fragment>
    )
  }
}
