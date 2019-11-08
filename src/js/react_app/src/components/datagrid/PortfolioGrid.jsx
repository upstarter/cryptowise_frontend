import React from "react";
import { Table, Select, InputNumber, Popover, Button, Icon } from "antd";
import { notify } from "Components/base/notify/notify"
import injectSheet, { jss } from "react-jss"
import tokens from "./MockData";
import formatNumber from "Utils/formatNumber"
import zip from "Utils/zip"
import AuthService from "Services/auth/AuthService"

const Option = Select.Option;


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
      data: [],
      result: {},
      value: ''
    };
    this.addRow = this.addRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  footer = () => {
    return(
      <div id="table-buttons">
        {/* <div>
          Total of Weights: {this.state.totalWeight}
        </div> */}
        <Button id="add-asset" type="secondary" block onClick={this.addRow}>
          Add Asset
        </Button>

        <Button
          id="portfolio-submit"
          form='myform'
          type="primary submit"
          block
          key="submit"
          htmlType="submit"
        >
          Submit
        </Button>
      </div>
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
          name: tokens[0].name,
          allocation: 0
        }
      ]
    }));
  };

  onHover = (t,h,e) => {
      if(!!('ontouchstart' in window)){//check for touch device
      //behaviour and events for touch device
        console.log('touch',t,h,e)
      }
      else{
        console.log('nontouch',t,h,e)

      //behaviour and events for pointing device like mouse
      }
  }

  columns = (classes) => {

    const text = <span>Title</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );


    return (
      [
      {
        title: "Token",
        dataIndex: "name",
        key: "name",
        render: (token, record, i) => (
          <Select
            ref="tokenSelect"
            className={classes.select}
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
              <Select.Option
                className={classes.option, "cw-token"}
                // onMouseEnter={(e) => this.onHover(token,record, e)}
                name={token.id}
                key={token.id}
                ref={`token${token.id}`}
                value={token.id}>{token.name}
              </Select.Option>
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
            // onChange={this.handleWeightChange}
            className={classes.input, "allocation"}
            ref={`weight`}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            allowClear
            id="allocation"
            name={`weight-${token.id}`}
            placeholder="Enter 0 - 100"
            data-id={i}
            placeholder="Adjust Weight"
            maxLength={25}
            step={5}
            defaultValue={0}
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
    ]
   )
  }


  // onSelect = (value,option) => {
  //   console.log('selected', option.props);
  //   console.table(this.state.tableData);
  //
  //   this.setState({tableData: this.state.tableData})
  // }


  onSelectChange = tokenId => {
    console.table(this.state.data)

  }

  handleWeightChange = (weight) => {
    // this.setState({totalWeight: this.state.totalWeight += weight},
    // console.log(this.state.totalWeight))
  }

  handleChange = (e, form) => {
    console.log('change', e,form)
  }


  onSubmit = e => {
    e.preventDefault()

    const tokes = document.querySelectorAll('.ant-select-selection-selected-value')
    const weights = document.querySelectorAll('.allocation')

    let wts = []
    let totalWeight = 0
    weights.forEach((weight) => {
      let wt = parseInt(weight.children[1].children[0].value.replace('%', ''))
      totalWeight += wt
      wts.push(wt)
    })

    let toks = []

    tokes.forEach(function(token, i) {
      let tok = tokens.find(t => t.name === token.firstChild.data)
      let name = tok.name
      let tokSym = tok.symbol
      let tokId = tok.id
      toks.push({id: tokId, name: name, symbol: tokSym, weight: wts[i]})
    });

    let auth = new AuthService
    let user = auth.getProfile()
    toks = {...toks, user_id: user.sub}

    this.props.handleSubmit(toks, totalWeight)
  }


  render() {
    const { value, classes } = this.props;
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
            className={classes.portfolioTable}
            rowClassName={classes.portfolioTableRow}
            // title={() => `Total of Weights: ${this.state.tableData.reduce( (sum, i) => (sum += parseInt(i.allocation)), 0 )}`}
            // title={() => `Total of Weights: ${this.state.totalWeight}`}
            footer={this.footer}
            columns={this.columns(classes)}
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
  portfolioTableRow: {
    '@media (max-width: 460px)': {
      maxWidth: '90vw',
      display: 'grid',
      gridAutoFlow: 'row',
      '& table': {
        maxWidth: '90vw',
      },
    },
  },

  portfolioTable: {
    margin: '50px auto',
    maxWidth: "600px",
    textAlign: 'center',
    display: 'grid',
    gridAutoFlow: 'row',

    '@media (max-width: 860px)': {
       // maxWidth: '85vw',
       // gridTemplateRows: '100vw 100vw',
       // gridTemplateAreas: '"content"',
    },


    '& .ant-table-body': {
      maxWidth: "600px",

      '@media (max-width: 460px)': {
        maxWidth: '90vw',
        display: 'grid',
        gridAutoFlow: 'row',
        '& table': {
          // maxWidth: '90vw',
        },
      },

      '& .ant-table-thead': {
        gridAutoFlow: 'column',


        '& tr': {

          '@media (max-width: 860px)': {
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: '8fr 2fr 2fr',
          },
        },

      },
    },
    '& #table-buttons': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '12px',

      '@media (min-width: 860px)': {

        '& #add-asset': {
          width: '200px',
          justifySelf: 'center'
        },
        '& #portfolio-submit': {
          width: '200px',
          justifySelf: 'center'
        }
      },


    }
  },
}
export default injectSheet(styles)(PortfolioGrid);
