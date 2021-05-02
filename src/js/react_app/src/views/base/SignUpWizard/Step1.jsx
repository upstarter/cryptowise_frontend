import React, { Component } from "react";
import injectSheet from "react-jss";
import Tile from 'Components/base/tile/Tile';
import colors from "Styles/colors"
import { Button } from 'antd';
import { Steps } from 'antd';

const Step = Steps.Step;

class SignUpStep1 extends Component {
  constructor(props) {
    super(props);
    this._validate = this._validate.bind(this);
    // Bindings for form fields would go here,
    this.state = {
      topic_knowledge_ids: [],
      showFooter: false
    };
  }
  _validate() {
    if (this.state.topic_knowledge_ids.length >= 3) {
      this.props.saveForm(this.state.topic_knowledge_ids);
      this.props.afterValid(this.state);
      return;
    }
    alert("Choose at least 3.");
  }
  _validateSelected() {
    if (this.state.topic_knowledge_ids.length >= 3) {
      this.setState({showFooter: true})
    } else {
      this.setState({showFooter: false})
    }
  }
  collectTopicKnowledgeIds(id) {
    let ids = this.state.topic_knowledge_ids
    ids.push(id)
    this.setState({
      topic_knowledge_ids: ids
    });
  }
  removeTopicKnowledgeIds(id) {
    let state = this.state;
    let i = state.topic_knowledge_ids.indexOf(id);
    if (i != -1) {
      state.topic_knowledge_ids.splice(i, 1);
    }
  }

  render() {
    let props = this.props;
    let classes = props.classes;
    if (props.currentStep !== 1) {
      return null;
    }
    let tiles = this.props.topics
      ? props.topics.map((data, i) => {
          return (
            <Tile
              className={classes.topicTile}
              data={data}
              key={i}
              id={data.id}
              removeTopicKnowledgeIds={id => this.removeTopicKnowledgeIds(id)}
              collectTopicKnowledgeIds={id => this.collectTopicKnowledgeIds(id)}
              selectedIds={props.selectedIds}
              validateSelected={id => this._validateSelected(id)}
            />
          );
        })
      : [];
    return (
      <div className={classes.container}>
        <div id="topics-header" className={classes.header}>
          <h2 className={classes.title}>
            Gain from bleeding edge market insights.
            Follow 3 or more topics. <span className="subtitle-small">Select as many as you like.</span>
          </h2>
        </div>
        <div className={classes.main}>

          <div className={classes.tileGrid}>{tiles}</div>
          <div className={classes.footer}>
            <Button
              className={classes.button}
              onClick={this._validate}
              disabled={!this.state.showFooter}
              style={
                this.state.showFooter ? {background: `${colors.antBlue}`,
                                         color: `${colors.offWhite}`} : {  }
              }
            >
              Next ->
            </Button>
          </div>
        </div>

      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: 'center',


  },

  main: {
    height: '100%',
    'overflow-y': 'none',
    marginTop: 150,
    "@media (max-width: 482px)": {
      marginTop: 170,
    }
  },

  header: {
    position: 'fixed',
    top: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    background: `${colors.black}`,

    "@media (min-width: 482px)": {
      maxWidth: '400px'
    }
  },
  title: {
    marginTop: 21,
    padding: 20,
    fontSize: "2.8rem !important",
    lineHeight: '3rem !important',
    color: `${colors.offWhite}`,

    "@media (max-width: 482px)": {
      fontSize: '2.5rem !important',
      lineHeight: '2.8rem !important',
    },

    '& .subtitle-small': {
      fontWeight: 'bold',
      display: 'inline-block',
      filter: 'saturate(1) contrast(1)',
      color: `${colors.lightBlack}`,
    }
  },

  topicTile: {
    background: `${colors.black}`,

  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    minHeight: "64px",
    marginBottom: '10px',
    width: '100vw',
    zIndex: 10,
    bottom: 0,
    right: 0,
    background: 'transparent',
  },
  button: {
    width: 180,
    height: 38,
    fontSize: 20,
  },
  tileGrid: {
    padding: 3,
    "@media (min-width: 482px)": {
      marginTop: 120,
    },
    '& .ant-card': {

    }
  },

};

const Step1 = injectSheet(styles)(SignUpStep1);
export default Step1;
