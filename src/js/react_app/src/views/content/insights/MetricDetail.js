import React from "react";
import ReactDOM from "react-dom";
import injectSheet, { jss } from "react-jss";
import Chart from "react-google-charts";
import formatNumber from 'Utils/formatNumber'
import colors from "Styles/colors";

class MetricDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  renderCharts = ({token_info}) => {
    let header = [["Day", "Percent Change 30d"]];
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

  isNeg = (val) => {
    val < 0
  }
  render() {
    let { metric, data, classes } = this.props;
    let { daily_market_history } = metric;
    let { token_info } = metric;
    if (daily_market_history[0] == undefined) return null;
    let dmh;
    let pct24h = token_info.percent_change_24h
    let pct7d= token_info.percent_change_7d
    let pct30d = token_info.percent_change_30d
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
              <span className={classes.metricLabel}>Symbol </span>
              <span className={classes.metricValue}>{token_info.symbol}</span>
            </div>
            <div className={`${classes.price} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Price </span>
              <span className={classes.metricValue}>
                {formatNumber(token_info.usd_price)}
              </span>
            </div>
            <div className={`${classes.volume_24h} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>24h Volume </span>
              <span className={classes.metricValue}>
                {formatNumber(token_info.volume_24h)}
              </span>
            </div>
            <div className={`${classes.volume_7d} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>7d Volume </span>
              <span className={classes.metricValue}>
                {formatNumber(token_info.volume_7d)}
              </span>
            </div>
            <div
              className={`${classes.percent_change_24h} ${classes.gridMetric}`}
            >
              <span className={classes.metricLabel}>Percent Change 24h </span>
              <span className={`${classes.metricValue} ${pct24h < 0 ? classes.pctR : classes.pctG}`}>
                {formatNumber(token_info.percent_change_24h)}%
              </span>
            </div>
            <div
              className={`${classes.percent_change_7d} ${classes.gridMetric}`}
            >
              <span className={classes.metricLabel}>Percent Change 7d </span>
              <span className={`${classes.metricValue} ${pct7d < 0 ? classes.pctR : classes.pctG}`}>
                {formatNumber(token_info.percent_change_7d) + "%" || "N/A"}
              </span>
            </div>
            <div
              className={`${classes.percent_change_30d} ${classes.gridMetric}`}
            >
              <span className={classes.metricLabel}>Percent Change 30d </span>
              <span className={`${classes.metricValue} ${pct30d < 0 ? classes.pctR : classes.pctG}`}>
                {formatNumber(token_info.percent_change_30d) + "%" || "N/A"}
              </span>
            </div>
            <div className={`${classes.platform} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Platform </span>
              <span className={classes.metricValue}>
                {token_info.platform_name || "N/A"}
              </span>
            </div>
            <div className={`${classes.total_supply} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Total Supply </span>
              <span className={classes.metricValue}>
                {formatNumber(token_info.total_supply) || "N/A"}
              </span>
            </div>
            <div className={`${classes.max_supply} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Max Supply </span>
              <span className={classes.metricValue}>
                {formatNumber(token_info.max_supply) || "N/A"}
              </span>
            </div>
            <div className={`${classes.tags} ${classes.gridMetric}`}>
              <span className={classes.metricLabel}>Tags </span>
              {token_info.tags &&
                token_info.tags.map((t) =>
                { return <span className={classes.tag}>{t}, </span> }) }
            </div>
          </div>

          <div className={classes.metricFooter}>
            <div className={classes.metricActions}></div>
          </div>
        </div>
        {/*<div className={classes.metricCharts}>
          <div className={classes.chartBlock}>
          {
            this.renderCharts(metric)
          }
          </div>
        </div>
        */}
      </div>
    );
  }
}

const metricDetailStyles = {
  tags: {gridArea: "tags"},
  tag: {
    color: colors.smoke4
  },
  metric: {
    width: "100%",
    margin: "20px 0 20px 0",

  },

  metricGrid: {
    display: "grid",
    gridTemplateAreas: `
      "sym pct24h tsupply"
      "price v24h msupply"
      "platform pct7d msupply"
      "platform v7d msupply"
      "platform pct30d msupply"
      "tags tags tags"
    `,
    justifyItems: "space-between",
    width: "100%",
    borderRadius: 8,
    border: "none",
    background: colors.black,
    boxShadow: `inset 0 0 30px 10px ${colors.silver2},
                0 0 13px 10px ${colors.silver2}`,
    padding: 35,
  },
  gridMetric: {
    display: 'flex',
    flexDirection: 'column',
    color: colors.smoke8,
    justifyContent: "end",

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
    color: colors.silver,
    // textShadow: `-2px -2px 4px ${colors.silver8}`
  },
  metricValue: {
    color: colors.spotifyGreen,
    fontSize: '1.1em',
    fontWeight: '300',
    letterSpacing: '.1em',
    padding: 13,
  },
  name: {
    gridArea: "name",
  },
  symbol: {
    gridArea: "sym",
    fontSize: "2rem",
    lineHeight: "1em",
  },
  platform: {
    gridArea: "platform",
  },
  price: {
    gridArea: "price",
    fontSize: '1.7rem',
    lineHeight: "1em",
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
  pctR: {
    color: 'red',
  },
  pctG: {
    color: colors.spotifyGreen,
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

// <div className={classes.sparkLines}>
//   <Sparklines
//     className={`${classes.sparkLine} ${classes.sparkLine1}`}
//     data={this.chartData(metric).slice(1)}
//   >
//     <SparklinesBars color="#eee" />
//   </Sparklines>
//
// </div>
MetricDetail = injectSheet(metricDetailStyles)(MetricDetail);
export default MetricDetail
