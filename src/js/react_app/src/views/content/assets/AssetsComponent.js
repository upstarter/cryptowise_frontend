import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url } from 'Utils/consts'
import { List, Card, Button, Rate, Icon, Typography, Divider, Affix } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'
import * as CryptoLogos from 'Images/crypto-logos'


const count = 20;
const dataUrl = `//${api_url}/assets`;

class AssetsComponent extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    page: 1,
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
    const url = `${api_url}/tokens?per_page=${count}&page=${this.state.page}`
    const data = {
      withCredentials: true,
      credentials: 'include'
    };

    const cookies = new Cookies();
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

          <section id="asset" className={classes.assets}>

            <div id="asset-items" className={classes.assetItems}>
              <Affix offsetTop={70}>
                <div id="asset-items-heading">
                  {/* <Button className="float" onClick={this.showModal} shape="circle" icon="plus" size='large' /> */}
                  <div id="asset-blurb">
                    <div id="asset-blurb-intro">
                      <div id='blurb-subtitle' className='subtitle-small'>
                        <span id="blurb-title">The Network is the Asset. </span>
                        <span id="blurb" className=''>
                          Get to know cryptoassets with strong fundamentals. Master quantamentalism, or explore deep technical analysis.
                          Add 3 to your <Link style={{color: 'green'}} to='/portfolio'>WiseHive portfolio</Link> to gain preferred access.
                          {/* <Link style={{color: 'green'}} to='/portfolio'> Get Started Now</Link> */}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </Affix>
              <div className="asset-column">
                <List
                  className="item-list"
                  loading={initLoading}
                  grid={{
                    gutter: 5,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 1,
                    xxl: 1,
                  }}
                  itemLayout="horizontal"
                  // loadMore={loadMore}
                  dataSource={list}
                  renderItem={item => (
                    <List.Item>
                      <Card
                        className={classes.card}
                        title={item.name}
                        >
                        <img style={{ float: 'left',height: 60, width: 60}} alt={CryptoLogos[item.symbol]} src={CryptoLogos[item.symbol.toLowerCase()]} />
                        <p style={{marginLeft: 90}} className='item-name'>{item.description}</p>

                      </Card>
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

const assetStyles = {
  modal: {
    filter: 'invert(0)',
    '& .ant-modal-content': {
      color: 'red !important',
      textDecoration: 'none !important',
    }
  },
  card: {
    background: `${colors.tertiaryDark}`,
    color: `${colors.offWhite}`,
    '& .ant-card-head-title': {
      color: `${colors.sproutGreen}`
    }
  },


  assets: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    margin: [70,0,0,0]
  },

  assetItems: {
    display: 'grid',
    maxWidth: 800,

    '@media (max-width: 860px)': {
      gridTemplateRows: '180px 9fr',
      gridTemplateAreas: '"header" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateRows: '100px 9fr',
      gridTemplateAreas: '"header" "content"',
    },

    '& #asset-items-heading': {
      gridArea: 'header',
      justifyItems: 'center',
      alignItems: 'center',
      zIndex: 1,
      padding: 5,
      color: '#fff !important',
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',

      '@media (max-width: 860px)': {
      },

      '@media (min-width: 860px)': {

      },

      '& #asset-blurb': {
        padding: [0, 20, 0, 20],

        '@media (max-width: 860px)': {
          gridColumn: '1 / 3',
          gridRow: '1 / 2',

          '& #blurb-title': {
            background: `${colors.primaryDark}`,
            fontSize: '2rem',
            letterSpacing: '0.5rem',
            color: '#fff',
            lineHeight: '1em',
          },
        },

        '@media (min-width: 860px)': {
          gridColumn: '1 / 3',
          gridRow: '1 / 2',
        },

        '& #asset-blurb-intro': {
          fontSize: 13,
          '& p': { padding: 'none !important'},


          '& #blurb-title': {
            fontSize: '2.7rem !important',
            color: `${colors.offWhite} !important`,
          },
          '& #blurb-subtitle': {
            color: `${colors.offWhite} !important`,
            marginBottom: 10,
          }
        },
      },

    },

    '& .item-list': {
      gridArea: 'content',
      gridRow: '2 / 3',
      gridColumn: '1 / 3',
      color: `${colors.offWhite} !important`,

      '@media (max-width: 400px)': {
        zIndex: 10,
      },

      '& #list-item-meta': {
        '& p': { color: `${colors.offWhite}`},
        '& a': { color: `${colors.offWhite}`},
        '& .ant-list-item-meta-content': {
           color: `${colors.offWhite} !important`,
           '& #main-content': {
             '& .item-name': {margin: [0,0,0,30], color: `${colors.offWhite}`},
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

export default injectSheet(assetStyles)(AssetsComponent)
