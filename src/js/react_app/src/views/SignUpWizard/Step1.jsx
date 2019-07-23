import React, { Component } from "react";
import injectSheet from "react-jss";
import Tile from "../../components/Tile/Tile";
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
        <div className={classes.header}>
          <h2 className={classes.title}>
            So we can provide you with relevant signals and content,
            please choose <em>at least</em> 3 topics your most interested in.
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
                                           color: `${colors.white}`} : {  }
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: '5px auto',
    width: '800px !important',
    'overflow-y': 'none',
  },
  header: {
    position: 'fixed',
    width: '100%',
    margin: [0,0,20,0],
    zIndex: 1,
    background: `${colors.white}`,
  },
  title: {
    padding: [10,20,20,25],
    fontSize: "21px !important",
    color: `${colors.black}`,
    textAlign: 'center'

  },
  footer: {
    position: 'fixed',
    height: "80px",
    width: '100vw',
    bottom: 0,
    right: 0,
    fontSize: 22,
    background: `${colors.white}`,
    boxShadow: '8px 2px 4px 8px #f0f1f2',
  },
  button: {
    float: 'right',
    width: '75px',
    margin: "30px 170px 0 0",
  },
  tileGrid: {
    marginTop: '35px',
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    // gridTemplateRows: "repeat(3, auto)",
    gridColumnGap: ".2em",
    gridRowGap: ".2em"
  },

  "@media (min-width: 576px)": {
    header: {
      maxWidth: 800,
      maxHeight: "90px",
      lineHeight: "2em",
    },
    title: {
      fontSize: "19px"
    },
    tileGrid: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
    main: {
      marginTop: 60,
    }
  },
  "@media (max-width: 576px)": {
    header: {
      maxHeight: "155px",
      lineHeight: ".1em",
    },
    title: {
      fontSize: "14px",
      width: '95vw',
      textAlign: 'center'
    },
    steps: {
      display: 'none !important',
    },
    tileGrid: {
      gridTemplateColumns: "1fr 1fr"
    },
    main: {
      marginTop: 120,
    },

  }
};

const Step1 = injectSheet(styles)(SignUpStep1);
export default Step1;
