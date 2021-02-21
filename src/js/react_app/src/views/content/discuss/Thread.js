import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import injectSheet, { jss } from "react-jss";
import Cookies from "universal-cookie";
import { api_url, url } from "Utils/consts";
import setAuthToken from "Services/auth/setAuthToken";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import { List, Avatar, Button, Skeleton, Affix, Rate, Typography, Divider, Modal } from "antd";
const { Title, Paragraph, Text } = Typography;
import { bindActionCreators } from "redux";
import { createPost } from "Redux/discussions";
import colors from "Styles/colors";

import NewPostForm from "./NewPostForm";

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class Thread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initLoading: true,
      loading: false,
      count: 25,
      posts: [],
      thread: null,
      selectedPost: null,
      isLoading: true,
      error: null,
      page: 1,
      ModalContent: "Customize your experience",
      visible: false,
      confirmLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ thread: this.props.thread });
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

    form.threadID = this.state.thread.id;
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

  viewThread = () => {
    const { match, location, history } = this.props;
    console.log(match, location, history);
    this.props.history.push(`/discuss/threads/${this.state.thread.id}`);
  };

  render() {
    let { thread, classes } = this.props;
    const {
      initLoading,
      loading,
      visible,
      confirmLoading,
      ModalContent,
    } = this.state;

    const { description, title, body, id } = thread;

    return (
      <li className={classes.thread} key={thread.id}>
        <NewPostForm
          wrappedComponentRef={this.saveFormRef}
          wrapClassName={classes.modal}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          confirmLoading={confirmLoading}
        />

        <div className={classes.threadHeader}>
          <span className={classes.threadContent}>
            <span className={classes.threadTitle}>{thread.title}</span>
            <span className={classes.threadDesc}>{thread.description}</span>
          </span>
          <span className={classes.userCaption}>
            <span className={classes.threadBy}>Posted by </span>
            <span className={classes.threadUser}>{thread.user}</span>
            <span className={classes.threadAge}>
              {thread.since_posted} minutes ago
            </span>
          </span>
          <span className={classes.threadActions}>
            <Button
              size="small"
              className={`${classes.btn} ${classes.threadAction} ${classes.viewThreadBtn}`}
              onClick={this.viewThread}
            >
              View
            </Button>
            <Button
              size="small"
              className={`${classes.btn} ${classes.threadAction} ${classes.commentThreadBtn}`}
              onClick={this.showModal}
            >
              Reply
            </Button>
          </span>
        </div>
      </li>
    );
  }
}

const threadStyles = {
  thread: {
    background: colors.secondaryDark,
    padding: [8, 13, 8, 13],
    border: `0.2px solid ${colors.silver2}`,
  },
  threadHeader: {
    display: "grid",
    gridTemplateAreas: '"title" "desc" "caption" "actions"',
    // gridTemplateRows: 'auto 1fr',
    // gridTemplateColumns: '1fr 1fr',
    // '@media (max-width: 860px)': {
    //   gridTemplateRows: 'auto 1fr',
    //   gridTemplateAreas: '"header" "content"',
    // },
    //
    // '@media (min-width: 860px)': {
    //   gridTemplateColumns: '1fr 1fr',
    //   gridTemplateAreas: '"header content"',
    // },
  },
  userCaption: {
    gridArea: "caption",
    color: colors.midTone,
    fontSize: 12,
  },
  threadContent: {
    // gridArea: "title",
  },
  threadTitle: {
    gridArea: "title",

    fontSize: "15px !important",
    lineHeight: "1em !important",
    fontWeight: "500 !important",
    letterSpacing: ".05em !important",
    color: colors.white,
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 20,
    width: "90vw",
    whiteSpace: "nowrap",
    display: "block",
    // '@media (max-width: 408px)': {
    //   maxWidth: '45ch',
    //
    // },
    // '@media (min-width: 408px)': {
    //   maxWidth: '70ch',
    //
    // },
  },

  threadDesc: {
    gridArea: "desc",
    fontSize: "14px !important",
    fontWeight: "100 !important",
    letterSpacing: ".05em !important",
    color: colors.silver8,
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "90vw",
    whiteSpace: "nowrap",
    display: "block",
    // '@media (max-width: 408px)': {
    //   maxWidth: '45ch',
    //
    // },
    // '@media (min-width: 408px)': {
    //   maxWidth: '70ch',
    //
    // },
  },
  threadActions: {
    gridArea: 'actions',
  },
  // threadAction: {
  // },
  // viewThreadBtn: {
  //   gridColumn: '1/2',
  // },
  // commentThreadBtn: {
  //   gridColumn: '2/3',
  // },
  btn: {
    background: colors.antBlue,
    marginRight: 10,
    color: colors.white,
    width: 43,
    paddingLeft: '2px !important',
    height: 22,
    // '@media (max-width: 408px)': {
    //   height: '2em !important',
    //   // width: '30vw !important',
    // },
    // '@media (min-width: 408px)': {
    //   height: '2em !important',
    //   // width: '30vw !important',
    // },
  },
};
// whatever is returned will show up as props inside Discuss
const mapStateToProps = (state, ownProps) => {
  return {
    threads: state.threads,
  };
};

// anything returned from here will end up as props on DiscussContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ selectThread: null }, dispatch);
};

export default connect(
  mapStateToProps,
  null
)(injectSheet(threadStyles)(withRouter(Thread)));
