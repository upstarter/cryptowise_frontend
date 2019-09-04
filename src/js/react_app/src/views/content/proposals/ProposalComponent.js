import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
import NewProposalForm from './NewProposalForm'
import { List, Avatar, Button, Skeleton, Affix, Rate, Icon, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import userProposalCreate from "Actions/userProposalCreate";
import colors from "Styles/colors"

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class ProposalComponent extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    page: 1,
    ModalContent: 'Customize your experience',
    visible: false,
    confirmLoading: false
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.data,
        list: res.data,
        page: this.state.page + 1
      });
    });
  }

  getData = callback => {
    const url = `${api_url}/proposals?per_page=${count}&page=${this.state.page}`
    axios.get(url).then((res) => {
      console.log('Data', res.data)
      callback(res.data)
    })
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.data);
      const page = this.state.page + 1

      this.setState(
        {
          data,
          list: data,
          loading: false,
          page: page,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCreate = () => {
    this.setState({
      ModalContent: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });

    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      console.log(err, values)
      if (err) {
        console.error('handleCreate error', err)
        return;
      }
      this.props.dispatch(userProposalCreate(values))
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false, confirmLoading: false })
    });

  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { classes } = this.props
    const { initLoading, loading, list, visible, confirmLoading, ModalContent } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          id='load-more-button'
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>Load More</Button>
        </div>
      ) : null;
    return (
      <div className="dark-wrap">
        <React.Fragment>
          <ScrollToTopOnMount />

          <NewProposalForm
            wrappedComponentRef={this.saveFormRef}
            wrapClassName={classes.modal}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            confirmLoading={confirmLoading}
          />
          <section id="proposal" className={classes.proposals}>
            <div id="proposal-blurb">
              <div id='typeage'>
                <div id="proposal-blurb-intro">
                  <h3 id="blurb-title">Problem RIFF's</h3>
                  <h4 id='blurb-subtitle' className='subtitle-small'>
                    A Hacker Quorum focused on solving personal investment
                    problems and creating retirement 🎸 rockstars.
                  </h4>
                  <p>
                    🌱 Problem RIFF's encourage our ecosystem to sprout the seeds of what it will
                    become over the long term. <b>Submit</b>,
                    Search, and <b>Rate</b> problems that inhibit returns in a portfolio or
                    trading system and share them with the community. Self-organizing
                    expert teams can form to research solutions and share
                    their preliminary results.
                  </p>

                </div>
              </div>
            </div>

            <div id="proposal-items" className={classes.proposalItems}>
              <Affix offsetTop={45}>
                <div id="proposal-items-heading">
                  <Button className="float" onClick={this.showModal} shape="circle" icon="plus" size='large' />
                  <h3>RIFF's 🌱</h3>
                  <div id="riff-blurb"><strong>R</strong>apid <strong>I</strong>mplementation, <strong>F</strong>easibility, <strong>F</strong>undability
                  </div>
                </div>
              </Affix>
              <div className="proposal-column">
                <List
                  className="item-list"
                  loading={initLoading}
                  itemLayout="horizontal"
                  loadMore={loadMore}
                  dataSource={list}
                  renderItem={item => (
                    // <List.Item actions={[<a>more</a>]}>
                    <List.Item>
                      <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                          id='list-item-meta'
                          avatar={
                             <Avatar style={{ backgroundColor: '#D0E5FF' }} icon="team" />
                          }
                          title={<a href="https://ant.design">{item.user_name}</a>}
                          description={<p className='item-name'>Type: {item.type}</p>}
                        />
                        {
                          <div id="meta-details">
                            <p className='item-name'>{item.name}</p>
                            <p className='item-description'>{item.description}</p>
                          </div>
                        }
                        <div>
                          <Rate allowHalf />
                        </div>
                      </Skeleton>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </section>
        </React.Fragment>
      </div>

    )
  }
}

