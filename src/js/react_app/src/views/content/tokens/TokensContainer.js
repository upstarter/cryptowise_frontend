import React from "react";
import ReactDOM from "react-dom";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import { api_url, url } from "Utils/consts";
import { TeamOutlined } from '@ant-design/icons';
import {
List,
Avatar,
Image,
Button,
Skeleton,
Affix,
Rate,
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
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import Chart from "react-google-charts";

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class TokenDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  render() {
    let { token, data, classes } = this.props;
    const { children, description, name, symbol, id } = token;
    console.log('dat', data)
    return (
      <div className={classes.token}>
        <div className={classes.tokenDetails}>
          <div className={classes.chartBlock}>
            <Chart
              height="280px"
              width="100%"
              chartType="CandlestickChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['day', 'a', 'b', 'c', 'd'],
                ['Mon', 20, 28, 38, 45],
                ['Tue', 31, 38, 55, 66],
                ['Wed', 50, 55, 77, 80],
                ['Thu', 77, 77, 66, 50],
                ['Fri', 68, 66, 22, 15],
              ]}
              options={{
                legend: 'none',
                // bar: { groupWidth: '100%' }, // Remove space between bars.
                candlestick: {
                fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
                risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
                },
                minColor: '#f00',
                midColor: '#eee',
                backgroundColor: '#eee',
                maxColor: '#0d0',
                headerHeight: 30,
                fontColor: 'black',
                axisTitlesPosition: 'none',
                fontSize: 12,
                showScale: true,
                generateTooltip: (row, size, value) => {
                  this.showFullTooltip(row, size, value)
                },
              }}
              rootProps={{ 'data-testid': '1' }}

            />
          </div>
          <div className={classes.itemFooter}>
            <div className={classes.tokenActions}>
              <Button className={classes.actionButton} href={`${url}/tokens/${id}`} type="secondary">
                View {symbol}
              </Button>
              <Button className={classes.actionButton} href={`${url}/discuss/tokens/${id}`} type="secondary">
                Discuss {symbol}
              </Button>
            </div>
          </div>
         </div>
      </div>
    );
  }
}

// <div className={classes.sparkLines}>
//   <Sparklines
//     className={`${classes.sparkLine} ${classes.sparkLine1}`}
//     data={
//       [ 20, 28, 38, 45]
//     }
//   >
//     <SparklinesLine color="#eee" />
//     <SparklinesReferenceLine type="avg" />
//   </Sparklines>
//   <Sparklines
//     className={`${classes.sparkLine} ${classes.sparkLine2}`}
//     data={
//       [ 20, 28, 38, 45]
//     }
//   >
//     <SparklinesLine color="#eee" />
//     <SparklinesReferenceLine type="avg" />
//   </Sparklines>
// </div>
const tokenDetailStyles = {
  chartBlock: {
    padding: [13,2,13,2],
  },
  itemFooter: {
    display: 'grid',
    gridTemplateAreas: `'actions'`,
    gridTemplateColumns: `1fr`,
    alignItems: 'center',
    alignContent: 'center',
    padding: [10,0,0,0],
  },
  token: {
  },
  tokenActions: {
    gridArea: "actions",
  },
  sparkLines: {
    display: 'grid',
    gridTemplateAreas: `'spark1 spark2'`,
  },
  sparkLine: {
    width: '50%',
    height: '100px'
  },
  sparkLine1: {
    gridArea: "spark1",
  },
  sparkLine2: {
    gridArea: "spark2",

  },
  actionButton: {
    margin: [10,5,0,0],

  },
  tokenDescription: {
    color: colors.silver8,
    padding: [3,0,13,0],
  },
  tokenDetails: {
    margin: '0 auto',
  },
};

TokenDetail = injectSheet(tokenDetailStyles)(TokenDetail);

class TokensContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    token: null,
    data: [],
    page: 1,
    ModalContent: "Customize your experience",
    visible: false,
    confirmLoading: false,
  };

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.data,
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
      data: this.state.data.concat(
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

  tokenTitle = (token, classes) => {
    return (
      <div className={classes.cardHeader}>
        <a className={classes.tokenName} href={`/tokens/${token.id}`}>
          {token.name}
        </a>
        {this.avatar(token, classes)}
      </div>
    );
  };

  avatar = (token, classes) => {
    let imgUrl = require(`Images/crypto-logos/${token.symbol.toLowerCase()}.png`)
    //
    const tokenImg = (
      <Image
        src={imgUrl}
        className={classes.img}
      />
    );

    return <Avatar size="small" src={tokenImg} icon={<TeamOutlined />} />;
  };

  tokenDescription = (token, data) => {
    return <TokenDetail token={token} data={data} />;
  };

  render() {
    let { classes, token } = this.props;
    // token = token.split(" ").map((txt) => {
    //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
    // })
    const {
      initLoading,
      loading,
      data,
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
            <h1 className={classes.mainHead}>
              Explore & Analyze {token}
            </h1>
            <div id="token-items" className={classes.tokenItems}>
              <div className={classes.tokenColumn}>
                <List
                  className="item-list"
                  loading={initLoading}
                  itemLayout="horizontal"
                  loadMore={loadMore}
                  dataSource={data}
                  renderItem={(item) => (
                    // <List.Item actions={[<a>more</a>]}>
                    <List.Item className={classes.tokenListItem}>
                      <Skeleton
                        avatar
                        title={false}
                        loading={item.loading}
                        active
                      >
                        <List.Item.Meta
                          id="list-item-meta"
                          title={this.tokenTitle(item, classes)}
                          description={this.tokenDescription(item, data)}
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
    marginTop: 50,
    maxWidth: 600,
    margin: "0 auto",
  },
  tokenListItem: {
    marginTop: 55,
    padding: 13,
  },
  cardHeader: {
    display: 'grid',
    gridTemplateAreas: `'image title'`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    gridArea: 'image',
    borderRadius: 50,
  },
  mainHead: {
    margin: [0,0,30,0],
    marginTop: '10px !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5rem',
    color: '#eee',
    "@media (max-width: 408px)": {

    },
    "@media (min-width: 408px)": {},
  },
  tokenDetails: {

  },
  tokenName: {
    gridArea: "title",
    marginLeft: 8,
  },
  tokenItems: {
    marginTop: '4em'
  }
};

export default connect(null, null)(injectSheet(tokenStyles)(TokensContainer));
