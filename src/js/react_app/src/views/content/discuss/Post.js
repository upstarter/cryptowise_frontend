import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url, url } from 'Utils/consts'
import { List, Avatar, Button, Skeleton, Affix, Rate, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { createPost } from "Redux/discussions";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'
import {timeSince} from 'Utils/timeUtils'

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {post, classes} = this.props
    console.log(post)
    const { description, title, body, id, since_posted, user} = post

    return (
      <li className={classes.postDetail} key={post.id}>
        <div className={classes.post}>
          <span className={classes.userCaption}>
            <span className={classes.postedBy}>Posted by </span>
            <span className={classes.postUser}>{user} </span>
            <span className={classes.postAge}>{timeSince(since_posted)} ago</span>
          </span>
          <span className={classes.postBody}>{body}</span>
        </div>
      </li>
    )
  }
}

const postStyles = {
  postBody: {
    fontSize: 14,
  },
  userCaption: {
    color: colors.midTone,
    fontSize: 13,
  },
  postDetail: {
    '& .description':  {
      color: colors.lightBlack,
      fontWeight: 100,
    },

    '& .post-heading': {
      fontSize: '24px !important'

    },

  },

  post: {
    margin: '0 auto',
    padding: 7,
    margin: 2,
    background: colors.primary,

  },
  postBody: {
    marginLeft: 7,
    color: colors.yellow,
    opacity: 0.9,
  },


}
// whatever is returned will show up as props inside Discuss
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

// anything returned from here will end up as props on DiscussContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({selectPost: null}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(postStyles)(Post));
