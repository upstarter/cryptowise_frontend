import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card } from 'antd';
import colors from "../../styles/colors"

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
    console.log('currentState', this.state.selected )
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
         bordered={true}
         className={classes.card}
         style={state.selected ? { background: `${colors.silver}` } : null}
         onClick={id => this.handleSelected(data.id)}
        >
          <div className="card-content">
            <div
              className={classes.name}
              style={state.selected ? { color: `${colors.primary}` } : null}
            >
              <p><strong>{data.id}</strong></p>
              <p><strong>{data.name}</strong></p>
              <p
                className={classes.description}
              >
                <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
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
    color: '#000',
    cursor: "pointer"
  },
  name: {
    fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
    fontSize: '16px',
    fontStyle: 'bold',
    textAlign: 'center',
    userSelect: 'none',
  },
  description: {
    marginTop: '10px',
    fontFamily: "Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif",
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'italic',
    textAlign: 'center',
    userSelect: 'none',
    color: `${colors.lighterLightBlue}`
  }
};

const Tile = injectSheet(styles)(CardTile);
export default Tile;
