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
    const { description, title, body, id, since_posted, user} = post

    return (
      <div className={classes.postDetail} key={post.id}>
        <div className={classes.post}>
          <div className={classes.userCaption}>
            <span className={classes.postedBy}>Posted by </span>
            <span className={classes.postUser}>{user} </span>
            <span className={classes.postAge}>{timeSince(since_posted)} ago</span>
          </div>
          <div className={classes.postContent}>
            <div className={classes.postBody}>{body}</div>
          </div>

        </div>
      </div>
    )
  }
}

const postStyles = {

  postDetail: {
    display: 'grid',
    gridTemplateAreas: `
      "caption"
      "body"
      `,
      '@media (max-width: 408px)': {
        maxWidth: '96vw',

      },
      '@media (min-width: 408px)': {
        maxWidth: '100%',

      },
  },

  postBody: {
    gridArea: "body",
    fontSize: "14px !important",
    fontWeight: "100 !important",
    letterSpacing: ".05em !important",
    color: colors.silver8,
    padding: [13,0,8,0],
    wordWrap: 'break-word',
    '@media (max-width: 408px)': {
      maxWidth: '40ch',

    },
    '@media (min-width: 408px)': {
      maxWidth: '90vw',

    },
  },
  postContent: {
    maxWidth: '100%',
  },
  post: {

    margin: [0,0,10,0],
    borderBottom: `1px solid ${colors.silver2}`,
    padding: 13,
    background: colors.secondaryDark,

  },
  userCaption: {
    gridArea: "caption",
    color: colors.white,
    fontSize: 13,
  },
  postUser: {
    color: colors.yellow,
    fontSize: 15,
    letterSpacing: '0.05em'
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
