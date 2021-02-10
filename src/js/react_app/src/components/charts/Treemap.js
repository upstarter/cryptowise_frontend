import React from 'react';
import { url, api_url } from "Utils/consts";
import { Redirect } from "react-router-dom";
import Chart from "react-google-charts";
import { setTopics }  from 'Redux/topics.js'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Treemap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      selectionText: '',
      chartDataTable: undefined,
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

  displaySelection = (selectionText) => {
    this.setState({selectionText: selectionText})
  }

  showFullTooltip = (row, size, value) => {

    // if (data) {
    // return (
    //   `<div style="background:#fd9; padding:10px; border-style:solid">
    //     <span style="font-family:Courier">
    //       <b>${data.getValue(row, 0)}</b>,
    //       ${data.getValue(row, 1)},  ${data.getValue(row, 2)}, ${chartDataTable.getValue(row, 3)} </span><br>
    //        Datatable row:  row <br>
    //        ${data.getColumnLabel(2)} (total value of this cell and its children): ${size}
    //        <br>
    //     </span>
    //     </div>`
    //   )
    // }
  }

  renderChart = (topics, selectionText) => {
    let chart =
      <Chart
        width={'100vw'}
        height={'100vh'}
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
          fontSize: 13,
          showScale: true,
          generateTooltip: (row, size, value) => {
            this.showFullTooltip(row, size, value)
          },
        }}
        rootProps={{ 'data-testid': '1' }}
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart()
              const selection = chart.getSelection()
              if (selection.length === 1) {
                const [selectedItem] = selection
                const dataTable = chartWrapper.getDataTable()
                let { row, column } = selectedItem
                this.displaySelection(
                  'You selected : ' + dataTable.fg[row].c[0].v
                )
                chart.setSelection(selection)
                // console.log(dataTable.fg[row], row, selection)
              }
            },
          },
        ]}
      />
      console.log('ch', chart)

      // let dataTable = chartWrapper.getDataTable()
      return chart
  }

  // saveChartData = (chartDataTable) => {
  //   this.setState({chartDataTable: chartDataTable})
  // }

  render() {
    let {topics, selectionText} = this.state
    return (
      <>
      <h6 style={{textAlign: 'center', color: 'white'}} >
        Click to drill into a topic, Ctrl-click any topic to rollup
      </h6>
      {this.renderChart(topics, selectionText)}
      <div style={{color: 'white'}} id="chart-selection-container">
        {selectionText}
      </div>
      </>
    );
  }
}


export default connect(null, null)(withRouter(Treemap));
