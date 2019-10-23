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
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'

const count = 5;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

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
    const data = {
      withCredentials: true,
      credentials: 'include'
    };

    const cookies = new Cookies();
    const sessionToken = cookies.get('_cw_skey')
    const accessToken = cookies.get('_cw_acc')
    setAuthToken(accessToken) // set token in requests

    axios.get(url, data).then((res) => {
      // console.log('Data', res.data)
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
          // Resetting windows offsetTop so as to display react-virtualized demo underfloor.
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
      if (err) {
        console.error('handleCreate error', err)
        return;
      }
      this.props.dispatch(userProposalCreate(values))
    });
    form.resetFields();
    this.setState({ visible: false, confirmLoading: false })
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

          <section id="proposal" className={classes.proposals}>
            <NewProposalForm
              wrappedComponentRef={this.saveFormRef}
              wrapClassName={classes.modal}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
              confirmLoading={confirmLoading}
            />
            <div id="proposal-blurb">
              <div id="proposal-blurb-intro">
                <h3 id="blurb-title">The Quantasium</h3>
                <h4 id='blurb-subtitle' className='subtitle-small'>
                  A Hacker Quorum focused on optimal strategies for retirement 🎸 rockstars
                  and quant supergroups.
                </h4>

                <p>
                  Help seed the design of financial data
                  structures, algorithms, teams, roles, functions and processes
                  used in optimal investment intelligence within a
                  decentralized financial network for consumption by the network.
                </p>
                <p>
                  Ideas voted to the top decile may become
                  candidates for future ecosystem engineering activities.
                </p>
                <p>
                  To participate, <b> Submit</b> ideas
                  and/or <b>Rate </b> others' ideas so the collective interests
                  of the ecosystem can emerge.
                </p>
              </div>
            </div>

            <div id="proposal-items" className={classes.proposalItems}>
              <Affix offsetTop={45}>
                <div id="proposal-items-heading">
                  <Button className="float" onClick={this.showModal} shape="circle" icon="plus" size='large' />
                  <h3>Ideas 🌱</h3>
                  {/* <div id="riff-blurb">
                    <strong>R</strong>apid <strong>I</strong>mplementation, <strong>F</strong>easibility, <strong>F</strong>undability
                  </div> */}
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
                             <Avatar style={{}} icon="team" />
                          }
                          title={<a href="//ant.design">{item.name}</a>}
                          description={<p className='item-name'>{item.description}</p>}
                        />
                        {
                          // <div id="meta-details">
                          //   <p className='item-name'>{item.name}</p>
                          //   <p className='item-description'>{item.description}</p>
                          // </div>
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
    // width: 10,
    // background: `${colors.secondaryDark}`,
    filter: 'invert(0)',
    '& .ant-modal-content': {
      color: 'red !important',
      textDecoration: 'none !important',
    }
  },
  proposals: {
    display: 'grid',
    gridAutoFlow: 'row',

    '@media (max-width: 860px)': {
      gridTemplateColumns: '100vw 100vw',
      gridTemplateAreas: '"sidebar" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateColumns: '2fr 8fr',
      gridTemplateAreas: '"sidebar content"',
    },

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      maxWidth: '60ch',
      margin: '40px 0 0 0',
      padding: 14,

      // color: `${colors.sand} !important`,

      '@media (max-width: 860px)': {
        maxWidth: '90vw',

        '& #blurb-title': {
          fontSize: '2rem',
        },
      },

      '@media (min-width: 860px)': {
        position: 'fixed',
        maxWidth: '30vw',
        // maxWidth: '50ch',
      },

      '& #proposal-blurb-intro': {
        fontSize: 13,
        '& p': { padding: 'none !important'},

        maxWidth: '60ch',

        '& #blurb-title': {
          fontSize: '2.7rem !important',
          color: `${colors.offWhite} !important`,
          // filter: 'contrast(.8)'
        },
        '& #blurb-subtitle': {
          color: `${colors.offWhite} !important`,
          marginBottom: 10,
          // fontSize: '1.15rem',
        }
      },

      // '& #proposal-blurb-list': {
      //   padding: [10,0,10,10]
      // },

    },
  },

  proposalItems: {
    gridArea: 'content',
    justifySelf: 'start',
    margin: '50px 15vw 50px 15vw',

    '@media (max-width: 860px)': {

    },
    '@media (min-width: 860px)': {
    },

    '& #proposal-items-heading': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      justifyItems: 'center',
      height: 55,
      zIndex: 10,
      marginBottom: 10,
      color: '#fff !important',
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',

      '& .float:hover': {
        '-webkit-animation': 'none'
      },

      '& .float': {
        gridColumn: '1',
        // gridRow: '1 / 3',
        justifySelf: 'end',
        marginRight: 15,
        backgroundColor: `${colors.primary}`,
        color: '#FFF',
        borderRadius: 50,
        textAlign: 'center',
        cursor: 'pointer',
        zIndex: 10,
        border: 'none',
        boxShadow: `0 0 0 0 ${colors.lightBlack}`,
        '-webkit-animation': 'pulse 1.5s infinite',
      },
      '& h3': {
        gridColumn: '2',
        justifySelf: 'start',
        fontSize: '2.0rem',
        letterSpacing: '0.5rem',
        paddingTop: 17,
        color: '#fff',
      },
      // '& #riff-blurb': {
      //   gridColumn: '2',
      //   gridRow: '2',
      //   justifSelf: 'center',
      //   fontSize: '1.2rem',
      //   letterSpacing: '.02em',
      //   '& strong': {
      //     fontSize: '1.2rem !important',
      //     filter: 'saturate(1.5)'
      //   },
      // }
    },
    //
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
      '& #meta-details': {
         padding: 40,
         textAlign: 'center',
         '& .item-description': {

         },
       },

    },

    // '& .ant-list-item': {
    //   color: `${colors.offWhite}`,
    //   // boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
    //   // background: `${colors.primary}`,
    //   // border: '1px solid rgba(240,240,240,.5)',
    //   // padding: 14,
    //   '& .item-description': {
    //     margin: [0,17,0,17]
    //   }
    // },



  },

}

export default injectSheet(proposalStyles)(ProposalComponent)
