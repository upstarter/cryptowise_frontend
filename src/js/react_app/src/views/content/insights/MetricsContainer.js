import React from "react";
import ReactDOM from "react-dom";
import injectSheet, { jss } from "react-jss";
import ScrollToTopOnMount from "Utils/ScrollToTopOnMount";
import { api_url, url } from "Utils/consts";
import { TeamOutlined } from "@ant-design/icons";
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
  SparklinesReferenceLine,
} from "react-sparklines";
import Chart from "react-google-charts";

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class MetricDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
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

  render() {
    let { metric, data, classes } = this.props;
    let { daily_market_history } = metric;
    let { token_info } = metric;
    if (daily_market_history[0] == undefined) return null;
    let dmh;

    if (daily_market_history && daily_market_history.length > 0) {
      const d = daily_market_history[0];
      dmh = (
        <>
        <div>
          {metric.market_cap_usd}
        </div>
        <div style={{ color: "#eee" }}>
          {metric.title} {d.high} {d.low} {d.close} {d.open}
        </div>
        </>
      );
    } else {
      dmh = <div>No results</div>;
    }
    console.log("dmh", metric);
    return (
      <div className={classes.metric}>
        <div className={classes.metricDetails}>
          <div className={classes.metricGrid}>
            <div className={classes.metricBody}>
              <div className={classes.metricID}>
                <div className={`${classes.symbol} ${classes.gridMetric}`}>Symbol: {token_info.symbol}</div>
                <div className={`${classes.platform} ${classes.gridMetric}`}>Platform: {token_info.platform_name || "N/A"}</div>
              </div>

              <div className={classes.metricPriceVol}>
                <div className={`${classes.price} ${classes.gridMetric}`}>Price: {token_info.usd_price}</div>
                <div className={`${classes.volume_24h} ${classes.gridMetric}`}>24h Volume: {token_info.volume_24h}</div>
                <div className={`${classes.volume_7d} ${classes.gridMetric}`}>7d Volume: {token_info.volume_7d}</div>
              </div>

              <div className={classes.metricsChange}>
                <div className={`${classes.percent_change_24h} ${classes.gridMetric}`}>24h % Change: {token_info.percent_change_24h}</div>
                <div className={`${classes.percent_change_7d} ${classes.gridMetric}`}>7d % Change: {token_info.percent_change_7d}</div>
                <div className={`${classes.percent_change_30d} ${classes.gridMetric}`}>30d % Change: {token_info.percent_change_30d}</div>
              </div>

              <div className={classes.supply}>
                <div className={`${classes.total_supply} ${classes.gridMetric}`}>Total Supply: {token_info.total_supply}</div>
                <div className={`${classes.max_supply} ${classes.gridMetric}`}>Max Supply: {token_info.max_supply}</div>
              </div>
            </div>
          </div>
          <div className={classes.metricFooter}>
            <div className={classes.metricActions}></div>
          </div>
        </div>
      </div>
    );
  }
}

const metricDetailStyles = {
  metric: {
    width: '100% !important',
    margin: '0 auto',

  },
  metricGrid: {
    display: "flex",
    flexDirection: 'row',

  },
  gridMetric: {
    padding: 8,
    textShadow: `1px 1px 13px ${colors.lightBlack}`,
  },
  metricID: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    justifyContent: 'center',
    color: colors.smoke8,
  },
  metricBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: 5,
    background: colors.silver2,
  },
  metricPriceVol: {
    display: 'flex',
  },
  metricsChange: {
    display: 'flex',
  },
  supply: {
    display: 'flex',
  },
  name: {
    gridArea: "name",
  },
  symbol: {
    gridArea: "symbol",
  },
  platform: {
    gridArea: "pfname",
  },
  price: {
    gridArea: "price",
  },
  volume_24h: {
    gridArea: "volume_24h",
  },
  volume_7d: {
    gridArea: "volume_7d",
  },
  percent_change_24h: {
    gridArea: "percent_change_24h",
  },
  percent_change_7d: {
    gridArea: "percent_change_7d",
  },
  percent_change_30d: {
    gridArea: "percent_change_30d",
  },
  total_supply: {
    gridArea: "total_supply",
  },
  max_supply: {
    gridArea: "max_supply",
  },
  chartBlock: {
    padding: [13, 2, 13, 2],
  },
  metricDetail: {
    justifySelf: 'start'
  },
  metricDetails: {
    margin: "0 auto",
  },
  metricDescription: {
    color: colors.silver8,
    padding: [3, 0, 13, 0],
  },
  itemFooter: {
    display: "grid",
    gridTemplateAreas: `'actions'`,
    gridTemplateColumns: `1fr`,
    alignItems: "center",
    alignContent: "center",
    padding: [10, 0, 0, 0],
  },

  metricActions: {
    gridArea: "actions",
  },
  sparkLines: {
    display: "grid",
    gridTemplateAreas: `'spark1 spark2'`,
  },
  sparkLine: {
    width: "50%",
    height: "100px",
  },
  sparkLine1: {
    gridArea: "spark1",
  },
  sparkLine2: {
    gridArea: "spark2",
  },
  actionButton: {
    margin: [10, 5, 0, 0],
  },


};

