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

const count = 5;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class TopicChildren extends React.Component {
  constructor(props) {
    super(props)
  }

  topicChildren = (children, lvl=0, data=``) => {
    if (children === undefined) { return }
    console.log('children', children)

    children.map((pair, idx) => {
      let parent = pair[0]
      let childs = pair[1]
      console.log(`parent-child ${idx}`, parent, childs)
      console.log('lvl', lvl)
      if (parent.id == 72) {
        lvl = 0
      }

      if (parent.id == 76) {
        lvl = 1
      }
      if (lvl === 0) {
        data += `<h1 style='color: ${colors.lighterBlack}; font-size: 27px;font-weight: 800;'>${parent.name}</h1>`
      } else if (lvl === 1) {
        data += `<h2 style='color: ${colors.lightBlack};font-size: 23px;font-weight: 600;'>${parent.name}</h2>`
      } else if (lvl === 2) {
        data += `<h3 style='color: ${colors.mediumBlack};font-size: 20px;font-weight: 400;'>${parent.name}</h3>`
      } else  {
        data += `<h${lvl} style='margin: 0 0 0 12px;color: ${colors.darkBlack};font-size: 17px; font-weight: 100;'>${parent.name}</h${lvl}>`
      }
      data += `<p style='color: ${colors.offWhite};padding: 10px;font-weight:100;'><i>${parent.description}</i></p>`

      if (childs.length > 0) {
        lvl += 1
        data += this.topicChildren(childs, lvl=lvl)
      }

    })

    return data + `<br />`
  }


  render() {
    let {topic} = this.props
    const {children, description} = topic

    return (
      <div className='topic-description'>
        <div className='description'>
          {description}
        </div>
        <div className='topic-details'
          dangerouslySetInnerHTML={{ __html: this.topicChildren(children) }}
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
    return (
      <TopicChildren topic={topic} />
    )
  }

  render() {
    let { classes, topic } = this.props
    topic = topic.split(" ").map((txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
    })
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
            <NewTopicForm
              wrappedComponentRef={this.saveFormRef}
              wrapClassName={classes.modal}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
              confirmLoading={confirmLoading}
            />


            <div id="topic-items" className={classes.topicItems}>
              <Affix offsetTop={38}>
                <div id="topic-items-heading">
                  <Button className="float" onClick={this.showModal} shape="circle" icon="plus" size='large' />
                  <h3 id="blurb-title">
                  🧠 {topic}
                  </h3>
                </div>
              </Affix>

              <div className="topic-column">
                <List
                  className="item-list"
                  loading={initLoading}
                  itemLayout="horizontal"
                  loadMore={loadMore}
                  dataSource={list}
                  renderItem={item => (
                    // <List.Item actions={[<a>more</a>]}>
                    <List.Item>
                      <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                          id='list-item-meta'
                          // avatar={
                          //    <Avatar style={{}} icon="team" />
                          // }

                          title={<div><a style={{fontSize: 29, color: colors.orange}} href="//ant.design">{item.name}</a></div>}
                          description={this.topicDescription(item)}
                        />
                        {
                          // <div id="meta-details">
                          //   <p className='item-name'>{item.name}</p>
                          //   <p className='item-description'>{item.description}</p>
                          // </div>
                        }
                      </Skeleton>
                    </List.Item>
                  )}
                />
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
    marginTop: 0,

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

    '& #blurb-title': {
      fontSize: '3.8rem !important',
      lineHeight: '1.7rem !important',
      color: `${colors.lighterBlack} !important`,
      margin: [50,0,0,20],
      fontSize: 18,
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
    },

    '& #blurb': {
      margin: [0,0,0,0],
      color: `${colors.offWhite}`,
      fontSize: '16px',
      padding: 0,
    },
  },

  topicItems: {
    gridArea: 'content',

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
      height: 80,
      zIndex: 10,
      padding: [30,0,0,5],
      color: '#fff !important',
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
      '& h3': {
        gridColumn: '1',
        justifySelf: 'start',
        fontSize: '3rem',
        letterSpacing: '0.5rem',
        marginTop: 9,
        color: `${colors.lightBlack}`,
      },
    },

    '& .item-list': {
      padding: '20px',
      color: `${colors.offWhite} !important`,

      '& .ant-list-items': {
        boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
        width: '90vw',
        background: `${colors.secondaryDark}`,
        border: `1px solid ${colors.darkerDarkBlack}`,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyItems: 'space-around',
        maxWidth: '95vw',

        '& .ant-list-item': {
          marginTop: 15,
        },


        '& .ant-list-item-meta-description': {
            maxWidth: '80ch'
         },

        '& .item-name': {
          margin: [0,0,20,0],
          color: `${colors.midTone} !important`,

        },
        '& .topic-description': {
          margin: [0,0,20,0],
          color: `${colors.silver}`,

          '& .description': {
            margin: [0,0,7,0],
            color: `${colors.silver}`
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
