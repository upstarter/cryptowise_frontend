import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import NewProposalForm from './NewProposalForm'
import { List, Avatar, Button, Skeleton, Affix, Rate, Icon, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import userProposalCreate from "Actions/userProposalCreate";
import colors from "Styles/colors"

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
// import colors from 'Styles/colors'

class ProposalComponent extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    ModalContent: 'Customize your experience',
    visible: false,
    confirmLoading: false
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    axios.get(fakeDataUrl).then((res) => {
      callback(res.data)
    })
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      console.log('YOOO', data)
      this.setState(
        {
          data,
          list: data,
          loading: false,
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
          <Button className="float" onClick={this.showModal} shape="circle" icon="plus" size='large' />
          <div id="proposal-blurb">
            <Typography>
              <div id="proposal-blurb-intro">
                <Title>Problem RIFF's 🎸</Title>
                <div className='subtitle-small'><strong>R</strong>apid <strong>I</strong>mplementation <strong>F</strong>easibility & <strong>F</strong>undability
                Studies</div>
                <h2 id='subtitle' className='subtitle-small'>
                  A Hacker Quorum focused on solving personal investment
                  problems and creating retirement security rockstars.
                 </h2>
                <Paragraph>
                  🌱 Problem RIFF's encourage our ecosystem to sprout the seeds of what it will
                  become over the long term. Problems are the guiding north star to
                  prosperity and opportunity for the next generations of
                  fin-technologists, fin-repreneurs, and financiers. <b>Submit</b>,
                  Search, and <b>Rate</b> problems that inhibit returns in a portfolio or
                  trading system and share them with the community. Self-organizing
                  expert teams will form to research top scoring problems and share
                  their preliminary results for critique 🧐 and/or adulation 👍.
                </Paragraph>

              </div>

              {/* <div id="proposal-blurb-features">
                <h5 id="proposal-blurb-how">How to participate:</h5>
                <ol id="proposal-blurb-list">
                  <li>
                    <strong className='subtitle-big'>Submit 👩🏽‍🏫 </strong>,
                    <strong className='subtitle-big'> Search 🔎 </strong>
                    , and
                    <strong className='subtitle-big'> Rate 🌟 </strong>
                    problems relevent to your goals & activities.
                  </li>
                  <li><strong className='subtitle-big'>Make an Offer</strong> to solve problem(s) relevent to your goals & activities and
                    implement as API endpoints for RIFF rewards. A rising tide raises all boats.
                  </li>
                </ol>
              </div> */}

            </Typography>
          </div>

          <div id="proposal-items" className={classes.proposalItems}>
            <Affix offsetTop={64}>
              <div id="proposal-items-heading">
                <h3>🌱 Problem RIFF's</h3>
              </div>
            </Affix>
            <div className="proposal-column">
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                  // <List.Item actions={[<a>more</a>]}>
                  <List.Item>
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={
                           <Avatar style={{ backgroundColor: '#D0E5FF' }} icon="team" />
                        }
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description="RIFF, a proposal language for analytical crypto-networking applications, refined by the CryptoWise Team"
                      />
                      {/* <div>Content Goes here</div> */}
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
    backgroundColor: '#fff',
    gridTemplateColumns: '30vw 70vw',
    gridTemplateAreas: '"sidebar content"',

    '@media (max-width: 800px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"',
    },

    '@media (min-width: 800px)': {
      gridTemplateColumns: '38vw 62vw',
      gridTemplateAreas: '"sidebar content"',
    },

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      marginTop: -30,
      padding: [15, 15, 15, 50],
      '& strong': {
        fontSize: '16 !important',
        color: `${colors.black}`
      },
      // '& #proposal-blurb-intro': {
      //   '& #subtitle': {
      //     marginBottom: 10
      //   }
      // },
      //
      // '& #proposal-blurb-list': {
      //   padding: [10,0,10,10]
      // },
      //
      //
      // '& #proposal-blurb-features': {
      //   padding: [10, 0, 0, 0],
      //
      //   '& #proposal-blurb-features-title': {
      //     padding: [0,0,0,0]
      //   },
      //
      // },
      //
      // '& #proposal-blurb-guide': {
      //   padding: [10, 0, 0, 0],
      //
      //   '& #proposal-blurb-guide-title': {
      //     padding: [0,0,0,0]
      //   },
      //
      // },
      '@media (max-width: 680px)': {
        maxWidth: '100vw',
      },

      '@media (min-width: 680px) and (max-width: 900px)': {
        position: 'fixed',
        maxWidth: '43ch',
      },

      '@media (min-width: 900px)': {
        position: 'fixed',
        maxWidth: '50ch',
      },

    },

    '& .float': {
    	position: 'fixed',
    	width: 60,
    	height:60,
    	bottom:40,
    	right:40,
      backgroundColor: `${colors.green}`,
      // backgroundColor: 'rgba(118,48,103,0.85)',
    	color: '#FFF',
    	borderRadius: 50,
    	textAlign: 'center',
    	boxShadow: [2, 2, 3, '#999'],
      zIndex: 10
    }
  },

  proposalItems: {
    gridArea: 'content',
    marginBottom: 70,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
    border: '1px solid #D0E5FF',
    '@media (min-width: 800px)': {
    },

    '& #proposal-items-heading': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // position: 'fixed',
      height: 40,
      // border: '1.2px solid #000000',
      fontWeight: '400',
      zIndex: 10,
      backgroundColor: '#D0E5FF',
      color: '#000',
    },

    '& .ant-list-item': {
      // display: 'block',
      // listStyleType: 'none',
      padding: 14,
      // border: '1px solid #727d88',
    },

    '@media (min-width: 680px)': {
      marginLeft: 25,
    },

  },

}

export default injectSheet(proposalStyles)(ProposalComponent)
