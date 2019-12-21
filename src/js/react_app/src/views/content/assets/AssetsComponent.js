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
              <Affix offsetTop={50}>
                <div id="asset-items-heading">
                  <div id="asset-blurb">
                    <div id="asset-blurb-intro">
                      <h3 id="blurb-title">The Network is the Asset. </h3>
                      <p id="blurb">
                        Get to know cryptoassets with strong fundamentals. Master quantamentalism, or explore deep technical analysis.
                        Add 3 to your <Link style={{color: `${colors.origGreen}`}} to='/portfolio'>WiseHive portfolio</Link> to gain preferred access.
                      </p>
                    </div>
                  </div>
                </div>
              </Affix>
              <div id="asset-column">
                <List
                  className="item-list"
                  loading={initLoading}
                  grid={{
                    gutter: 0,
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
    marginBottom: -17,
    background: `${colors.tertiaryDark}`,
    color: `${colors.yellow}`,
    '& .ant-card-head-title': {
      color: `${colors.sproutGreen}`
    }
  },

  assets: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    margin: [60,0,0,0]
  },

  assetItems: {
    display: 'grid',
    maxWidth: 800,

    '@media (max-width: 480px)': {
      gridTemplateRows: '175px 9fr',
      gridTemplateAreas: '"header" "content"',
    },

    '@media (min-width: 860px)': {
      gridTemplateRows: '150px 9fr',
      gridTemplateAreas: '"header" "content"',
    },

    '& #asset-items-heading': {
      gridArea: 'header',
      justifyItems: 'center',
      zIndex: 1,
      color: '#fff !important',
      background: `${colors.primaryDark}`,

      '@media (max-width: 860px)': {

      },

      '@media (min-width: 860px)': {

      },

      '& #asset-blurb': {

        '@media (max-width: 860px)': {
          gridColumn: '1 / 3',
          gridRow: '1 / 2',
        },

        '@media (min-width: 860px)': {
          gridColumn: '1 / 3',
          gridRow: '1 / 2',
        },

        '& #asset-blurb-intro': {
          padding: 5,

          '& #blurb-title': {
            fontSize: '2.8rem !important',
            lineHeight: '3.3rem !important',
            padding: [20, 20, 0, 20],
            color: `${colors.lightBlack} !important`,

            '@media (max-width: 860px)': {
              fontSize: '2rem !important',
            },
          },

          '& p': {
            color: `${colors.silver}`,
            padding: 'none !important',

            '@media (max-width: 860px)': {
              fontSize: '1.5rem !important',
            },
          },
        },
      },
    },

    '& #asset-column': {

      '& .item-list': {
        gridArea: 'content',
        gridRow: '2 / 3',
        gridColumn: '1 / 3',
        color: `${colors.offWhite} !important`,

        '@media (max-width: 860px)': {
          // zIndex: 10,
          // marginTop: '130px !important',
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
    }
  },
}

export default injectSheet(assetStyles)(AssetsComponent)
