import React from "react"
import ReactDOM from "react-dom"
import TopicContainer from "Content/topics/TopicContainer"
import { Tabs, Radio, Affix } from 'antd';
const {TabPane} = Tabs;
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import colors from "Styles/colors"

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
            size='large'
            tabBarStyle={{ fontWeight: 800}}
            tabPosition='top'
            tabBarStyle={
                {
                  color: `${colors.midTone}`,
                  position: 'fixed',
                  zIndex: 100,
                  background: 'rgba(0,0,0,1)',
                  width: '100vw'
               }
             }
          >
          <TabPane tab="Taxonomy" key='taxonomy'><TopicContainer topic='taxonomy'/></TabPane>
          <TabPane tab="Economics" key='economics'><TopicContainer topic='economics'/></TabPane>
          <TabPane tab="Strategy" key='strategy'><TopicContainer topic='strategy'/></TabPane>
          <TabPane tab="Research" key='research'><TopicContainer topic='research'/></TabPane>
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
