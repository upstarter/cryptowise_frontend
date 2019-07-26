import React from "react";
import ReactDOM from "react-dom";
import { url, api_url } from "Utils/consts";
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import Treemap from 'Components/charts/Treemap'
import injectSheet, { jss } from "react-jss";
import { Layout, Icon } from "antd";
const { Content } = Layout;
import Tooltip from './Tooltip.js';

const TYPE_SWITCH_ITEMS = [
  {label: 'Description', prop: 'description'},
];

class TreeAnalysisComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showTooltip: false,
      tooltipContent: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    let { topic } = this.props;

    this.setState({
      isLoading: true
    });

    fetch(api_url + `/${topic}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        this.setState({
          data: data.data,
          isLoading: false
        })
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { classes } = this.props;
    const { data, showTooltip, tooltipContent } = this.state;

    let arrange = t => {
      return {
        id: t.id,
        weight: t.weight,
        label: t.name,
        description: t.description,
        url: `${api_url}/topics/${t.id}`,
        groups: t.groups.map(arrange)
      };
    }

    const groups = data.map(arrange);

    return (
      <div
        style={{
          maxWidth: "2000px",
          textAlign: 'center',
          margin: "0 auto",
        }}
      >
        <ScrollToTopOnMount />
        <Treemap ref={this.saveTreemapRef}
          className={'flex: 1'}
          data={groups}
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

  isModuleVisible = module => (
    this.treemap.isGroupRendered(module)
  )

  handleMouseLeaveTreemap = () => {
    this.setState({showTooltip: false});
  }

  handleTreemapGroupHover = event => {
    const {group} = event;

    if (group) {
      console.log(group)
      this.setState({
        showTooltip: true,
        tooltipContent: this.getTooltipContent(group)
      });
    } else {
      this.setState({showTooltip: false});
    }
  }

  getTooltipContent(module) {
    if (!module) return null;

    return (
      <div>
        <div><strong>{module.label}</strong></div>
        <br/>
        {this.renderModuleComponent(module, 'description')}
        {module.url &&
          <div>URL: <a href={module.url} />{module.url}</div>
        }
      </div>
    );
  }

  renderModuleComponent(module, typeProp) {
    const type = module[typeProp];
    const typeLabel = TYPE_SWITCH_ITEMS.find(item => item.prop === typeProp).label;
    const isActive = true //(store.activeType === typeProp);

    return (typeof type != undefined) ?
      <div className={isActive ? type : ''}>
        <strong>{typeLabel}:</strong>
        {type}
      </div>
      :
      null;
  }




  saveTreemapRef = treemap => this.treemap = treemap;
}

const analysisStyles = {};
export default injectSheet(analysisStyles)(TreeAnalysisComponent);
