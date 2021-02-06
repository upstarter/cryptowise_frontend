import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url, url } from 'Utils/consts'
import { Card, Button, Icon, Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { createProposal } from "Actions/topics.actions";
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
    const { match: { params } } = this.props;

    this.state = {
      topicId: params.topicId,
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
    const url = `${api_url}/topics/${this.state.topicId}`
    console.log('JJJJJJJJ', url)

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

  topicChildren = (children, lvl=0, idx=0, data=`<div style='margin: 10px 0 10px 0'>`) => {
    if (children === undefined) { return }
    console.log('children', children)

    children.map((pair) => {
      if (idx >= 3) {
        return
      }
      let parent = pair[0]
      let childs = pair[1]
      let href = `/topics/${parent.id}`

      //taxonomy, non-fungible
      if (parent.id === 20 ||
          parent.id === 72
          ) {
        lvl = 0
      }
      if (parent.id === 81 || parent.id === 76) {
        lvl = 1
      }

      if (lvl === 0) {
        data += `<h1><a style='color: ${colors.lighterBlack}; font-size: 27px;font-weight: 600;' href='${href}'>${parent.name}</a></h1>`
      } else if (lvl === 1) {
        data += `<h2><a style='margin-left: 12px;color: ${colors.lightBlack};font-size: 23px;font-weight: 300;' href='${href}'>${parent.name}</a></h2>`
      } else if (lvl === 2) {
        data += `<h3><a style='margin-left: 15px;color: ${colors.mediumBlack};font-size: 20px;font-weight: 100' href='${href}'>${parent.name}</a></h3>`
      } else if (lvl === 3) {
        data += `<h4><a style='margin-left: 20px;color: ${colors.mediumBlack};font-size: 18px;font-weight: 0' href='${href}'>${parent.name}</a></h4>`
      } else {
        data += `<h6><a style='margin-left: 27px;color: ${colors.darkBlack};font-size: 16px; font-weight: 0;' href='${href}'>${parent.name}</a></h${lvl}>`
      }
      data += `<div style='margin: 10px 0 10px 37px'>${this.topicDetail(parent)}</div>`
      if (childs.length > 0) {
        lvl += 1
        idx += 1
        data += this.topicChildren(childs, lvl=lvl)
      }

    })

    return data + `</div>`
  }


  render() {
    let { classes} = this.props
    const { initLoading, loading, visible, confirmLoading, topic, ModalContent } = this.state;
    console.log('topicsly', topic)
    const parent_name = topic[0] && topic[0].name
    const parent_desc = topic[0] && topic[0].description
    const children = topic[1] || []
    console.log('parch', parent_name, children)
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
                dangerouslySetInnerHTML={{ __html: this.topicChildren(children) }}>
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
    marginTop: 200,

    '& .topic-name': {
      color: colors.darkYellow
    },
    '& .description':  {
      color: colors.lightBlack,
      fontWeight: 100,
    },

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

}

export default connect(null, null)(injectSheet(topicStyles)(TopicContainer))
