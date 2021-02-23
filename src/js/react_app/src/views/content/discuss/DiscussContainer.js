import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "Config/axios";
import Thread from "Content/discuss/Thread";
import { createThread } from "Redux/discussions";
import colors from "Styles/colors";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import NewThreadForm from "./NewThreadForm";
import NewPostForm from "./NewPostForm";
import PostsContainer from "./PostsContainer";
import {
  List,
  Avatar,
  Button,
  Skeleton,
  Affix,
  Rate,
  Typography,
  Divider,
  Modal,
} from "antd";
import { api_url, url } from "Utils/consts";
import { CommentOutlined, PlusOutlined } from "@ant-design/icons";

class DiscussContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      count: 25,
      threads: [],
      selectedThread: null,
      topicID: this.props.match.params.topicID,
      isLoading: true,
      error: null,
      page: 1,
      ModalContent: "Customize your experience",
      visible: false,
      confirmLoading: false,
    };
  }

  componentDidMount() {
    this.getData((res) => {
      console.log("DDD", res);

      this.setState({
        initLoading: false,
        threads: res.data.threads,
        topicName: res.data.topic.name,
        page: this.state.page + 1,
      });
    });
  }

  getData = (callback) => {
    let { match } = this.props;
    const url = `${api_url}${match.url}?per_page=${this.state.count}&page=${this.state.page}`;
    axios.get(url).then((res) => {
      callback(res.data);
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      ),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.data);
      const page = this.state.page + 1;

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
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

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
    form.topicID = this.state.topicID;
    // form.userID = this.state.userID


    this.props.dispatch(createThread(form))


    form.resetFields();

    console.log('props', this.props)
    this.setState({
      visible: false,
      confirmLoading: false,
      // threads: [this.props.discussions.thread, ...this.state.threads]
    })

  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  componentWillReceiveProps(nextProps){
    console.log('willRE', nextProps)
      this.setState({
          threads: [nextProps.discussions.thread, ...this.state.threads],
      })
    }

  render() {
    let { classes } = this.props;
    const {
      topicName,
      threads,
      initLoading,
      loading,
      visible,
      confirmLoading,
      ModalContent,
    } = this.state;
    if (threads.length < 1) {
      return (
        <React.Fragment>
          <ScrollToTopOnMount />
          <NewThreadForm
            wrappedComponentRef={this.saveFormRef}
            wrapClassName={classes.modal}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            confirmLoading={confirmLoading}
          />

          <div id="thread-items" className={classes.threads}>
            <div className={classes.threadsHeader}>
            <Button
              className={classes.newThreadButton}
              type="primary"
              onClick={this.showModal}
              icon={<PlusOutlined />}
              size="medium"
            >
              New Thread
            </Button>
              <h2 className={(classes.pageTitle)}>
                <span>Discuss</span> {topicName}{" "}
              </h2>
            </div>
          </div>
          <section id="topic-threads" className={classes.threadSection}>
            <h1>No Threads Yet.. Be the first to discuss {topicName}</h1>
          </section>
        </React.Fragment>
      );
    }

    const loadMore =
      !initLoading && !loading ? (
        <div
          id="load-more-button"
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={this.onLoadMore}>Load More</Button>
        </div>
      ) : null;

    return (
      <React.Fragment>
        <ScrollToTopOnMount />

        <section id="topic-threads" className={classes.threadSection}>
          <NewThreadForm
            wrappedComponentRef={this.saveFormRef}
            wrapClassName={classes.modal}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            confirmLoading={confirmLoading}
          />

          <div id="thread-items" className={classes.threads}>
            <div className={classes.threadsHeader}>
              <h2 className={classes.pageTitle}>
                <span>Discuss</span> {topicName}
              </h2>
              <Button
                className={classes.newThreadButton}
                type="primary"
                onClick={this.showModal}
                icon={<PlusOutlined />}
                size="medium"
              >
                New Thread
              </Button>
            </div>
            <div className={classes.threadMain}>
              <ul className={classes.threadList}>
                {threads.map((thread) => {
                  return <Thread key={thread.id} thread={thread} />;
                })}
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const threadListStyles = {


  threadsHeader: {
    display: "grid",
    alignItems: "center",
    alignContent: 'center',
    minHeight: 40,
    zIndex: 10,
    color: "#fff !important",
    background: `${colors.primary}`,
    "-webkit-perspective": 1000,
    "-webkit-backface-visibility": "hidden",

    "@media (max-width: 860px)": {},
    "@media (min-width: 860px)": {},
  },
  pageTitle: {
    alignContent: 'center',
    padding: [13,0,0,13],
  },
  threadAction: {


  },
  newThreadButton: {
    gridColumn: "3",
    gridRow: "1 / 3",
    justifySelf: "end",
    margin: [0, 13, 0, 0],
    height: "1.93em",
    backgroundColor: `${colors.antBlue}`,
    color: `${colors.midTone}`,
    textAlign: "center",
    cursor: "pointer",
    zIndex: 10,
    border: "none",
    boxShadow: `0 0 0 0 ${colors.antBlue}`,
  },
  threads: {
    userSelect: "none",
    margin: "0 auto",
    marginTop: 80,
  },
  thredItems: {
  },
  threadSection: {},
  modal: {
    // background: `${colors.secondaryDark}`,
    filter: "invert(0)",
    "& .ant-modal-content": {
      color: "red !important",
      textDecoration: "none !important",
    },
  },

  threadMain: {},
  threadList: {
    listStyleType: "none",

    "@media (max-width: 860px)": {},
    "@media (min-width: 860px)": {},
  },
  threadDetail: {},
  threadTitle: {
    "& a": {
      color: colors.offWhite2,
    },
  },
};
// whatever is returned will show up as props inside Discuss

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  let {thread} = state.discussions
  return {
    discussions: state.discussions,
  };
};

// anything returned from here will end up as props on DiscussContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch) => {
  createThread: threadData => dispatch(createThread(threadData))
}

// connect takes a function and component and produces a container that is aware
// of state contained by redux
// promote Discuss to Container
export default connect(
  mapStateToProps,
  null
)(injectSheet(threadListStyles)(DiscussContainer));
