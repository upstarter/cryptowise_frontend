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
            Find wise investment solutions relevant to your interests.
            Choose 3 or more topics that interest you. <span className="subtitle-small">Select as many as you like.</span>
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
    '& #topics-header': {
      position: 'fixed',
      top: 45,
      maxHeight: '25vh',
      // marginBottom: '50px',
      maxWidth: 405,
      // padding: '7px',
      width: '105%',
      zIndex: 1,
      // boxShadow: '1px 1px 3px 1px ${colors.sand}',
      background: `${colors.primaryDark}`,

      // filter: 'saturate(.8) invert(1)'
    },
  },

  main: {
    height: '100%',
    marginTop: 160,
    marginBottom: 100,

    width: '400px !important',
    'overflow-y': 'none',
  },
  title: {
    padding: 15,
    fontSize: "20px !important",
    color: `${colors.offWhite}`,
    textAlign: 'center',
    margin: [0,0,0,20],
    '& .subtitle-small': {
      fontWeight: 'bold',
      filter: 'saturate(1) contrast(1)',
      color: `${colors.origGreen}`,
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
    fontSize: 24,
    background: 'transparent',
  },
  button: {
    width: '75px',
  },
  tileGrid: {
    margin: '40px 0 440px 0',
    // display: "grid",
    // gridTemplateColumns: "repeat(1, 1fr)",
    // gridTemplateRows: "repeat(1, auto)",
    // gridColumnGap: ".2rem",
    // gridRowGap: ".2rem"
    '& .ant-card': {

    }
  },

  "@media (min-width: 482px) and (max-width: 662px)": {
    header: {
      maxHeight: "25vh",
    },
    title: {
      fontSize: "19px"
    },
    tileGrid: {
      gridTemplateColumns: "1fr"
    },
    main: {
      maxWidth: '99vw',
      marginTop: 170
    }
  },
  // MOBILE
  "@media (max-width: 482px)": {
    header: {
      maxHeight: "45vh",
      padding: [7, 7, 7, 21],

      // lineHeight: ".01em",
    },
    title: {
      fontSize: "15px !important",
      textAlign: 'left'
    },
    steps: {
      display: 'none !important',
    },
    tileGrid: {
      gridTemplateColumns: "1fr"
    },
    main: {
      marginTop: 170,
    },
    footer: {
      display: 'flex',
      minHeight: 65,
    },
  }
};

const Step1 = injectSheet(styles)(SignUpStep1);
export default Step1;
