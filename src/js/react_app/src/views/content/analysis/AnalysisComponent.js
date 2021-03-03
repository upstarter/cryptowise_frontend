import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "Config/axios";
import Token from "Content/discuss/Token";
import { createToken } from "Redux/analysis";
import colors from "Styles/colors";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import { api_url, url } from "Utils/consts";
import { CommentOutlined, PlusOutlined } from "@ant-design/icons";

class DiscussComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      count: 25,
      tokens: [],
      selectedToken: null,
      isLoading: true,
      error: null,
      page: 1,
      visible: false,
      confirmLoading: false,
    };
  }

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        tokens: res.data.tokens,
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


  render() {
    let { classes } = this.props;
    const {
      tokenName,
      tokens,
      initLoading,
      loading,
      visible,
      confirmLoading,
    } = this.state;
    if (tokens.length < 1) {
      return (
        <React.Fragment>
          <ScrollToTopOnMount />
          <section id="topic-tokens" className={classes.tokenSection}>
            <div id="token-items" className={classes.tokens}>
              <div className={classes.tokensHeader}>
              <Button
                className={classes.moreInfoBtn}
                type="primary"
                onClick={this.showModal}
                icon={<PlusOutlined />}
                size="large"
              >
                More Info
              </Button>
                <h2 className={(classes.pageTitle)}>
                  <span>Analyze</span> {tokenName}{" "}
                </h2>
              </div>
            </div>
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

        <section id="topic-tokens" className={classes.tokenSection}>
          <NewTokenForm
            wrappedComponentRef={this.saveFormRef}
            wrapClassName={classes.modal}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            confirmLoading={confirmLoading}
          />

          <div id="token-items" className={classes.tokens}>
            <div className={classes.tokensHeader}>
              <h2 className={classes.pageTitle}>
                <span>Discuss</span> {tokenName}
              </h2>

              <Button
                className={`${classes.newTokenButton} ${classes.btn}`}
                type="primary"
                onClick={this.showModal}
                icon={<PlusOutlined />}
                size="large"
              >
                Create Token
              </Button>
            </div>
            <div className={classes.tokenMain}>
              <ul className={classes.tokenList}>
                {tokens.map((token) => {
                  return <Token key={token.id} token={token} />;
                })}
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const tokenListStyles = {
  tokensHeader: {
    display: "grid",
    alignItems: "center",
    alignContent: 'center',
    minHeight: 50,
    zIndex: 10,
    color: "#fff !important",
    background: `${colors.primary}`,
    "-webkit-perspective": 1000,
    "-webkit-backface-visibility": "hidden",
  },
  pageTitle: {
    alignContent: 'center',
    padding: [13,0,0,13],
  },
  btn: {
    backgroundColor: `${colors.link}`,
    cursor: "pointer",
    boxShadow: `0 0 0 0 ${colors.link}`,
  },
  moreInfoBtn: {
    gridColumn: "3",
    gridRow: "1 / 3",
    justifySelf: "end",
    margin: [0, 13, 0, 0],
  },
  tokens: {
    userSelect: "none",
    margin: "0 auto",
  },
  tokenItems: {
  },
  tokenSection: {
    margin: '70px auto',
    maxWidth: '96vw',
  },
  tokenMain: {},
  tokenList: {
    listStyleType: "none",
    "@media (max-width: 860px)": {},
    "@media (min-width: 860px)": {},
  },
  tokenDetail: {},
  tokenTitle: {
    "& a": {
      color: colors.offWhite2,
    },
  },
};
// whatever is returned will show up as props inside Discuss

const mapStateToProps = (state, ownProps) => {
  let {token} = state.analysis
  return {
    analysis: state.analysis,
  };
};

// anything returned from here will end up as props on DiscussComponent
// whenever selectPost is called the result should be passed to all reducers
const mapDispatchToProps = (dispatch) => {
  createToken: tokenData => dispatch(createToken(tokenData))
}

// connect takes a function and component and produces a container that is aware
// of state contained by redux
// promote Discuss to Container
export default connect(
  mapStateToProps,
  null
)(injectSheet(tokenListStyles)(DiscussComponent));
