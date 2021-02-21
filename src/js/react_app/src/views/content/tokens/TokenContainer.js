import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import { api_url, url } from 'Utils/consts'
import { List, Avatar, Button, Affix, Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;
import axios from "axios";
import { connect } from "react-redux";
import { createProposal } from "Redux/tokens";
import colors from "Styles/colors"
import Cookies from 'universal-cookie';
import setAuthToken from 'Services/auth/setAuthToken'

const count = 25;

class TokenDetail extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let {tokenId} = this.props
    console.log('tid',tokenId)
    const {children, description, name, symbol, id} = token

    return (
      <div className='token-description'>
        <div className='description'>
          {description}
        </div>
        <div className='token-details'>

          <div className='token-url'>
            <Button href={`${url}/tokens/${id}`} type="secondary">View {symbol}</Button>
          </div>
        </div>
      </div>
    )
  }
}

class TokenContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    token: null,
    data: [],
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true,
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
        <a
          style={{fontSize: 24, color: colors.lighterBlack, fontWeight: 700}}
          href={`/tokens/${token.id}`}
        >
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

    return (
      <div className="dark-wrap">
        <React.Fragment>
          <ScrollToTopOnMount />
          <section id="token" className={classes.tokens}>
            <TokenDetail token={token}/>
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
      zIndex: 10,
      minHeight: 40,
      paddingTop: 5,
      margin: [0,0,0,0],
      color: '#fff !important',
      background: `${colors.primaryDark}`,
      '-webkit-perspective': 1000,
      '-webkit-backface-visibility': 'hidden',

      '& .float:hover': {
        '-webkit-animation': 'none'
      },

      '& .blurb-title': {
        // fontSize: '3.8rem !important',
        // lineHeight: '1.7rem !important',
        color: `${colors.yellow} !important`,
        fontSize: 30,
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

        '& #blurb': {
          margin: [0,0,0,0],
          color: `${colors.offWhite}`,
          fontSize: '16px',
          padding: 0,
        },
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
          color: `${colors.smoke}`,

          '& .description': {
            margin: [0,0,7,0],
            color: `${colors.smoke}`
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

export default connect(null, null)(injectSheet(tokenStyles)(TokenContainer))
