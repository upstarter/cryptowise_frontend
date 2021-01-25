import React from 'react';
import { url, api_url } from "Utils/consts";
import { Redirect } from "react-router-dom";
import Chart from "react-google-charts";
import { setTopics }  from 'Actions/topics.actions.js'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Treemap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    let { topic } = this.props;

    this.setState({
      isLoading: true
    });

    let topics = []
    fetch(api_url + `/${topic}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        this.setState({topics: data.data})
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    let {topics} = this.state
    return (
      <Chart
        width={'98vw'}
        height={'98vh'}
        chartType="TreeMap"
        loader={<div>Loading Chart</div>}
        data={topics}
        options={{
          marginTop: '50',
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 30,
          fontColor: 'black',
          showScale: true,
          generateTooltip: (row, size, value) => {
            return (
              '<div style="background:black; padding:10px; border-style:solid"> ' +
              value +
              '</div>'
            )
          },
        }}
        rootProps={{ 'data-testid': '1' }}
        // chartEvents={[
        //   {
        //     eventName: 'select',
        //     callback: ({ chartWrapper }) => {
        //       const chart = chartWrapper.getChart()
        //       const selection = chart.getSelection()
        //       if (selection.length === 1) {
        //         const [selectedItem] = selection
        //         const dataTable = chartWrapper.getDataTable()
        //         let { row, column } = selectedItem
        //         alert(
        //           'You selected : ' +
        //             JSON.stringify({
        //               row,
        //               column,
        //               value: dataTable.getValue(row, column),
        //             }),
        //           null,
        //           2,
        //         )
        //       }
        //       console.log(selection)
        //     },
        //   },
        // ]}
      />
    );
  }
}


export default connect(null, null)(withRouter(Treemap));
