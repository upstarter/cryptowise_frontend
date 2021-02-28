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

  topicDetail = (topic) => {
    return (
      <div className='topic-detail' style={{color: colors.silver8, padding: '0px 0px 0px 13px'}}>
        <p className='topic-detail-description'>{topic.description}</p>
      </div>
    )
  }

  getDepth = (tree) => {
      return 1 + Math.max(0, ...tree.map(({ children = [] }) => getDepth(children)));
  }

  sleep = (ms, callback=null) => {
    setTimeout(ms, callback)
  }

  discussTopic = (topic,lvl,children=null) => {
    let hasChildren = children && children.length > 0
    let a = null
    if ([0,1].includes(lvl)) {
      if (hasChildren) {
        a = <a className='discuss-topic' style={{color: colors.link}} href={`/topics/${topic.id}`}>{topic.name}</a>
      } else {
        a = <a className='discuss-topic' style={{color: colors.link}} href={`/discuss/topics/${topic.id}`}>{topic.name}</a>
      }
    } else {
      a = <a className='discuss-topic' style={{color: colors.link}} href={`/topics/${topic.id}`}>{topic.name}</a>
    }
    return a
  }

  onboard = (e) => {
      e.preventDefault();
      this.setState({showOnboard: true})
    }

  topicHead = (topic, lvl) => {
    let href = `/discuss/topics/${topic.id}`

    let title = null
    if (lvl === 0) {
      title = <h2 className='topic-heading'><a style={{userSelect:'none', marginLeft: '6px', color:  colors.lightBlack, fontSize: '23px', fontWeight: 600}}  href={href}>{this.discussTopic(topic,lvl)}</a></h2>
    } else if (lvl === 1) {
      title = <h2 className='topic-heading'><a style={{userSelect:'none', marginLeft: '6px', color:  colors.lightBlack, fontSize: '28px', fontWeight: 300}}  href={href}>{this.discussTopic(topic,lvl)}</a></h2>
    } else if (lvl === 2) {
      title = <h3 className='topic-heading'><a style={{userSelect:'none', marginLeft: '8px', color:  colors.mediumBlack, fontSize: '25px', fontWeight: 100}} href={href}>{this.discussTopic(topic,lvl)}</a></h3>
    } else if (lvl === 3) {
      title = <h4 className='topic-heading'><a style={{userSelect:'none', marginLeft: '11px', color: colors.mediumBlack, fontSize: '25px', fontWeight: 0}} href={href}>{topic.name}</a></h4>
    } else {
      title = <h6 className='topic-heading'><a style={{userSelect:'none', marginLeft: '14px', color: colors.darkBlack, fontSize: '25px',  fonWweight: 0}}  href={href}>{topic.name}</a></h6>
    }
    return title
  }

  topicChildren = (topicID, children, classes, lvl=0) => {
    if (children === undefined) return
    if (children.length === 0)  return
    if (lvl > 0) return data

    return (
       <div className='child'>
        {
          children.map((pair, idx) => {
            if (pair.length === 0) { return data }
            let parent = pair[0]
            // if (parent.parent_id === topicId) {lvl = 0}
            let childs = pair[1]
            if (parent === undefined) { return data }
            let img = parent.parent_id === 193 ?
              this.topicImage(parent.name, classes) : null

            return (
               <div key={parent.id} className={classes.topicHead}>
                <div class='topic-header'>
                  {img}
                  {this.topicHead(parent, lvl)}
                </div>
                <div className='topic-details' style={{userSelect: 'none'}}>{this.topicDetail(parent)}</div>
                  <ul style={{userSelect: 'none', listStyleType: 'none', textDecoration: 'none'}} id='topic-urls'>
                      {
                        childs.map((children) => {
                          return <li className='discuss-link' style={{textIndent: -10, padding: 7}}>{this.discussTopic(children[0], lvl, children[1])} – {children[0].description}</li>
                        })
                      }
                  </ul>
               </div>
            )
          })
        }
      </div>
    )
  }

  topicBody = (parent, topicID, childs, lvl) => {
    return (
      <>
        <div className='topic-details' style={{userSelect: 'none'}}>{this.topicDetail(parent)}</div>
        <ul style={{userSelect: 'none', listStyleType: 'none', textDecoration: 'none'}} id='topic-urls'>
            {
              childs.map((children) => {
                return <li className='discuss-link' style={{textIndent: -10, padding: 7}}>{this.discussTopic(children[0], lvl, children[1])} – {children[0].description}</li>
              })
            }
        </ul>
        {
          childs.length > 0 ? (
            lvl += 1,
            this.topicChildren(topicID, childs, lvl=lvl)
          ) : null
        }
      </>
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

  render() {
    let { topic, classes } = this.props
    let { topicID } = this.state
    if (!topic) { return (<></>) }

    return (
      <div className={classes.topic}>
        <section className={classes.topicHead}>
          <span className={classes.topicName}>
             {topic && topicID === 'strategy' ? "Strategy" : topic.name }
          </span>
          <span className={classes.topicDescription}>
            {topic && topic.description}
          </span>
        </section>
        <div className={classes.topicDetails}>
          { this.topicChildren(topic.id, topic.children, classes) }
        </div>
        { this.state.showOnboard ? <OnboardContainer id='onboard-container'/> : '' }
      </div>

    )
  }
}

let topicChildrenStyles = {
  topicImage: {
    gridArea: "image",
    '& img': {
      width: '50px',
      height: '50px',
      borderRadius: '50px',
    },
  },
  topic: {
    marginTop: 20,
    '& .child': {
      maxWidth: '95vw',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

    },
    '& .topic-header': {
      display: 'grid',
      gridTemplateAreas: `"heading" "image"`,
      alignItems: 'center',
      justifyItems: 'center',
      minWidth: 285,
      marginBottom: 20,

      '& .topic-image': {
        gridArea: "image",

        '& img': {
          width: '50px',
          height: '50px',
        }
      },
    },
    '& .topic-heading': {
      gridArea: "heading",
      margin: [8,0,0,13],
      textAlign: 'center',

      '& a': {
        fontSize: '3.3rem !important',
        color: `${colors.link} !important`,
        fontWeight: 500,

      },
    },

    '& .topic-details': {

    },
    '& .discuss-link': {
      marginLeft: 15,
      color: `${colors.silver8}`,
    },
    '& .topic-detail-description': {
      color: colors.silver8,
      fontWeight: 445,
    },
    '& .discuss-topic': {
      fontSize: 17,
      userSelect: 'none',
      fontWeight: 500,
      letterSpacing: '.1em',
    }
  },
  discuss: {
    margin: [0,0,0,0],

    "@media (max-width: 408px)": {

    },
    "@media (min-width: 408px)": {},
  },
  topicHead: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topicName: {
    fontSize: '4.5rem !important',
    color: colors.silver,
    maxWidth: '400px',
    textAlign: 'center',
    "@media (max-width: 408px)": {
      fontSize: '1.5rem !important',
      padding: 5,
    },
  },
  topicDescription: {
    color: colors.silver6,
    maxWidth: '60ch',
    marginBottom: 5,
    padding: 13,
    textAlign: 'center',
    "@media (max-width: 408px)": {
      marginLeft: 15,
    },
    "@media (min-width: 408px)": {},
  },
  topicDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '20px auto',
    maxWidth: '60ch',

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
      list: [],
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
        list: res.data,
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
    // const data = {
    //   withCredentials: true,
    //   credentials: 'include'
    // };
    //
    // const cookies = new Cookies();
    // const accessToken = cookies.get('_cw_acc')
    // setAuthToken(accessToken) // set token in requests
    //
    // axios.get(url, data).then((res) => {
    //   callback(res.data)
    // })


    axios.get(url).then((res) => {
      callback(res.data)
    })
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.data);
      const page = this.state.page + 1

      this.setState(
        {
          data,
          list: data,
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
    const { initLoading, loading, list, visible, confirmLoading, ModalContent } = this.state;

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

          <section id="topic" className={classes.topics}>
            <div id="topic-items"
                 className={classes.topicItems}
            >
              <div className="item-list">
                {this.topicDescription(list, topicID)}
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
  topicHeader: {

  },
  topics: {
    display: 'grid',
    marginTop: 50,


    '@media (max-width: 860px)': {
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: '"header" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateColumns: '1fr',
      padding: 10,
      gridTemplateAreas: '"header content"',
    },

    '@media (min-width: 860px)': {
      gridColumn: '1 / 2',
      maxWidth: '96vw',
    },

  },

  topicItems: {
    gridArea: 'content',
    width: '100vw',

    '@media (max-width: 860px)': {
      gridRow: '2 / 3',
      justifySelf: 'center',
      margin: '0px auto'

    },
    '@media (min-width: 860px)': {
      justifySelf: 'center',
      margin: '0px auto',
    },

    '& #topic-items-heading': {
      display: 'grid',
      zIndex: 10,
      // minHeight: 70,
      // paddingTop: 20,
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',

      '& .float:hover': {
        '-webkit-animation': 'none'
      },

      '& .float': {
        gridColumn: '3',
        gridRow: '1 / 3',
        justifySelf: 'end',
        margin: [0, 22, 0, 0],
        backgroundColor: `${colors.darkBlack}`,
        color: '#FFF',
        borderRadius: 50,
        textAlign: 'center',
        cursor: 'pointer',
        zIndex: 10,
        border: 'none',
        boxShadow: `0 0 0 0 ${colors.darkBlack}`,
        '-webkit-animation': 'pulse 1.5s infinite',
      },
    },

    '& .item-list': {

      color: `${colors.offWhite} !important`,

      '& .topic-description': {
        margin: [0,0,0,0],
        color: `${colors.smoke4}`,

        '& .topic-name': {
          color: colors.silver
        },

        '& .description': {
          margin: [0,0,0,0],
          color: `${colors.silver6}`
        },

        '& .topic-detail': {

          '& .topic-detail-description': {
            color: `${colors.silver8}`,
          }

        }
      },

    },
  },

}
const TopicContainerWithRouter = withRouter(TopicContainer)

export default connect(null, null)(injectSheet(topicStyles)(TopicContainerWithRouter));
