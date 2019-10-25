import React from "react";
import { Table, Select, InputNumber, Button, Icon, Collapse, Tooltip, Divider } from "antd";
import { notify } from "Components/base/notify/notify"
const { Panel } = Collapse;
import injectSheet, { jss } from "react-jss"
import tokens from "./MockData";
import formatNumber from "Utils/formatNumber"

const Option = Select.Option;


// class NumericInputDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//   }
//
//   onChange = value => {
//     this.setState({ value });
//   };
//
//   render() {
//     return (
//       <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
//     );
//   }
// }

class PortfolioGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      noMoreAllocationInfo: false,
      totalWeight: 0,
      tableData: [
        {
          name: tokens[0].name,
          allocation: 0,
        }
      ],
      result: {},
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  footer = () => {
    return(
      <>
        <Button style={{width: '30%', marginRight: '20px'}} type="secondary" block onClick={this.addRow}>
          Add Asset
        </Button>

        <Button
          form='myform'
          type="primary submit"
          block
          key="submit"
          htmlType="submit"
          style={{ width: '30%', marginTop: 10 }}
        >
          Submit
        </Button>
      </>
    )
  }

  onBlur() {
    console.log('blur');
  }

  onFocus() {
    console.log('focus');
  }

  onSearch(val) {
    console.log('search:', val);
  }

  deleteRow(idx) {
    let data = [...this.state.tableData];
    data.splice(idx, 1);
    this.setState({ tableData: data });
  }

  panel = (record) => {
    return(
      <>
        <p>{`${record.desc}`}</p>
      </>
    )
  }

  addRow = e => {
    let n = this.state.tableData.length
    if ( n >= 7) {
      notify(
        "warning",
        "",
        "Please choose 7 names or less"
      );
      return;
    }
    this.setState(prevState => ({
      tableData: [
        ...prevState.tableData,
        {
          name: tokens[n].name,
          allocation: 0
        }
      ]
    }));
  };

  columns = () => {
    [
      {
        title: "#",
        dataIndex: "key",
        key: "key",
        render: (text, record, i) => <a>{i + 1}</a>
      },
      {
        title: "Token",
        dataIndex: "name",
        key: "name",
        render: (token1, record, i) => (
          <Select
            ref="tokenSelect"
            id="name"
            data-id={i}
            name="token-select"
            placeholder="Select an asset"
            showSearch
            key={`select-${i}`}
            style={{ width: 200 }}
            optionFilterProp="children"
            onChange={this.onSelectChange}
            // onSelect={this.onSelect}
            // onFocus={this.onFocus}
            // onBlur={this.onBlur}
            // onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            // dropdownRender={menu => (
            //   <div>
            //     {menu.props.menuItems.map((token) => (
            //       <div
            //         style={{ padding: '4px 8px', cursor: 'pointer' }}
            //         onMouseDown={e => e.preventDefault()}
            //         // onClick={this.addItem}
            //       >
            //       {token.props.children}
            //       <Divider style={{ margin: '4px 0' }} />
            //       </div>
            //     ))}
            //
            //   </div>
            // )}
          >
            {tokens.map((token, i) => (
              <Select.Option name={token.id} key={token.id} value={token.id}>{token.name}</Select.Option>
            ))}
          </Select>
        )
      },
      {
        title: "Weight ( % )",
        dataIndex: "allocation",
        key: "allocation",
        render: (token, record, i) => (
          <InputNumber
            // {...this.props}
            onChange={this.handleWeightChange}
            defaultValue={5}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            allowClear
            id="allocation"
            name={`weight-${token.id}`}
            className="allocation"
            placeholder="Enter 0 - 100"
            data-id={i}
            placeholder="Adjust Weight"
            maxLength={25}
            step={5}
            // value={this.state.value}
          />
        )
      },
      {
        title: "Actions",
        key: "action",
        render: (text, record, i) => (
          <>
          {/* <Icon
            type="down"
            // theme="twoTone"
            style={{ cursor: "pointer", marginRight: 20 }}
            onClick={() => {
              this.togglePanel(i);
            }}
          /> */}
          <Icon
            type="delete"
            theme="twoTone"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.deleteRow(i);
            }}
          />
          </>
        )
      }
    ];
  }


  onSelect = (value,option) => {
    console.log('selected', option.props);
    console.table(this.state.tableData);

    this.setState({tableData: this.state.tableData})
  }


  onSelectChange = tokenId => {
    // console.log(tokenId)
    this.props
  }

  handleWeightChange = (weight) => {
    // console.log(weight)
  }

  handleChange = (e, form) => {
    console.log('change', e,form)
  }


  onSubmit = e => {
    e.preventDefault()
    console.log(e.target.id)

    if (["name", "allocation"].includes(e.target.id)) {
      console.log(e.target.id)
      let tableData = [...this.state.tableData];
      tableData[e.target.dataset.id][e.target.id] = e.target.value;
      this.setState({ tableData });
    } else {
      let tableData = [...this.state.tableData];
      tableData[e.target.dataset.id][e.target.id] = e.target.value;
      this.setState({ tableData });
    }
    console.table(this.state.tableData)
  }

  // onSubmit = e => {
  //   if (this.refs.tokenSelect) {
  //     console.log(this.refs.tokenSelect.value);
  //   }
  //   e.preventDefault();
  //   // let myForm = document.getElementById('myform');
  //   // let formData = new FormData(myForm);
  //   // console.table(formData);
  //   this.props.handleSubmit(e)
  // };


  render() {
    const { value } = this.props;
    const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
    'Input a number'
    );

    if (
      this.state.tableData.reduce(
        (sum, i) => (sum += parseInt(i.allocation)),
        0
      ) > 100
    ) {
      notify("error", "", "Allocation can't be over 100");
    }
    return (
      <div>
        <form name='myform' id='myform' onSubmit={this.onSubmit}>
          <Table
            bordered
            title={() => `Total of Weights: ${this.state.tableData.reduce( (sum, i) => (sum += parseInt(i.allocation)), 0 )}`}
            footer={this.footer}
            columns={columns}
            dataSource={this.state.tableData}
            // expandRowByClick={true}
            // expandIconAsCell={false}
            // expandIconColumnIndex={-1}
            // expandedRowRender={record => this.panel(record)}
            pagination={false}
          />
        </form>
        {this.state.error && <div style={styles.error}>{this.state.error}</div>}
      </div>
    );
  }
}

const styles = {

}
export default injectSheet(styles)(PortfolioGrid);
