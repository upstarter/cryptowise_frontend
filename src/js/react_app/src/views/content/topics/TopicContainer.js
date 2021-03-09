import React from 'react'
import ReactDOM from 'react-dom'
import { Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
import NewTopicForm from './NewTopicForm'
import { List, Avatar, Button, Skeleton, Affix, Rate, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { createProposal } from "Redux/topics";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'
import OnboardContainer from './OnboardContainer'
const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class TopicChildren extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: props.topic,
      topicID: props.topicID,
      showOnboard: false,
    }
  }

  getDepth = (tree) => {
      return 1 + Math.max(0, ...tree.map(({ children = [] }) => getDepth(children)));
  }

  sleep = (ms, callback=null) => {
    setTimeout(ms, callback)
  }

  onboard = (e) => {
      e.preventDefault();
      this.setState({showOnboard: true})
  }

  topicDetail = (topic, classes) => {
    return (
      <div className={classes.topicDetail}>
        <p className={classes.topicDescription}>{topic.description}</p>
      </div>
    )
  }

  topicImage = (name, classes) => {
      let re = /\(.*\)/
      let symbol = name.match(re)
      let matched = symbol && symbol[0]
      if (symbol) {
        let sym = matched.replace('(','').replace(')', '').toLowerCase()
        let imgUrl = require(`./crypto-logos/${sym}.png`)
        return (<div className={classes.topicImage}><img src={imgUrl} /></div>)
      }
  }

  topicHead = (topic, lvl, classes, children=[]) => {
    let hasChildren = children.length > 0
    let href = hasChildren ? `/topics/${topic.id}` : `/discuss/topics/${topic.id}`
    let klasses = hasChildren ? classes.parentTopicLink : classes.childTopicLink

    let a = null
    if (lvl === 0) {
      a = <a className={classes.link1} href={href}>{topic.name}</a>
    } else if (lvl === 1) {
      a = <a className={classes.link2} href={href}>{topic.name}</a>
    } else if (lvl === 2){
      a = <a className={classes.link3} href={href}>{topic.name}</a>
    } else if (lvl === 3) {
      a = <a className={classes.link4} href={href}>{topic.name}</a>
    }
    let title

    if (lvl === 0) {
      title = <h1 className={`${classes.link1}`} >{a}</h1>
    } else if (lvl === 1) {
      title = <h2 className={classes.link2}>{a}</h2>
    } else if (lvl === 2){
      title = <h3 className={classes.link3}>{a}</h3>
    } else if (lvl === 3) {
      title = <h4 className={classes.link4}>{a}</h4>
    }

    // if (topic.name === 'Crypto Macro Economy') debugger

    return title
  }


  topicChildren = (topicID, children, classes, lvl=0) => {
    if (children === undefined) return
    if (children.length === 0)  return

    return (
       <div className={classes.child}>
        {
          children.map((pair, idx) => {
            if (pair.length === 0) { return null }
            let parent = pair[0]
            // if (parent.parent_id === topicId) {lvl = 0}
            let childs = pair[1]
            if (parent === undefined) { return null }
            let img = parent.parent_id === 193 ?
              this.topicImage(parent.name, classes) : null
            return (
               <div key={parent.id} className={classes.topicHead}>
                <div className={classes.topicsHeader}>
                  {this.topicHead(parent, lvl, classes, childs)}
                  {img}

                </div>
                <div className={classes.childTopicDetails} style={{userSelect: 'none'}}>{this.topicDetail(parent, classes)}</div>
                  {this.topicBody(parent, topicID, childs, classes, lvl+1)}
               </div>
            )
          })
        }
      </div>
    )
  }

  topicBody = (parent, topicID, childs, classes, lvl) => {
    return (
      <>
        <ul style={{userSelect: 'none', listStyleType: 'none', textDecoration: 'none'}} id='topic-urls'>
            {
              childs.map((children) => {
                return (
                  <>
                    <li className={classes.childDetail}>
                      <div
                        className={classes.childTopicName}
                        >
                        {this.topicHead(children[0], lvl, classes, children[1])}
                      </div>
                      <div className={classes.childTopicDesc}>
                        {children[0].description}
                      </div>
                   </li>
                </>
              )})
            }
        </ul>
      </>
    )
  }

  render() {
    let { topic, classes } = this.props
    let { topicID } = this.state
    if (!topic) { return (<></>) }

    return (
      <div className={classes.topic}>
        <section className={classes.mainTopicHead}>
          <span className={classes.topicName}>
             Discuss {topic && topicID === 'strategy' ? "Strategy" : topic.name }
          </span>
          <span className={classes.topicDescription}>
            {topic && topic.description}
          </span>
        </section>
        <div className={classes.childTopicDetails}>
          { this.topicChildren(topic.id, topic.children, classes) }
        </div>
        { this.state.showOnboard ? <OnboardContainer id='onboard-container'/> : '' }
      </div>

    )
  }
}

