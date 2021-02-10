import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url, url } from 'Utils/consts'
import { Card, Button, Icon, Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { createProposal } from "Redux/topics";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


const count = 25;


class TopicContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topicId: null,
      initLoading: true,
      loading: false,
      topic: {},
      data: [],
      visible: false,
      confirmLoading: false
    }
  }


  componentDidMount() {
      this.getData(res => {
        console.log('DDDD', res.data)

        this.setState({
          topic: res.data
        });
      });
    }

  getData = callback => {
    let {match} = this.props
    const url = `${api_url}${match.url}`

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

  topicDetail = (topic) => {
    return (
      `<div id='topic-detail' style='color: ${colors.smoke};padding: 0px;font-weight:200;'>
        <i>${topic.description}</i>
      </div>`
    )
  }

  discussTopic = (topic) => {
    return (
      `<a id='discuss-topic' style='letter-spacing: 1px;font-variant: small-caps;font-weight: 600;user-select:none;color: ${colors.sproutGreen};' href='/discuss/topics/${topic.id}'>${topic.name}</a>`
    )
  }

  topicHead = (topic, lvl, data=``) => {
      let href = `/topics/${topic.id}`

      if (lvl === 0) {
        data += `<h2 class='topic-heading'><a style='user-select:none;margin-left: 10px;color: ${colors.lightBlack};font-size: 23px;font-weight: 300;' href='${href}'>${this.discussTopic(topic)}</a></h2>`
      } else if (lvl === 1) {
        data += `<h2 class='topic-heading'><a style='user-select:none;margin-left: 10px;color: ${colors.lightBlack};font-size: 28px;font-weight: 300;' href='${href}'>${this.discussTopic(topic)}</a></h2>`
      } else if (lvl === 2) {
        data += `<h3 class='topic-heading'><a style='user-select:none;margin-left: 12px;color: ${colors.mediumBlack};font-size: 25px;font-weight: 100' href='${href}'>${this.discussTopic(topic)}</a></h3>`
      } else if (lvl === 3) {
        data += `<h4 class='topic-heading'><a style='user-select:none;margin-left: 17px;color: ${colors.mediumBlack};font-size: 25px;font-weight: 0' href='${href}'>${topic.name}</a></h4>`
      } else {
        data += `<h6 class='topic-heading'><a style='user-select:none;margin-left: 22px;color: ${colors.darkBlack};font-size: 25px; font-weight: 0;' href='${href}'>${topic.name}</a></h${lvl}>`
      }
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
                  return `<li class='discuss-list' style='font-size: 17px;text-indent: -10px;padding: 7px'>💬&nbsp;&nbsp;&#8594;&nbsp;${this.discussTopic(children[0])} –– ${children[0].description}</li>`
                }).join(``)}
               </ul>`
      if (childs.length > 0) {
        lvl += 1

        data += this.topicChildren(topicId, childs, lvl=lvl)
      }
    })

    return data + `</div>`
  }

  // componentWillReceiveProps(props) {
  //   if (!_.isEqual(_.get(this.props, 'match.url'), _.get(props, 'match.url'))) {
  //       this.setState({ key: _.get(props, 'match.url') });
  //   }
  // }

  render() {
    let { classes} = this.props
    const { initLoading, loading, visible, confirmLoading,match, topic, ModalContent } = this.state;

    const parent_name = topic[0] && topic[0].name
    const parent_desc = topic[0] && topic[0].description
    const children = topic[1] || []
    return (
      <div className="dark-wrap">
        <React.Fragment>
          // <ScrollToTopOnMount />
          <section id="topic-items" className={classes.topic}>
            <h1 className='topic-name'>
              {parent_name}
            </h1>
            <div className='topic-description'>
              <div className='description'>
                {parent_desc}
              </div>
              <div
              className='topic-details'
                dangerouslySetInnerHTML={{ __html: this.topicChildren(topic.id, children) }}>
              </div>
            </div>
          </section>
        </React.Fragment>
      </div>
    )
  }
}

const topicStyles = {
  topic: {
    display: 'grid',
    justifyItems: 'center',
    padding: 13,
    maxWidth: 800,
    margin: '0 auto',
    '& .topic-name': {
      color: colors.darkYellow
    },
    '& .description':  {
      color: colors.lightBlack,
      fontWeight: 100,
    },

    '& .topic-heading': {
      fontSize: '24px !important'

    },

    '& .discuss-list': {
      fontSize: 30
    },

    '& #discuss-topic': {


    },

    '@media (max-width: 860px)': {
    },

    '@media (min-width: 860px)': {


    },
  },

}

export default connect(null, null)(injectSheet(topicStyles)(TopicContainer))
