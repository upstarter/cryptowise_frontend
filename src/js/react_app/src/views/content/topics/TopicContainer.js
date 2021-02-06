import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
import NewTopicForm from './NewTopicForm'
import { List, Avatar, Button, Skeleton, Affix, Rate, Icon, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { createProposal } from "Actions/topics.actions";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class TopicChildren extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topic: props.topic
    }
  }

  topicDetail = (topic) => {
    return (
      `<div id='topic-detail' style='color: ${colors.smoke};padding: 0px;font-weight:200;'>
        <i>${topic.description}</i>
      </div>`
    )
  }

  discussTopic = (topic) => {
    return (
      `<a style='letter-spacing: 1px;text-decoration: underline;font-variant: small-caps;font-weight: 600;user-select:none;color: ${colors.sproutGreen};' href='/topics/${topic.id}'>${topic.name}</a>`
    )
  }

  topicHead = (topic, lvl, data=``) => {
    console.log('head', topic, lvl, data)
    let href = `/topics/${topic.id}`

    if (lvl === 0) {
      data += `<h2><a style='user-select:none;margin-left: 10px;color: ${colors.lightBlack};font-size: 23px;font-weight: 300;' href='${href}'>${this.discussTopic(topic)}</a></h2>`
    } else if (lvl === 1) {
      data += `<h2><a style='user-select:none;margin-left: 10px;color: ${colors.lightBlack};font-size: 23px;font-weight: 300;' href='${href}'>${this.discussTopic(topic)}</a></h2>`
    } else if (lvl === 2) {
      data += `<h3><a style='user-select:none;margin-left: 12px;color: ${colors.mediumBlack};font-size: 20px;font-weight: 100' href='${href}'>${this.discussTopic(topic)}</a></h3>`
    } else if (lvl === 3) {
      data += `<h4><a style='user-select:none;margin-left: 17px;color: ${colors.mediumBlack};font-size: 18px;font-weight: 0' href='${href}'>${topic.name}</a></h4>`
    } else {
      data += `<h6><a style='user-select:none;margin-left: 22px;color: ${colors.darkBlack};font-size: 16px; font-weight: 0;' href='${href}'>${topic.name}</a></h${lvl}>`
    }
    console.log('DD',data,lvl)
    return data
  }

  topicChildren = (topicId, children, lvl=0, data=`<div style='margin: 20px 10px 20px 0'>`) => {
    if (children === undefined) { return data }
    if (children.length === 0) { return data }
    if (lvl > 0) { return data }

    children.map((pair, idx) => {
      if (pair.length === 0) { return data }
      let parent = pair[0]
      if (parent.parent_id === topicId) {lvl = 0}
      let childs = pair[1]
      if (parent === undefined) { return data }
      data += this.topicHead(parent, lvl)

      data += `<div style='user-select:none;margin: 10px 0 10px 22px'>${this.topicDetail(parent)}</div>`
      data += `<ul style='user-select:none;margin: 10px 0 10px 34px;list-style-type:none;text-decoration:none;' id='topic-urls'>
                ${childs.map((children) => {
                  return `<li style='text-indent: -10px;padding: 7px'>${this.discussTopic(children[0])} –– ${children[0].description}</li>`
                }).join(``)}
               </ul>`
      if (childs.length > 0) {
        lvl += 1

        data += this.topicChildren(topicId, childs, lvl=lvl)
      }
    })

    return data + `</div>`
  }


  render() {
    let { topic } = this.props
    if (!topic) { return (<></>) }
    return (
      <div style={{margin: [0,0,0,10]}} className='topic-description'>
        <h1 style={{padding: 0, margin: 0}} className='topic-name'>
          {topic && topic.name}
        </h1>
        <div className='description'>
          {topic && topic.description}
        </div>
        <div className='topic-details'
          dangerouslySetInnerHTML={{__html: this.topicChildren(topic.id, topic.children)}}
        >
        </div>
      </div>
    )
  }
}

class TopicContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    topic: null,
    data: [],
    list: [],
    page: 1,
    ModalContent: 'Customize your experience',
    visible: false,
    confirmLoading: false
  };

  componentDidMount() {
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
    const url = `${api_url}/${this.props.topic}?per_page=${count}&page=${this.state.page}`
    const data = {
      withCredentials: true,
      credentials: 'include'
    };

    const cookies = new Cookies();
    const accessToken = cookies.get('_cw_acc')
    setAuthToken(accessToken) // set token in requests

    axios.get(url, data).then((res) => {
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
    console.log('Clicked cancel button');
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

  topicDescription = (topic) => {
    console.log('desc', topic[0])
    return (
      <TopicChildren topic={topic[0]} />
    )
  }

  render() {
    let { classes, topic } = this.props
    topic = topic.split(" ").map((txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
    })
    const { initLoading, loading, list, visible, confirmLoading, ModalContent } = this.state;
    console.log('lllist', list)
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
              <Affix offsetTop={38}>
                <div id="topic-items-heading"
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                >
                  <h3 id="blurb-title">
                  {topic}
                  </h3>
                </div>
              </Affix>

              <div className="item-list">
                {this.topicDescription(list)}
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
  topics: {
    display: 'grid',

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
      minHeight: 70,
      paddingTop: 20,
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',

      '& .float:hover': {
        '-webkit-animation': 'none'
      },


      '& .blurb-title': {
        fontSize: '3.8rem !important',
        lineHeight: '1.7rem !important',
        color: `${colors.lighterBlack} !important`,
        margin: [5,0,0,0],
        fontSize: 30,
        maxWidth: '70ch',

        '@media (max-width: 860px)': {
          gridColumn: '1 / 2',
          maxWidth: '98vw',
        },
        // filter: 'contrast(.8)'
        '& #blurb-subtitle': {
          margin: [0,0,0,0],
          color: `${colors.silver} !important`,
          fontSize: '1.5rem',

        },

        '& #blurb': {
          margin: [0,0,0,0],
          color: `${colors.offWhite}`,
          fontSize: '16px',
          padding: 0,
        },
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

      padding: '10px',
      color: `${colors.offWhite} !important`,

      '& .ant-list-items': {
        boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
        width: '95vw',
        background: `${colors.secondaryDark}`,
        border: `1px solid ${colors.darkerDarkBlack}`,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        maxWidth: '95vw',

        // '& #ant-list-item-meta': {
        //   '& #topic-detail': {
        //     padding: 40
        //   }
        // },

        '& .ant-list-item-meta-description': {
            maxWidth: '80ch'
         },

        '& .item-name': {
          margin: [0,0,0,0],
          color: `${colors.midTone} !important`,

        },

        '& .topic-description': {
          margin: [0,0,0,0],
          color: `${colors.smoke}`,

          '& .description': {
            margin: [0,0,0,0],
            color: `${colors.smoke}`
          },

          '& .topic-details': {
            color: `${colors.midTone}`
          }
        },

        '& .ant-list-item-meta-title': {
           '& a': { color: `${colors.darkYellow}`},
           '&:hover': {
             cursor: 'select',
             color: '',
             textDecoration: 'underline'
           }
         },

         '& .ant-list-item-meta-avatar': {

          },
      },


    },
  },

}

export default connect(null, null)(injectSheet(topicStyles)(TopicContainer))
