import React from "react";
import ReactDOM from "react-dom";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import { api_url, url } from "Utils/consts";
import {
  List,
  Avatar,
  Button,
  Skeleton,
  Affix,
  Rate,
  Icon,
  Typography,
  Divider,
  Modal,
} from "antd";
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPost } from "Redux/discussions";
import colors from "Styles/colors";
import Cookies from "universal-cookie";
import setAuthToken from "Services/auth/setAuthToken";
import Post from "./Post";
import NewPostForm from "./NewPostForm";

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      count: 25,
      threadId: null,
      posts: [],
      selectedPost: null,
      isLoading: true,
      error: null,
      page: 1,
      ModalContent: "Customize your experience",
      visible: false,
      confirmLoading: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  handleCreate = () => {
    this.setState({
      ModalContent: "The modal will be closed after two seconds",
      confirmLoading: true,
    });

    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        console.error("handleCreate error", err);
        return;
      }
    });
    form.threadId = this.props.thread.id;
    this.props.dispatch(createPost(form));

    form.resetFields();
    this.setState({ visible: false, confirmLoading: false });
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  render() {
    const { classes, thread } = this.props;
    const {
      initLoading,
      loading,
      visible,
      confirmLoading,
      ModalContent,
    } = this.state;
    return (
      <div className={classes.thread}>
        <NewPostForm
          wrappedComponentRef={this.saveFormRef}
          wrapClassName={classes.modal}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          confirmLoading={confirmLoading}
        />
        <div className={classes.posts}>
          <ul className={classes.postList}>
            {thread.posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </ul>
        </div>
        <div className={classes.postsFooter}>
          <Button
            size="small"
            className={`${classes.btn} ${classes.viewMorePostsBtn}`}
            onClick={this.showModal}
          >
            View More
          </Button>
        </div>
      </div>
    );
  }
}

const postsStyles = {
  threadRow: {
    display: "flex",
    flexDirection: "column",
    background: colors.darkBlue,

    "& #thread-header:hover": {
      // background: `linear-gradient(to bottom, rgba(175,170,170, .15), rgba(175,170,170, .10)), no-repeat`,
    },
  },

  postsHeader: {
    display: "flex",
    justifyContent: "center",
    height: 14.5,
    padding: 1.5,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 2,
    fontVariant: "small-caps",
    lineHeight: ".85em",
    background: colors.black,
    color: colors.midTone,
  },
  postList: {
    listStyleType: "none",
  },
  threadHeader: {
    display: "flex",
    height: 35,
    padding: 2,
    background: colors.silver,
    color: colors.white,
    justifyContent: "space-between",
  },
  threadTitle: {
    margin: [0, 7, 0, 7],
    padding: 2,
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "1.2em",
    color: colors.black,
  },
  threadActions: {},
  threadAction: {
    padding: 2,
    margin: [0, 2, 0, 2],

    height: "1.93em",
  },
  btn: {
    background: colors.darkerDarkBlue,
    fontSize: 10,
    fontWeight: 740,
    letterSpacing: ".1em",
  },
  commentThreadBtn: {},
  viewThreadBtn: {},
  threadDetail: {
    display: "none",
  },

  postsFooter: {
    display: "flex",
    alignItems: "top",
    justifyContent: "center",
    height: 40,
  },
  viewMorePostsBtn: {},
};

// whatever is returned will show up as props inside Discuss
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
  };
};

// anything returned from here will end up as props on DiscussContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ selectPost: null }, dispatch);
};

export default connect(null, null)(injectSheet(postsStyles)(PostsContainer));
