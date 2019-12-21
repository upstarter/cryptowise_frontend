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
              className="topic-tile"
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
            Gain from cutting edge insights relevant to your goals/interests.
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
                this.state.showFooter ? {background: `${colors.origGreen}`,
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
  },

  main: {
    height: '100%',
    width: '400px !important',
    'overflow-y': 'none',
    marginTop: 150,
    "@media (max-width: 482px)": {
      marginTop: 130,
    }
  },

  header: {
    position: 'fixed',
    top: 50,
    minHeight: '15vh',
    maxWidth: 405,
    zIndex: 1,
    background: `${colors.primaryDark}`,

    "@media (max-width: 482px)": {

    }
  },
  title: {
    padding: [18,11,0,11],
    fontSize: "2.2rem !important",
    lineHeight: '3rem !important',
    color: `${colors.offWhite}`,

    "@media (max-width: 482px)": {
      fontSize: '1.8rem !important',
      height: '17vh !important',
      lineHeight: '2rem !important',
    },

    '& .subtitle-small': {
      fontWeight: 'bold',
      filter: 'saturate(1) contrast(1)',
      color: `${colors.lightBlack}`,
    }
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    minHeight: "50px",
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
    margin: '60px 5px 130px 5px',
    '& .ant-card': {

    }
  },

};

const Step1 = injectSheet(styles)(SignUpStep1);
export default Step1;
