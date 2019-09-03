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
         bordered="true"
         hoverable="true"
         className={classes.card}
         style={state.selected ? { background: `${colors.smoothPurple}` } : null}
         onClick={id => this.handleSelected(data.id)}
        >
          <div className="card-content">
            <div
              className={classes.item}
              style={state.selected ? { color: `${colors.white}` } : null}
            >
              {/* <p><strong>{data.id}</strong></p> */}
              <p id='name'><span>{data.name}</span></p>
               <Icon
                 style={state.selected ? { display: 'inline' } : { display: 'none'}}
                 id='check-icon'
                 type="check-circle"
                 theme="twoTone"
                 twoToneColor={`${colors.green}`} />
              <p
                className={classes.description}
              >
                <span style={{display: 'none', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  {data.description}
                </span>
              </p>
            </div>
          </div>
       </Card>


    );
  }
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',

    minHeight: 50,
    marginBottom: 5,
    color: '#000',
    cursor: "pointer",
    // boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
    border: '1px solid rgba(240,240,240,.5)',
    fontSize: '1.2rem',
    '& .card-content': {

    },
    '& .ant-card-body': {
      padding: '15px 0 0 0 !important',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
    fontSize: '14px',
    userSelect: 'none',
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
