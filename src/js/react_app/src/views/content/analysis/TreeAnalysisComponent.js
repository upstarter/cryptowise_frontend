import React from "react";
import ReactDOM from "react-dom";
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import Treemap from 'Components/charts/Treemap'
import injectSheet, { jss } from "react-jss";
import { Layout, Icon } from "antd";
const { Content } = Layout;
import Tooltip from './Tooltip.js';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const TYPE_SWITCH_ITEMS = [
  {label: 'Description', prop: 'description'},
];

class TreeAnalysisComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      showTooltip: false,
      tooltipContent: null,
      isLoading: true,
      error: null,
    };
  }

  render() {
    const { classes, topic } = this.props;
    const { showTooltip, tooltipContent } = this.state;

    return (
      <div
        style={{
          maxWidth: "2000px",
          textAlign: 'center',
          margin: "0 auto"
        }}
      >
        <ScrollToTopOnMount />
        <Treemap
          className={'flex: 1'}
          topic={topic}
          // highlightGroups={this.highlightedModules}
          // weightProp={store.activeSize}
          // onGroupHover={this.handleTreemapGroupHover}
          // onMouseLeave={this.handleMouseLeaveTreemap}
        />
        {/* <Tooltip visible={showTooltip}>
          {tooltipContent}
        </Tooltip> */}
      </div>
    );
  }
}



export default connect(null, null)(withRouter(TreeAnalysisComponent));
