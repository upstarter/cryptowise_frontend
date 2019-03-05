import React from 'react';
import _ from "lodash";
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';


function average(data) {
  return _.round(_.sum(data) / data.length);
}

const data = [
  {ticker: 1, val: 100},
  {ticker: 2, val: 10},
  {ticker: 3, val: 50}
];

export default class BarChart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     applyNowButtonLoading: false,
  //     showModal: false
  //   };
  //   this.handleOpenModal = this.handleOpenModal.bind(this);
  //   this.handleCloseModal = this.handleCloseModal.bind(this);
  // }
  render() {
    return (
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={30}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3]}
          tickFormat={["Store of Value", "Utility", "Security"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x}%`)}
        />
        <VictoryBar
          data={data}
          x="ticker"
          y="val"
        />
      </VictoryChart>
    )
  }
}
