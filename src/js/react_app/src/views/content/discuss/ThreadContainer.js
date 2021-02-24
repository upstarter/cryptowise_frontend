import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "Config/axios";
import { createPost } from "Redux/discussions";
import colors from "Styles/colors";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import NewPostForm from "./NewPostForm";
import PostsContainer from "./PostsContainer";
import Post from "./Post";
import { List, Avatar, Button, Skeleton, Affix, Rate, Typography, Divider, Modal } from "antd";
import { api_url, url } from "Utils/consts";
import { CommentOutlined, PlusOutlined } from '@ant-design/icons';

class ThreadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      count: 25,
      threadID: this.props.match.params.threadID,
      threadTitle: "",
      topicID: null,
      topicName: null,
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

  componentDidMount() {
    this.getData((res) => {
      console.log("DDD", res.data);
      this.setState({
        initLoading: false,
        topicName: res.data.topic.name,
        threadID: res.data.thread.id,
        threadTitle: res.data.thread.title,
        posts: res.data.posts,
        page: this.state.page + 1,
      });
    });
  }

  getData = (callback) => {
    let { match } = this.props;
    console.log("state", this.state);
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
    form.threadID = this.state.threadID;
    console.log("form", form);
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shoul', nextProps.discussions.post, this.state.posts)
    return nextProps.discussions.post != this.state.posts
  }
  componentWillReceiveProps(nextProps){
    console.log('willRE', nextProps.discussions.post)
    // if (!this.state.posts {
      this.setState({
          posts: [nextProps.discussions.post, ...this.state.posts],
      })
    // }
  }

  render() {
    let { classes } = this.props;
    const {
      posts,
      threadTitle,
      topicName,
      initLoading,
      loading,
      visible,
      confirmLoading,
      ModalContent,
    } = this.state;

    if (posts && posts.length < 0) {
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

          <div id="post-items" className={classes.posts}>
            <div className={classes.postsHeader}>
              <Button
                className="float"
                onClick={this.showModal}
                shape="circle"
                icon={<PlusOutlined />}
                size="large"
              />
              <h2 className={( classes.pageTitle)}>
                <span>Discuss</span> <span>{threadTitle}{" "}</span>
              </h2>
            </div>
          </div>
          <section id="post-posts" className={classes.postsSection}>
            <h1>No Posts Yet.. Be the first to discuss {threadTitle}</h1>
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
      <div className={classes.thread}>
        <React.Fragment>
          <ScrollToTopOnMount />

          <section id="topic-posts" className={classes.postSection}>
            <NewPostForm
              wrappedComponentRef={this.saveFormRef}
              wrapClassName={classes.modal}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
              confirmLoading={confirmLoading}
            />

            <div id="post-items" className={classes.posts}>
              <div className={classes.postsHeader}>

                <div className={classes.threadHead}>
                  <div className={classes.threadTitle}>
                    {threadTitle}
                  </div>
                </div>
                <div className={classes.threadActions}>
                  <Button
                    className={`${classes.newPostBtn} ${classes.btn}`}
                    onClick={this.showModal}
                    icon={<PlusOutlined />}
                    size="medium"
                  >
                    New Post
                  </Button>
                </div>
              </div>

              <div className={classes.postMain}>
                <ul className={classes.postList}>
                  {posts ? (
                    posts.map((post) => {
                      return <Post post={post} />;
                    })
                  ) : (
                    <>No Posts Yet. Be the first..</>
                  )}
                </ul>
              </div>
            </div>
          </section>
        </React.Fragment>
      </div>
    );
  }
}

const postListStyles = {
  threadHead: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    minHeight: 40,

  },
  threadTitle: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',

    padding: '1.8rem',
    color: colors.white,
    "& a": {
      color: colors.offWhite2,
    },
  },
  modal: {
    // background: `${colors.secondaryDark}`,
    filter: "invert(0)",
    "& .ant-modal-content": {
      color: "red !important",
      textDecoration: "none !important",
    },
  },
  posts: {
    userSelect: "none",
    marginTop: 65,
    margin: "0 auto",
  },
  postsHeader: {
    display: "grid",
    gridTemplateAreas: `'title newPost'`,
    alignItems: "center",
    alignContent: 'center',
    zIndex: 10,
    color: "#fff !important",
    background: `${colors.primary}`,
    "-webkit-perspective": 1000,
    "-webkit-backface-visibility": "hidden",

    "@media (max-width: 860px)": {},
    "@media (min-width: 860px)": {},
  },
  postMain: {},
  postListHeader: {
    display: 'flex',
    justifyContent: 'center',
  },

  postList: {
    listStyleType: "none",

    "@media (max-width: 860px)": {},
    "@media (min-width: 860px)": {},
  },
  postDetail: {},
  newPostBtn: {
    backgroundColor: `${colors.antBlue}`,
    color: `${colors.midTone}`,
    textAlign: "center",
    cursor: "pointer",
    zIndex: 10,
    border: "none",
    boxShadow: `0 0 0 0 ${colors.antBlue}`,
  },
  threadActions: {
    gridArea: "newPost",
    justifySelf: "end",
  },

  threadAction: {
    margin: '0 auto',
  },

  btn: {
    marginRight: 10,
    paddingLeft: '2px !important',

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
  console.log(state, ownProps)
  let {thread} = state.discussions
  return {
    discussions: state.discussions,
  };
};

// anything returned from here will end up as props on ThreadContainer
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ selectThread: null }, dispatch);
};

// connect takes a function and component and produces a container that is aware
// of state contained by redux
// promote Discuss to Container
export default connect(
  mapStateToProps,
  null
)(injectSheet(postListStyles)(ThreadContainer));
