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
import Spark from 'Components/charts/spark'

const count = 25;

class TokenDetail extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let {tokenId} = this.props

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

class TokenComponent extends React.Component {
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

const tokenStyles = {}

export default connect(null, null)(injectSheet(tokenStyles)(TokenComponent))
