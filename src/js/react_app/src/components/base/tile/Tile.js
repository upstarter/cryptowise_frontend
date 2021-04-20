import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card } from "antd";
import colors from "Styles/colors";
import { CheckCircleOutlined } from "@ant-design/icons";
class CardTile extends Component {
  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
    this.state = {
      selected: false,
    };
  }
  componentDidMount() {
    if (this.props.selectedIds.includes(this.props.id)) {
      this.setState({ selected: true });
    }
  }

  handleSelected(id) {
    this.setState({ selected: !this.state.selected });

    if (this.state.selected) {
      this.props.removeTopicKnowledgeIds(id);
      this.props.validateSelected(id);
    } else {
      this.props.collectTopicKnowledgeIds(id);
      this.props.validateSelected(id);
    }
  }

  truncate(s) {
    if (s.length > 60) {
      return s.substring(0, 60);
    } else {
      return s;
    }
  }
  render() {
    let props = this.props;
    let data = props.data;
    let classes = props.classes;
    let state = this.state;
    //
    //
    return (
      <Card
        // bordered={true}
        // hoverable={true}
        className={classes.card}
        style={state.selected ? { background: colors.black } : null}
        onClick={(id) => this.handleSelected(data.id)}
      >
        <div
          id={`item-${data.id}`}
          className={state.selected ? classes.selectedTopicItem : classes.topicItem}
          style={state.selected ? { color: "#eee" } : null}
        >
          {/* <p><strong>{data.id}</strong></p> */}
          <p
            className={
              state.selected ? classes.topicNameSelected : classes.topicName
            }
          >
            <span>{data.name}</span>
            <CheckCircleOutlined
              style={
                state.selected
                  ? {
                      position: "absolute",
                      right: 10,
                      top: 10,
                      color: colors.origGreen,
                    }
                  : { display: "none" }
              }
              id="check-icon"
              theme="twoTone"
            />
          </p>

          <p
            id="topic-description"
            className={classes.description}
            style={state.selected ? {} : { display: "none" }}
          >
            <span className={classes.topicDesc}>
              {data.description}
            </span>
          </p>
        </div>
      </Card>
    );
  }
}

const styles = {
  topicItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
    fontSize: "15px",
    userSelect: "none",
    "& #check-icon": {
      fontSize: 30,
      marginRight: 14,
    },
  },
  selectedTopicItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "396px !important",
    fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
    userSelect: "none",
    "& #check-icon": {
      fontSize: 30,
      marginRight: 14,
    },
  },
  topicName: {
    color: colors.silver,
    fontSize: '1.5rem',
    padding: [15,0,0,0],
  },
  topicNameSelected: {
    color: colors.silver,
    fontSize: '1.5rem',
    padding: [15,0,0,0],

  },
  topicDesc: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: colors.smoke6,
  },
  card: {

    minHeight: 50,
    marginBottom: 5,
    borderRadius: 8,
    cursor: "pointer",

    // boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
    // border: '1px solid rgba(240,240,240,.5)',
    background: `${colors.black}`,

    "& .ant-card-bordered": {
      border: "none !important",
    },
    "& .ant-card-body": {
      padding: "0 0 0 0 !important",
    },
  },

  "& .check-icon": {
    display: "none",
  },
  // description: {
  //   marginTop: '10px',
  //   fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
  //   fontSize: '14px',
  //   fontWeight: 400,
  //   fontStyle: 'italic',
  //   textAlign: 'center',
  //   userSelect: 'none',
  //   color: `${colors.lighterLightBlue}`
  // }
};

const Tile = injectSheet(styles)(CardTile);
export default Tile;
