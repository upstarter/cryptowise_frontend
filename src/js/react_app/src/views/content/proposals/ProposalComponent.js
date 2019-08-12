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
    console.errorx('handlecreate')
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
                <Title>🎸 Problem Riff's</Title>
                <h2 id='subtitle' className='subtitle-small'>Like a Hacker News focused on solving investment problems for retirement security.</h2>
                <Paragraph>
                  Problems are a way for our ecosystem to sprout the seeds of
                  what it is to become over the long term. They are the guiding north
                  star to prosperity and opportunity for the next generations of fin-technologists, fin-repreneurs, and financiers.
                </Paragraph>
                <Paragraph style={{textAlign: 'center'}}>( ¯\_(😃)_/¯ )</Paragraph>
                <Paragraph>
                  We stay focused on the problems that inhibit global investment returns and share them with eachother. Like a financial
                  media show but more interactive. Expert teams will research top scoring
                  problems and share their preliminary results.
                </Paragraph>
              </div>

              <div id="proposal-blurb-features">
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
              </div>

              <div id="proposal-blurb-guide">
                <h5 id="proposal-blurb-title">
                  RIFF Guidelines
                </h5>
                <ol id="proposal-blurb-list">
                  <li>Try to submit problems that take no longer than a few days or weeks to solve.</li>
                  <li>Prioritize problems relevent to your goals & activities to gain most value.</li>
                  <li>Upvote problems submitted by the community for inclusion in a cloud-sourced teams'
                     RIFF'S program (Rapid Implementation Feasibility & Fundability Study).
                  </li>
                  <li>Trolls are immediately expelled without recourse.
                  </li>
                </ol>
              </div>
            </Typography>
          </div>

          <div id="proposal-items" className={classes.proposalItems}>
            <Affix offsetTop={64}>
              <div id="proposal-items-heading">
                <h3>RIFF Problems</h3>
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
                  <List.Item actions={[<a>more</a>]}>
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={
                           <Avatar style={{ backgroundColor: '#D0E5FF' }} icon="user" />
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

  },
  proposals: {
    display: 'grid',
    backgroundColor: '#fff',
    gridTemplateColumns: '30vw 70vw',
    gridTemplateAreas: '"sidebar content"',

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      maxWidth: '60ch',
      padding: [0, 0, 0, 75],
      '& strong': {
        fontSize: 20,
        // color: `${colors.antBlue}`
      },
      '& #proposal-blurb-intro': {
        maxWidth: '60ch',
        '& #subtitle': {
          marginBottom: 20
        }
      },

      '& #proposal-blurb-list': {
        padding: [10,0,10,10]
      },


      '& #proposal-blurb-features': {
        padding: [10, 0, 0, 0],

        '& #proposal-blurb-features-title': {
          padding: [0,0,0,0]
        },

      },

      '& #proposal-blurb-guide': {
        padding: [10, 0, 0, 0],

        '& #proposal-blurb-guide-title': {
          padding: [0,0,0,0]
        },

      }
    },

    '@media (max-width: 880px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"'
    },

    '@media (min-width: 880px)': {
      gridTemplateColumns: '38vw 62vw',
      gridTemplateAreas: '"sidebar content"'
    },

    '& .float': {
    	position: 'fixed',
    	width: 60,
    	height:60,
    	bottom:40,
    	right:40,
      backgroundColor: 'rgba(118,48,103,0.85)',
    	color: '#FFF',
    	borderRadius: 50,
    	textAlign: 'center',
    	boxShadow: [2, 2, 3, '#999'],
      zIndex: 10
    }
  },

  proposalItems: {
    gridArea: 'content',
    backgroundColor: '#ffffff',

    '@media (min-width: 992px)': {
      width: '98%',
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
    }
  },

}

export default injectSheet(proposalStyles)(ProposalComponent)
