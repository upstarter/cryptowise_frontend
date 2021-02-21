import React from "react";
import ReactDOM from "react-dom";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import { api_url, url } from "Utils/consts";
import {
  List,
  Avatar,
  Image,
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
import { createProposal } from "Redux/tokens";
import colors from "Styles/colors";
import Cookies from "universal-cookie";
import setAuthToken from "Services/auth/setAuthToken";

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class TokenDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { token, classes } = this.props;
    const { children, description, name, symbol, id } = token;

    return (
      <div className={classes.token}>
        <div className={classes.tokenDescription}>{description}</div>
        <div className={classes.tokenDetails}>
          <div className={classes.tokenUrl}>
            <Button href={`${url}/tokens/${id}`} type="secondary">
              View {symbol}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const tokenDetailStyles = {
  token: {},
  tokenDescription: {
    color: colors.silver8,
  },
  tokenDetails: {},
};

TokenDetail = injectSheet(tokenDetailStyles)(TokenDetail);

class TokensContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    token: null,
    data: [],
    list: [],
    page: 1,
    ModalContent: "Customize your experience",
    visible: false,
    confirmLoading: false,
  };

  componentDidMount() {
    this.getData((res) => {
      res.data[0].children = res.data[1];
      this.setState({
        initLoading: false,
        data: res.data,
        list: res.data,
        page: this.state.page + 1,
      });
    });
  }

  getData = (callback) => {
    const url = `${api_url}/tokens?per_page=${count}&page=${this.state.page}`;
    const data = {
      withCredentials: true,
      credentials: "include",
    };

    const cookies = new Cookies();
    const accessToken = cookies.get("_cw_acc");
    setAuthToken(accessToken); // set token in requests

    axios.get(url, data).then((res) => {
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
      this.props.dispatch(createToken(values));
    });
    form.resetFields();
    this.setState({ visible: false, confirmLoading: false });
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  titleize = (token) => {
    token.replace("ww*g", (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    this.setState({ token: token });
  };

  tokenDescription = (token) => {
    return <TokenDetail token={token} />;
  };

  tokenTitle = (token, classes) => {
    return (
      <div>
        <a className={classes.tokenName} href={`/tokens/${token.id}`}>
          {token.name}
        </a>
      </div>
    );
  };

  avatar = (token, classes) => {
    console.log(token.symbol.toLowerCase())
    let imgUrl = `./crypto-logos/${token.symbol.toLowerCase()}.png`
    const tokenImg = (
      <Image
        src={imgUrl}
        width={'1000px'}
      />
    );

    console.log(tokenImg)
    return <Avatar size="large" src={tokenImg} icon="team" />
  };

  render() {
    let { classes, token } = this.props;
    // token = token.split(" ").map((txt) => {
    //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
    // })
    const {
      initLoading,
      loading,
      list,
      visible,
      confirmLoading,
      ModalContent,
    } = this.state;
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
      <div className="dark-wrap">
        <React.Fragment>
          <ScrollToTopOnMount />

          <section id="token" className={classes.tokens}>
            <div id="token-items" className={classes.tokenItems}>
              <div className={classes.tokenColumn}>
                <List
                  className="item-list"
                  loading={initLoading}
                  itemLayout="horizontal"
                  loadMore={loadMore}
                  dataSource={list}
                  renderItem={(item) => (
                    // <List.Item actions={[<a>more</a>]}>
                    <List.Item>
                      <Skeleton
                        avatar
                        title={false}
                        loading={item.loading}
                        active
                      >
                        <List.Item.Meta
                          id="list-item-meta"
                          avatar={this.avatar(item, classes)}
                          title={this.tokenTitle(item, classes)}
                          description={this.tokenDescription(item)}
                        />
                        {
                          // <div id="meta-details">
                          //   <p className='item-name'>{item.name}</p>
                          //   <p className='item-description'>{item.description}</p>
                          // </div>
                        }
                      </Skeleton>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </section>
        </React.Fragment>
      </div>
    );
  }
}

const tokenStyles = {
  tokens: {
    marginTop: 60,
    maxWidth: 600,
    margin: "0 auto",
  },
  tokenName: {},
  tokenItems: {
    "& .item-list": {
      color: `${colors.offWhite} !important`,
      "& .ant-list-items": {
        boxShadow: "-6px 6px 2px -3px  rgba(100,100,100,.1)",
        // background: `${colors.secondaryDark}`,
        border: `1px solid ${colors.darkerDarkBlack}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyItems: "space-around",

        "& .ant-list-item": {
          background: colors.primaryDark,
          padding: 20,
        },

        "& .ant-list-item-meta-description": {
          maxWidth: "60ch",
        },

        "& .ant-list-item-meta-title": {
          "& a": { color: `${colors.darkYellow}` },
          "&:hover": {
            cursor: "select",
            color: "",
            textDecoration: "underline",
          },
        },

        "& .ant-list-item-meta-avatar": {},
      },
    },
  },
};

export default connect(null, null)(injectSheet(tokenStyles)(TokensContainer));
