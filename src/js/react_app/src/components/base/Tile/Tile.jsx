import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from 'antd';
import colors from "Styles/colors"

class CardTile extends Component {
  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
    this.state = {
      selected: false
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
      return s.substring(0,60);
    } else {
      return s;
    }
  }
  render() {
    let props = this.props;
    let data = props.data;
    let classes = props.classes;
    let state = this.state;
    // console.log(data.id);
    // console.log("ids", props.selectedIds);
    return (
       <Card
         // bordered={true}
         // hoverable={true}
         className={classes.card}
         style={state.selected ? { background: `${colors.lightBlack}` } : null}
         onClick={id => this.handleSelected(data.id)}
        >
          <div
            id={`item-${data.id}`}
            className={state.selected ? "selected-topic-item" : "topic-item"}
            style={state.selected ? { color: `${colors.offWhite}` } : null}
          >
            {/* <p><strong>{data.id}</strong></p> */}
            <p id='name'>
              <span>{data.name}</span>
              <Icon
                style={state.selected ? { position: 'absolute', right: 10, top: 10 } : { display: 'none'}}
                id='check-icon'
                type="check-circle"
                theme="twoTone"
                twoToneColor={`${colors.green}`}
              />
            </p>

            <p
              id='topic-description'
              className={classes.description}
              style={state.selected ? {} : { display: 'none'}}
            >
              <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {data.description}
              </span>
            </p>
          </div>
       </Card>


    );
  }
}

const styles = {
  card: {
    minHeight: 50,
    marginBottom: 5,
    borderRadius: 8,
    color: `${colors.offWhite}`,
    cursor: "pointer",
    // boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
    // border: '1px solid rgba(240,240,240,.5)',
    fontSize: '1.2rem',
    background: `${colors.quartDark}`,
    '& .topic-item': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
      fontSize: '15px',
      userSelect: 'none',
      '& #check-icon': {
        fontSize: 30,
        marginRight: 14
      }
    },

    '& .selected-topic-item': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
      fontSize: '15px',
      userSelect: 'none',
      '& #check-icon': {
        fontSize: 30,
        marginRight: 14
      },
      '& #topic-description': {
        display: 'block',
        fontSize: 13,
      }
    },
    '& .ant-card-bordered': {
      border: 'none !important',
    },
    '& .ant-card-body': {
      padding: '15px 0 0 0 !important',
    },
  },

  '& .check-icon': {
    display: 'none'
  }
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
