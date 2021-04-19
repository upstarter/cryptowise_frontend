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
  SparklinesBars,
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

  renderCharts = ({token_info}) => {
    let header = [["Day", "% Change 30d"]];
    let date = new Date();
    let vals = [
      token_info.volume_24h,
      token_info.volume_7d,
      token_info.percent_change_24h,
      token_info.percent_change_7d,
      token_info.percent_change_30d
    ]
    let rows = header.concat(vals.map((val) => {
      let row = [
        date.toDateString(),
        parseInt(val),
      ];
      return row
    }))
    console.log('rows', rows)
    let charts = rows.map((c) => this.renderChart(c))
    return charts
  };

  renderChart = (chartData) => {
    return (
        <Chart
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          height: "200px",
          width: "205px",
          legend: "none",
          legend: {
            position: "top",
            maxLines: 3,
          },
          vAxis: {
            logScale: true,
            viewWindow: {
              max: 20,
              min: -20,
            },
          },
          // bar: { groupWidth: '100%' }, // Remove space between bars.
          // candlestick: {
          // fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          // risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
          // },
          // minColor: '#f00',
          // midColor: '#eee',
          // backgroundColor: '#eee',
          // maxColor: '#0d0',
          headerHeight: 30,
          // fontColor: 'black',
          // axisTitlesPosition: 'none',
          fontSize: 12,
          // showScale: true,
          generateTooltip: (row, size, value) => {
            this.showFullTooltip(row, size, value);
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    )
  };
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
          <div>{metric.market_cap_usd}</div>
          <div style={{ color: "#eee" }}>
            {metric.title} {d.high} {d.low} {d.close} {d.open}
          </div>
        </>
      );
    } else {
      dmh = <div>No results</div>;
    }
    return (
      <div className={classes.metric}>
        <div className={classes.metricDetails}>
          <div className={classes.metricGrid}>
            <div className={`${classes.symbol} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Symbol: </span>
              <span className={classes.metricValue}>{token_info.symbol}</span>
            </div>
            <div className={`${classes.price} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Price: </span>
              <span className={classes.metricValue}>
                {token_info.usd_price}
              </span>
            </div>
            <div className={`${classes.volume_24h} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>24h Volume: </span>
              <span className={classes.metricValue}>
                {token_info.volume_24h}
              </span>
            </div>
            <div className={`${classes.volume_7d} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>7d Volume: </span>
              <span className={classes.metricValue}>
                {token_info.volume_7d}
              </span>
            </div>
            <div
              className={`${classes.percent_change_24h} ${classes.gridMetric}`}
            >
              <span className={classes.metricLabel}>% Change 24h: </span>
              <span className={classes.metricValue}>
                {token_info.percent_change_24h}
              </span>
            </div>
            <div
              className={`${classes.percent_change_7d} ${classes.gridMetric}`}
            >
              <span className={classes.metricLabel}>% Change 7d: </span>
              <span className={classes.metricValue}>
                {token_info.percent_change_7d || "N/A"}
              </span>
            </div>
            <div
              className={`${classes.percent_change_30d} ${classes.gridMetric}`}
            >
              <span className={classes.metricLabel}>% Change 30d: </span>
              <span className={classes.metricValue}>
                {token_info.percent_change_30d || "N/A"}
              </span>
            </div>
            <div className={`${classes.platform} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Platform: </span>
              <span className={classes.metricValue}>
                {token_info.platform_name || "N/A"}
              </span>
            </div>
            <div className={`${classes.total_supply} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Total Supply: </span>
              <span className={classes.metricValue}>
                {token_info.total_supply || "N/A"}
              </span>
            </div>
            <div className={`${classes.max_supply} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Max Supply: </span>
              <span className={classes.metricValue}>
                {token_info.max_supply || "N/A"}
              </span>
            </div>
          </div>
          <div className={classes.metricFooter}>
            <div className={classes.metricActions}></div>
          </div>
        </div>
        <div className={classes.metricCharts}>
          <div className={classes.chartBlock}>
          {
            this.renderCharts(metric)
          }
          </div>
        </div>
      </div>
    );
  }
}

// <div className={classes.sparkLines}>
//   <Sparklines
//     className={`${classes.sparkLine} ${classes.sparkLine1}`}
//     data={this.chartData(metric).slice(1)}
//   >
//     <SparklinesBars color="#eee" />
//   </Sparklines>
//
// </div>

const metricDetailStyles = {
  metric: {
    width: "100%",
    margin: "0 auto",
  },
  metricGrid: {
    display: "grid",
    gridTemplateAreas: `
      "sym pct24h tsupply"
      "price pct7d msupply"
      "platform pct30d msupply"
      "platform v24h msupply"
      "platform v7d msupply"
    `,
    justifyItems: "space-between",
    width: "100%",
    borderRadius: 8,
    border: "none",
    background: colors.smoke2,
    boxShadow: `inset 0 0 13px 0px ${colors.silver2},
                0 0 13px 0px ${colors.silver4}`,
    padding: 13,
  },
  gridMetric: {
    color: colors.smoke8,
    padding: 5,
  },
  metricGroup: {
    padding: 8,
    justifySelf: "center",
  },
  metricHead: {
    gridArea: "metricHead",
    justifyItems: "center",
    justifyContent: "center",
    color: colors.smoke8,
  },
  metricsBody: {
    gridArea: "metricsBody",
  },
  metricPriceVol: {},
  metricsBody: {},
  metricExtra: {
    gridArea: "metricExtra",
  },
  metricLabel: {
    color: colors.smoke8,
  },
  metricValue: {
    color: colors.spotifyGreen,
  },
  name: {
    gridArea: "name",
  },
  symbol: {
    gridArea: "sym",
  },
  platform: {
    gridArea: "platform",
  },
  price: {
    gridArea: "price",
  },
  volume_24h: {
    gridArea: "v24h",
  },
  volume_7d: {
    gridArea: "v7d",
  },
  percent_change_24h: {
    gridArea: "pct24h",
  },
  percent_change_7d: {
    gridArea: "pct7d",
  },
  percent_change_30d: {
    gridArea: "pct30d",
  },
  total_supply: {
    gridArea: "tsupply",
  },
  max_supply: {
    gridArea: "msupply",
  },
  chartBlock: {
    padding: [13, 2, 13, 2],
  },
  metricDetail: {
    justifySelf: "start",
  },
  metricDetails: {
    margin: "0 auto",
  },
  metricDescription: {
    color: colors.smoke,
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
    gridTemplateAreas: `'spark1 spark2 spark3'`,
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  sparkLine: {
    margin: 50,
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
    console.log("METRic", metric);
    let imgUrl = require(`Images/crypto-logos/${metric.symbol.toLowerCase()}.png`);
    //
    const metricImg = <Image src={imgUrl} className={classes.img} />;

    return (
      <Avatar
        className={classes.avatar}
        size="small"
        src={metricImg}
        icon={<TeamOutlined />}
      />
    );
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
                  dataSource={data.filter((m) => {
                    return m.daily_market_history.length > 0;
                  })}
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
  metricListItem: {},
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
    fontSize: "2.4rem",
    marginLeft: 8,
    textShadow: `1px 1px 13px ${colors.smoke8}`,
  },
  avatar: {},
  metricItems: {
    marginTop: "4em",
  },
};

export default connect(null, null)(injectSheet(metricStyles)(MetricsContainer));
