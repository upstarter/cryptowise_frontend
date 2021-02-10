import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url, url } from 'Utils/consts'
import { List, Avatar, Button, Skeleton, Affix, Rate, Icon, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { createPost } from "Redux/discussions";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class Thread extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let {thread, classes} = this.props
    const {posts, description, title, id} = thread
    console.log('htthread', posts, title)

    return (
      <li className={classes.thread}>
        <div className="thread-heading">
          {title} Thread
        </div>
        <div className='thread-description'>
          <div className='description'>
            {description}
          </div>
        </div>
        <div className='thread-details'>
          <div className='thread-posts'>
            {
              posts.map((post) => {
                return (
                  <div className='thread-post-link'>
                    <Button href={`${url}/discuss/posts/${post.id}`}>View {post.title}</Button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </li>
    )
  }
}

const threadStyles = {
  thread: {
    display: 'grid',
    justifyItems: 'center',
    padding: 13,
    maxWidth: 800,
    '& .thread-name': {
      color: colors.darkYellow
    },
    '& .description':  {
      color: colors.lightBlack,
      fontWeight: 100,
    },

    '& .thread-heading': {
      fontSize: '24px !important'

    },

    '& .discuss-list': {
      fontSize: 30
    },

    '& #discuss-thread': {


    },

    '@media (max-width: 860px)': {
    },

    '@media (min-width: 860px)': {


    },
  },

}
// whatever is returned will show up as props inside Discuss
const mapStateToProps = (state, ownProps) => {
  return {
    threads: state.threads
  }
}

// anything returned from here will end up as props on DiscussContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({selectThread: null}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(threadStyles)(Thread));
