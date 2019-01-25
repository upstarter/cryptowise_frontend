import React from "react";
import { Table, Select, Input, Button, Icon, notification } from "antd";
import tokens from "./MockData";

const Option = Select.Option;

const openNotificationWithIcon = (type, text, title) => {
  notification[type]({
    message: title,
    description: text
  });
};

export default class PortfolioGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      noMoreAllocationInfo: false,
      totalWeight: 0,
      tableData: [
        {
          holding: tokens[0].holding,
          allocation: 0
        }
      ],
      result: {}
    };
    this.addRow = this.addRow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addRow = e => {
    if (this.state.tableData.length >= 7) {
      openNotificationWithIcon(
        "warning",
        "",
        "Please choose 7 holdings or less"
      );
      return;
    }
    this.setState(prevState => ({
      tableData: [
        ...prevState.tableData,
        {
          holding: tokens[0].holding,
          allocation: 0
        }
      ]
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    alert('see the result in a console "WIP"');
    console.log(this.state.tableData);
  };
  handleChange = e => {
    if (["holding", "allocation"].includes(e.target.id)) {
      let tableData = [...this.state.tableData];
      tableData[e.target.dataset.id][e.target.id] = e.target.value;
      this.setState({ tableData });
    } else {
      let tableData = [...this.state.tableData];
      tableData[e.target.dataset.id][e.target.id] = e.target.value;
      this.setState({ tableData });
    }
  };
  deleteRow(idx) {
    let data = [...this.state.tableData];
    data.splice(idx, 1);
    this.setState({ tableData: data });
  }

  render() {
    const columns = [
      {
        title: "#",
        dataIndex: "key",
        key: "key",
        render: (text, record, i) => <a>{i + 1}</a>
      },
      {
        title: "Holding",
        dataIndex: "holding",
        key: "holding",
        render: (token1, record, i) => (
          <select
            showSearch
            style={{ width: "14vh" }}
            placeholder="Select a Holding"
            id="holding"
            data-id={i}
          >
            {tokens.map((token, i) => (
              <option value={token.holding}>{token.holding}</option>
            ))}
          </select>
        )
      },
      {
        title: "Allocation",
        dataIndex: "allocation",
        key: "allocation",
        render: (token, record, i) => (
          <Input
            id="allocation"
            className="allocation"
            placeholder="Must be under 100"
            data-id={i}
          />
        )
      },
      {
        title: "Action",
        key: "action",
        render: (text, record, i) => (
          <Icon
            type="delete"
            theme="twoTone"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.deleteRow(i);
            }}
          />
        )
      }
    ];
    if (
      this.state.tableData.reduce(
        (sum, i) => (sum += parseInt(i.allocation)),
        0
      ) > 100
    ) {
      openNotificationWithIcon("error", "", "Allocation can't be over 100");
    }
    return (
      <div>
        <div>
          Total Weight:
          {this.state.tableData.reduce(
            (sum, i) => (sum += parseInt(i.allocation)),
            0
          )}
        </div>
        <br />
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Table
            columns={columns}
            dataSource={this.state.tableData}
            pagination={false}
          />
          <br />
          <Button type="secondary" block onClick={this.addRow}>
            Add
          </Button>

          <Button
            type="primary submit"
            block
            onClick={this.handleSubmit}
            style={{ marginTop: 10 }}
          >
            Submit
          </Button>
        </form>
        {this.state.error && <div style={styles.error}>{this.state.error}</div>}
      </div>
    );
  }
}
