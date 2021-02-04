import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
import { List, Avatar, Button, Skeleton, Affix, Rate, Icon, Typography, Divider, Modal } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { createProposal } from "Actions/tokens.actions";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'

const count = 25;
const fakeDataUrl = `//randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class TokenDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {token} = this.props
    const {children, description, name, symbol} = token

    return (
      <div className='token-description'>
        <div className='description'>
          {description}
        </div>
        <div className='token-details'>
        </div>
      </div>
    )
  }
}

class TokensContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    token: null,
    data: [],
    list: [],
    page: 1,
    ModalContent: 'Customize your experience',
    visible: false,
    confirmLoading: false
  };

  componentDidMount() {
    this.getData(res => {
      res.data[0].children = res.data[1]
      this.setState({
        initLoading: false,
        data: res.data,
        list: res.data,
        page: this.state.page + 1
      });
    });
  }

  getData = callback => {
    const url = `${api_url}/tokens?per_page=${count}&page=${this.state.page}`
    const data = {
      withCredentials: true,
      credentials: 'include'
    };

    const cookies = new Cookies();
    const accessToken = cookies.get('_cw_acc')
    setAuthToken(accessToken) // set token in requests

    axios.get(url, data).then((res) => {
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
      this.props.dispatch(createToken(values))
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

  titleize = (token) => {
    token.replace('\w\w*\g', (txt) => {
            return txt.charAt(0).toUpperCase() +
            txt.substr(1).toLowerCase()
          })
    this.setState({token: token})
  }

  tokenDescription = (token) => {
    return (
      <TokenDetail token={token} />
    )
  }

  tokenTitle = (token) => {
    return(
      <div>
        <a style={{fontSize: 23, color: colors.darkYellow}} href="//ant.design">
          {token.name}
        </a>
      </div>
    )
  }

  render() {
    let { classes, token } = this.props
    // token = token.split(" ").map((txt) => {
    //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ' '
    // })
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

          <section id="token" className={classes.tokens}>


            <div id="token-items" className={classes.tokenItems}>
              <Affix offsetTop={15}>
                <div style={{minWidth: '80vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} id="token-items-heading">
                  <h3 className="blurb-title">
                    ⦿ ₿ ⦿
                  </h3>
                  <h3 className="blurb-title">
                    Assets
                  </h3>
                  <h3 className="blurb-title">
                    ⦿ ₿ ⦿
                  </h3>
                </div>
              </Affix>

              <div className="token-column">
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
                          // avatar={
                          //    <Avatar style={{}} icon="team" />
                          // }

                          title={this.tokenTitle(item)}
                          description={this.tokenDescription(item)}
                        />
                        {
                          // <div id="meta-details">
                          //   <p className='item-name'>{item.name}</p>
                          //   <p className='item-description'>{item.description}</p>
                          // </div>
                        }
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

const tokenStyles = {
  modal: {
    // width: 10,
    // background: `${colors.secondaryDark}`,
    filter: 'invert(0)',
    '& .ant-modal-content': {
      color: 'red !important',
      textDecoration: 'none !important',
    }
  },
  tokens: {
    display: 'grid',
    marginTop: 0,

    '@media (max-width: 860px)': {
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: '"header" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateColumns: '1fr',
      padding: 10,
      gridTemplateAreas: '"header content"',
    },

    '@media (min-width: 860px)': {
      gridColumn: '1 / 2',
      maxWidth: '96vw',
    },

    '& #blurb-title': {
      fontSize: '3.8rem !important',
      lineHeight: '1.7rem !important',
      color: `${colors.lighterBlack} !important`,
      margin: [50,0,0,20],
      fontSize: 18,
      maxWidth: '70ch',

      '@media (max-width: 860px)': {
        gridColumn: '1 / 2',
        maxWidth: '98vw',
      },
      // filter: 'contrast(.8)'
      '& #blurb-subtitle': {
        margin: [0,0,0,0],
        color: `${colors.silver} !important`,
        fontSize: '1.5rem',

      },
    },

    '& #blurb': {
      margin: [0,0,0,0],
      color: `${colors.offWhite}`,
      fontSize: '16px',
      padding: 0,
    },
  },

  tokenItems: {
    gridArea: 'content',

    '@media (max-width: 860px)': {
      gridRow: '2 / 3',
      justifySelf: 'center',
      margin: '0px auto'

    },
    '@media (min-width: 860px)': {
      justifySelf: 'center',
      margin: '0px auto',
    },

    '& #token-items-heading': {
      display: 'grid',
      height: 80,
      zIndex: 10,
      padding: [30,0,0,5],
      color: '#fff !important',
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',

      '& .float:hover': {
        '-webkit-animation': 'none'
      },

      '& .float': {
        gridColumn: '3',
        gridRow: '1 / 3',
        justifySelf: 'end',
        margin: [0, 22, 0, 0],
        backgroundColor: `${colors.darkBlack}`,
        color: '#FFF',
        borderRadius: 50,
        textAlign: 'center',
        cursor: 'pointer',
        zIndex: 10,
        border: 'none',
        boxShadow: `0 0 0 0 ${colors.darkBlack}`,
        '-webkit-animation': 'pulse 1.5s infinite',
      },
      '& h3': {
        gridColumn: '1',
        justifySelf: 'start',
        fontSize: '3rem',
        letterSpacing: '0.5rem',
        marginTop: 9,
        color: `${colors.lightBlack}`,
      },
    },

    '& .item-list': {
      padding: '20px',
      color: `${colors.offWhite} !important`,

      '& .ant-list-items': {
        boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
        width: '90vw',
        background: `${colors.secondaryDark}`,
        border: `1px solid ${colors.darkerDarkBlack}`,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyItems: 'space-around',
        maxWidth: '95vw',

        '& .ant-list-item': {
          marginTop: 15,
        },


        '& .ant-list-item-meta-description': {
            maxWidth: '80ch'
         },

        '& .item-name': {
          margin: [0,0,20,0],
          color: `${colors.midTone} !important`,

        },
        '& .token-description': {
          margin: [0,0,20,0],
          color: `${colors.silver}`,

          '& .description': {
            margin: [0,0,7,0],
            color: `${colors.silver}`
          },

          '& .token-details': {
            color: `${colors.midTone}`
          }
        },

        '& .ant-list-item-meta-title': {
           '& a': { color: `${colors.darkYellow}`},
           '&:hover': {
             cursor: 'select',
             color: '',
             textDecoration: 'underline'
           }
         },

         '& .ant-list-item-meta-avatar': {

          },
      },


    },
  },

}

export default connect(null, null)(injectSheet(tokenStyles)(TokensContainer))
