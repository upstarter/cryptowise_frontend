import React from 'react';
import './carrotsearch.foamtree';
import { url } from "../../utils/consts";
import { Redirect } from "react-router-dom";

export default class Treemap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
    this.treemap = null;
    this.zoomOutDisabled = true;
  }


  componentDidMount() {
    this.treemap = this.createTreemap();
    // window.addEventListener('resize', this.resize);
  }


  render() {
    let { data } = this.props.data;
    let elem = <div
          {...this.props}
          style={{ width: '80vw', height: '650px'}}
          ref={this.saveNodeRef}/>
    console.dir(elem)
    return (
      elem
    );
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.data !== this.props.data) {
      this.treemap.set({
        dataObject: this.getTreemapDataObject(nextProps.data)
      });
    } else if (nextProps.highlightGroups !== this.props.highlightGroups) {
      const groupsToRedraw = [
        ...nextProps.highlightGroups,
        ...this.props.highlightGroups
      ];
      setTimeout(() => this.treemap.redraw(false, groupsToRedraw));
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    this.treemap.dispose();
  }

  saveNodeRef = node => (this.node = node);

  getTreemapDataObject(data = this.props.data) {
    return {groups: data};
  }

  createTreemap() {
    const component = this;
    const { props } = this;

    return new CarrotSearchFoamTree({
      element: this.node,
      layout: 'relaxed',
      stacking: 'flattened',
      pixelRatio: window.devicePixelRatio || 1,
      maxGroups: Infinity,
      maxGroupLevelsDrawn: Infinity,
      maxGroupLabelLevelsDrawn: Infinity,
      maxGroupLevelsAttached: Infinity,
      groupMinDiameter: 0,
      groupLabelVerticalPadding: 0.2,
      rolloutDuration: 0,
      pullbackDuration: 0,
      fadeDuration: 0,
      groupExposureZoomMargin: 0.2,
      zoomMouseWheelFactor: 1,
      zoomMouseWheelDuration: 300,
      openCloseDuration: 200,
      dataObject: this.getTreemapDataObject(),
      titleBarDecorator(opts, props, vars) {
        vars.titleBarShown = false;
      },
      groupColorDecorator(options, properties, variables) {
        const {highlightGroups} = component.props;
        const module = properties.group;

        if (highlightGroups && highlightGroups.has(module)) {
          variables.groupColor = {
            model: 'rgba',
            r: 255,
            g: 0,
            b: 0,
            a: 0.8
          };
        }
      },
      onGroupClick(event) {
        // preventDefault(event);
        // component.zoomOutDisabled = true;
        // this.zoom(event.group);
        let rurl = `${url}/api/vi/topics/${event.group.id}`
        console.log(rurl)
        return <Redirect to={rurl} />;

      },
      onGroupDoubleClick(event) {
        // preventDefault(event);
          // component.zoomOutDisabled = true;
      },
      onGroupHover(event) {
        // Ignoring hovering on `FoamTree` branding group
        if (event.group && event.group.attribution) {
          event.preventDefault();
          return;
        }

        if (props.onGroupHover) {
          props.onGroupHover.call(component, event);
        }
      },
      onGroupMouseWheel(event) {
        const {scale} = this.get('viewport');
        const isZoomOut = (event.delta < 0);

        if (isZoomOut) {
          if (component.zoomOutDisabled) return preventDefault(event);
          if (scale < 1) {
            component.zoomOutDisabled = true;
            preventDefault(event);
          }
        } else {
          component.zoomOutDisabled = false;
        }
      }
    });
  }

  // zoomToGroup(group) {
  //   this.zoomOutDisabled = false;
  //
  //   while (group && !this.treemap.get('state', group).revealed) {
  //     group = this.treemap.get('hierarchy', group).parent;
  //   }
  //
  //   if (group) {
  //     this.treemap.zoom(group);
  //   }
  // }

  isGroupRendered(group) {
    const groupState = this.treemap.get('state', group);
    return !!groupState && groupState.revealed;
  }

  update() {
    this.treemap.update();
  }

  resize = () => {
    this.treemap.resize();
  }
}

function preventDefault(event) {
  event.preventDefault();
}