const proposalStyles = {
  modal: {
    width: 10,
    '& .ant-modal-content': {
      color: 'red !important',
      textDecoration: 'none !important',
    }
  },
  proposals: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '30vw 70vw',
    gridTemplateAreas: '"sidebar content"',

    '@media (max-width: 860px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateColumns: '3fr 7fr',
      gridTemplateAreas: '"sidebar content"',
    },

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      padding: 30,
      color: `${colors.sand} !important`,


      '& #blurb-title': {
        fontSize: '3.5rem !important',
        color: `${colors.white} !important`,
        filter: 'contrast(.8)'
      },
      '& #proposal-blurb-intro': {
        '& #blurb-subtitle': {
          color: `${colors.sand} !important`,
          marginBottom: 10,
          // fontSize: '1.15rem',
        }
      },

      '& #proposal-blurb-list': {
        padding: [10,0,10,10]
      },


      // '& #proposal-blurb-features': {
      //   padding: [10, 0, 0, 0],
      //
      //   '& #proposal-blurb-features-title': {
      //     padding: [0,0,0,0]
      //   },
      //
      // },

      // '& #proposal-blurb-guide': {
      //   padding: [10, 0, 0, 0],
      //
      //   '& #proposal-blurb-guide-title': {
      //     padding: [0,0,0,0]
      //   },
      //
      // },
      '@media (max-width: 860px)': {
        maxWidth: '100vw',
        '& #blurb-title': {
          fontSize: '2rem',
        },
      },

      '@media (min-width: 860px)': {
        position: 'fixed',
        maxWidth: '30vw'
      },

    },
  },

  proposalItems: {
    gridArea: 'content',
    marginBottom: 50,
    paddingBottom: 30,
    // backgroundColor: '#ffffff',
    // border: '1px solid #D0E5FF',
    '@media (min-width: 800px)': {
    },

    '& #proposal-items-heading': {
      display: 'grid',
      gridTemplateRows: '25px auto',
      gridTemplateColumns: '50px 1fr',
      alignItems: 'center',
      justifyItems: 'center',
      // position: 'fixed',
      height: 55,
      // border: '1.2px solid #000000',
      fontWeight: '400',
      zIndex: 10,
      // boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
      background: `${colors.secondaryDark}`,
      marginBottom: 10,
      filter: 'saturate(.8)',
      // border: '1px solid rgba(250,200,200,.5)',
      color: '#fff !important',

      '& .float': {
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
        // position: 'fixed',
        // width: 60,
        // height:60,
        // bottom:40,
        // right:40,
        backgroundColor: `${colors.green}`,
        // backgroundImg: '🌱',
        // backgroundColor: 'rgba(118,48,103,0.85)',
        color: '#FFF',
        borderRadius: 50,
        // borderColor: `${colors.silver}`,
        textAlign: 'center',
        boxShadow: [1, 1, 2, `${colors.smoke}`],
        zIndex: 10
      },
      '& h3': {
        gridColumn: '2',
        fontSize: '2.0rem',
        letterSpacing: '0.5rem',
        paddingTop: 17,
        color: '#fff',
        // filter: 'saturate(.8)'
      },
      '& #riff-blurb': {
        gridColumn: '2',
        gridRow: '2',
        fontSize: '1.2rem',
        letterSpacing: '.02em',
        '& strong': {
          fontSize: '1.6rem !important',
          fontWeight: '1000',
          color: `${colors.green}`,
          filter: 'saturate(2.5)'
        },
      }
    },

    '& .item-list': {
      // padding: 10,
      color: `${colors.offWhite} !important`,

      '& #list-item-meta': {
        '& p': { color: `${colors.offWhite}`},
        '& a': { color: `${colors.offWhite}`},
        '& .ant-list-item-meta-content': {
           color: `${colors.offWhite} !important`,
           '& #main-content': {
             '& .item-name': {color: `${colors.offWhite}`},
             '& .item-description': { color: `${colors.offWhite}` },
           },
        },

      },
    },

    '& .ant-list-item': {
      color: `${colors.offWhite}`,
      boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
      background: `${colors.quartDark}`,
      border: '1px solid rgba(240,240,240,.5)',
      padding: 14,
      '& .item-description': {
        margin: [0,17,0,17]
      }
    },

    '@media (min-width: 680px)': {
      // marginLeft: 25,
    },

  },

}

export default injectSheet(proposalStyles)(ProposalComponent)