MetricDetail = injectSheet(metricDetailStyles)(MetricDetail);

class MetricsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: false,
      loading: false,
      metric: null,
      data: [],
      page: 1,
      ModalContent: "Customize your experience",
      visible: false,
      confirmLoading: false,
    };
  }

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

    axios.get(url).then((res) => {
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

  titleize = (metric) => {
    metric.replace("ww*g", (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    this.setState({ metric: metric });
  };

  metricTitle = (metric, classes) => {
    return (
      <div className={classes.cardHeader}>
        <a className={classes.metricName} href={`/metrics`}>
          {metric.token_info.name}
        </a>

        {this.avatar(metric, classes)}

      </div>
    );
  };

  avatar = (metric, classes) => {
    console.log('METRic', metric)
    let imgUrl = require(`Images/crypto-logos/${metric.symbol.toLowerCase()}.png`);
    //
    const metricImg = <Image src={imgUrl} className={classes.img} />;

    return <Avatar className={classes.avatar} size="small" src={metricImg} icon={<TeamOutlined />} />;
  };

  metricDescription = (metric, data) => {
    return <MetricDetail metric={metric} data={data} />;
  };

  render() {
    let { classes, metric } = this.props;
    // metric = metric.split(" ").map((txt) => {
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

          <section id="stat" className={classes.metrics}>
            <h1 style={{ color: "#eee" }} className={classes.mainHead}>
              {metric}
            </h1>
            <div id="metric-items" className={classes.metricItems}>
              <div className={classes.metricColumn}>
                <List
                  className="item-list"
                  loading={initLoading}
                  itemLayout="vertical"
                  loadMore={loadMore}
                  dataSource={data.filter((m) => {return m.daily_market_history.length > 0})}
                  renderItem={(item) => (
                    <>
                      <List.Item
                        className={classes.metricListItem}
                        actions={[<a>More</a>, <a>Discuss</a>]}
                        >
                        <Skeleton
                          avatar
                          title={false}
                          loading={item.loading}
                          active
                        >
                          <List.Item.Meta
                            id="list-item-meta"
                            title={this.metricTitle(item, classes)}
                            description={this.metricDescription(item, data)}
                          />
                          {
                            // <div id="meta-details">
                            //   <p className='item-name'>{item.name}</p>
                            //   <p className='item-description'>{item.description}</p>
                            // </div>
                          }
                        </Skeleton>
                      </List.Item>
                    </>
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

const metricStyles = {
  metrics: {
    marginTop: 50,
    maxWidth: 800,
    margin: "0 auto",
  },
  metricListItem: {
  },
  cardHeader: {
    display: "grid",
    gridTemplateAreas: `'image title'`,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    gridArea: "image",
    borderRadius: 50,
  },
  mainHead: {
    margin: [0, 0, 30, 0],
    marginTop: "10px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "5rem",
    color: "#eee",
    "@media (max-width: 408px)": {},
    "@media (min-width: 408px)": {},
  },
  metricDetails: {},
  metricName: {
    gridArea: "title",
    fontSize: '2.4rem',
    marginLeft: 8,
    textShadow: `1px 1px 13px ${colors.smoke8}`,
  },
  avatar: {
  },
  metricItems: {
    marginTop: "4em",
  },
};

export default connect(null, null)(injectSheet(metricStyles)(MetricsContainer));