let topicChildrenStyles = {
  topic: {
    marginTop: 100,
  },
  topicsHeader: {
    gridArea: "image",
  },

  topicHeading: {
    gridArea: "heading",
    flexDirection: 'column',
    fontSize: '5em !important',
  },
  topicDescription: {
    color: colors.smoke7,
    maxWidth: '60ch',
    fontStyle: 'italic',
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 408px)": {
      maxWidth: '40ch'
    },
  },
  topicName: {
    fontSize: '4.3rem !important',
    lineHeight: '1.1em',
    color: `${colors.smoke} !important`,
    maxWidth: '60ch',
    textAlign: 'center',
    userSelect: 'none',
    fontWeight: 500,
    marginBottom: 13,
    "@media (max-width: 408px)": {
      fontSize: '4.4rem !important',
    },
  },
  mainTopicHead: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Children
  child: {
    margin: '0px auto',
  },
  topicHead: { },
  childTopicDetails: {
    maxWidth: '60ch',
    margin: '1.2em auto',
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 408px)": {
      maxWidth: '50ch'
    },
  },
  childDetail: {
    padding: 23,
  },
  childTopicLink: {},
  link1: {
    margin: 0,
    fontSize: '3.4rem !important',
    width: '100%',
    textAlign: 'center',
    marginBottom: 21,
    // textShadow: `-2px -2px 20px ${colors.smoke} !important`,
  },
  link2: {},
  link3: {},
  link4: {},
  childTopicDesc: {
    color: colors.smoke8,
  },
  topicImage: {
    gridArea: "image",
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'end',
    paddingBottom: 10,

    '& img': {
      width: '50px',
      height: '50px',
      borderRadius: '50px',
      boxShadow: `0 0 55px 0 ${colors.lighterBlack}`,
    },
  },
  glitch: {
    color: 'white',
    fontSize: '10rem',
    width: '40rem',
    position: 'relative',

    '&:after': {
        content: 'attr(glitch-data-trick)',
        position: 'absolute',
        height: '100%',
        top: 20,
        left: '39px',
        color: colors.link,
        backgroundColor: colors.black,
        overflow: 'hidden',
        textShadow: `-1px 0 ${colors.antBluePop}`,
        clip: 'rect(0, 90rem, 0, 0)',
        animation: 'noise 2s infinite linear alternate-reverse',
    },
    '&:before': {
        content: 'attr(glitch-data-trick)',
        position: 'absolute',
        height: '100%',
        top: 20,
        left: '39px',
        color: colors.link,
        backgroundColor: colors.black,
        overflow: 'hidden',
        textShadow: `1px 0 ${colors.orange}`,
        clip: 'rect(0, 90rem, 0, 0)',
        animation: 'noise 4s infinite linear alternate-reverse',
      }

  }
}

TopicChildren = injectSheet(topicChildrenStyles)(TopicChildren)

class TopicContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initLoading: true,
      loading: false,
      topic: this.props.topic,
      topicID: this.props.match.params.topicID,
      data: [],
      page: 1,
      key: '',
      ModalContent: 'Customize your experience',
      visible: false,
      confirmLoading: false
    };
  }


  componentDidMount() {
    const { match } = this.props

    this.getData(res => {
      res.data[0].children = res.data[1]
      this.setState({
        initLoading: false,
        data: res.data,
        page: this.state.page + 1
      });
    });

  }

  getData = callback => {
    const { topicID } = this.state
    let re = /\d+$/
    let found = topicID && topicID.match(re)

    let url

    if (topicID === 'discuss') {
      url = `${api_url}/economics?per_page=${count}&page=${this.state.page}`
    } else if (topicID === 'assets') {
      url = `${api_url}/topics/193?per_page=${count}&page=${this.state.page}`
    } else {
      url = `${api_url}/${topicID}?per_page=${count}&page=${this.state.page}`
    }

    if (found) {
      url = `${api_url}/topics/${topicID}?per_page=${count}&page=${this.state.page}`
    }

    axios.get(url).then((res) => {
      callback(res.data)
    })
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      data: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.data);
      const page = this.state.page + 1

      this.setState(
        {
          data,
          loading: false,
          page: page,
        },
        () => {
          // Resetting windows offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCreate = () => {

    this.setState({
      ModalContent: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });

    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        console.error('handleCreate error', err)
        return;
      }
      this.props.dispatch(createTopic(values))
    });
    form.resetFields();
    this.setState({ visible: false, confirmLoading: false })
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  titleize = (topic) => {
    topic.replace('\w\w*\g', (txt) => {
            return txt.charAt(0).toUpperCase() +
            txt.substr(1).toLowerCase()
          })
    this.setState({topic: topic})
  }

  topicDescription = (topic, topicID) => {
    return (
      <TopicChildren topic={topic[0]} topicID={topicID} />
    )
  }

  render() {
    let { classes, topic } = this.props
    let { topicID } = this.state
    // topic = topic.split(" ").map((txt) => {
    //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
    // })
    const { initLoading, loading, data, visible, confirmLoading, ModalContent } = this.state;

    const loadMore =
      !initLoading && !loading ? (
        <div
          id='load-more-button'
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>Load More</Button>
        </div>
      ) : null;
    return (
      <div className="dark-wrap">
        <React.Fragment>
          <ScrollToTopOnMount />
          <section className={classes.topics}>
            <div id="topic-items"
                 className={classes.topicItems}
            >
              <div className="item-list">
                {this.topicDescription(data, topicID)}
              </div>
            </div>
          </section>
        </React.Fragment>
      </div>

    )
  }
}

const topicStyles = {
  modal: {
    // width: 10,
    // background: `${colors.secondaryDark}`,
    filter: 'invert(0)',
    '& .ant-modal-content': {
      color: 'red !important',
      textDecoration: 'none !important',
    }
  },

  topic: {

  },
  topicsHeader: {

  },
  topics: {
    display: 'grid',

    '@media (max-width: 860px)': {
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: '"header" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: '"header content"',
    },

    '@media (min-width: 860px)': {
      gridColumn: '1 / 2',
      maxWidth: '99vw',
    },
  },
}
const TopicContainerWithRouter = withRouter(TopicContainer)

export default connect(null, null)(injectSheet(topicStyles)(TopicContainerWithRouter));
