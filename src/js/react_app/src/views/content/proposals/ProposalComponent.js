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
            <Typography className='blurb-typography'>
              <div id="proposal-blurb-intro">
                <Title id="proposal-blurb-title">Feature Proposals</Title>
                <h4 style={{textAlign: 'center', margin: '-10px 0 35px 0'}} className='subtitle-small'>🌱 Evolve your Ecosystem</h4>
                <Paragraph>
                  Feature Proposals sprout the seeds of the CryptoWise ecosystem features for the long term. They are the guiding north
                  star to prosperity and opportunity for our membership of high-tech financiers, fin-hackers, and finpreneurs.
                </Paragraph>
              </div>

              <div id="proposal-blurb-features">
                <h5 id="proposal-blurb-how">How to participate:</h5>
                <ol id="proposal-blurb-list">
                  <li>Submit new features relevent to your goals & activities</li>
                  <li>Find features relevent to your goals & activities and get involved as the community evolves</li>
                  <li>Rate features submitted by the community for possible inclusion in our RIFFS 🎸 program (<b>R</b>apid <b>I</b>mplementation <b>F</b>easibility & <b>F</b>undability <b>S</b>tudy).</li>
                </ol>
              </div>
              <p>Before making a public proposal, we just ask that you think hard on what software, data, and/or features on our network would be most valuable for you to make highly sound investment decisions.</p>
            </Typography>
          </div>

          <div id="proposal-items" className={classes.proposalItems}>
            <Affix offsetTop={64}>
              <div id="proposal-items-heading">
                <h3>RIFF Proposals</h3>
              </div>
            </Affix>
            <div className="proposal-column">
              <List
                className="loadmore-list"
                loading={initLoading}
                itemLayout="vertical"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                  <List.Item actions={[<a>save</a>,<a>more</a>,<a>edit</a>]}>
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description="RIFF, a proposal language for analytical crypto-networking applications, refined by the CryptoWise Team"
                      />
                      <div className='ant-list-item-foot'>
                        <h6 className='sub-title'>Your Rating</h6>
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
      margin: '0 auto 60px',
      padding: 21,

      '& #proposal-blurb-title': {
        textAlign: 'center'
      }
    },

    '@media (max-width: 880px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"'
    },

    '@media (min-width: 880px)': {
      gridTemplateColumns: '40vw 60vw',
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
    backgroundColor: '#fff',

    '& #proposal-items-heading': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      minWidth: '100%',
      backgroundColor: 'rgba(118,48,103,0.85)',
      color: '#fff',
    },

    '& .loadmore-list': {
      minHeight: 350
    },

    '& #load-more-button': {
      margin: [0,0,20,0]
    },

    '@media (max-width: 880px)': {
        '& .ant-list-item': {
          maxWidth: '90vw',
          margin: '0 auto',
          padding: 20,

          '& .ant-list-item-meta': {
            maxWidth: '90vw',
            margin: '0 auto',
            padding: 10
          },

          '& .ant-list-item-foot': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '50vw',
            margin: '0 auto',
          },

          '& .ant-list-item-action': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        },
    },


  },
}

//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   userProposalCreate: (proposalInfo) => dispatch(userProposalCreate(proposalInfo))
// })

export default connect(null, null)(injectSheet(proposalStyles)(ProposalComponent));
