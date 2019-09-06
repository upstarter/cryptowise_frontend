import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import AppButton from "Components/base/button/AppButton";

// import colors from 'Styles/colors'
// import BarChart from "Components/charts/bar"


class DataScientistComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribeButtonLoading: false,
    };
    this.signUpRouteChange = this.signUpRouteChange.bind(this);
  }

  signUpRouteChange() {
    let path = '/signup';
    this.props.history.push(path);
  }
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <div className="dark-wrap">
          <section id="data-scientist" className={classes.data_scientists}>
            <div id="data-scientist-content" className="content">
              <div id='data-scientist-header'>
                <div id="title" className="title-small"><span id='title-dev'>CryptoWise for</span> Data Scientists</div>
                <p style={{textAlign: 'center'}}>
                  <span style={{ fontSize: '1.2em'}}>The world needs your investment wisdom.</span>
                </p>

                <p style={{textAlign: 'center'}}>
                  <AppButton
                    type="primary"
                    className={`${
                      this.state.subscribeButtonLoading ? "is-loading" : ''
                    }`}
                    onClick={this.signUpRouteChange}
                    size='medium'
                  >
                    {" "}
                    Sign Up{" "}
                  </AppButton>
                </p>
              </div>
              <div id='data-scientist-list'>
                <div id="subtitle" className="subtitle-big">What's included?</div>

                <ul style={{marginLeft: 30}}>
                  <li>Free training and plug-and-play capabilities to help you access and/or provide ecosystem leading peer-to-peer robo-advisory services.</li>
                  <li>Help discover, implement, curate and enrich next-generation decentralized methods of strategic asset analysis.</li>
                  <li>Become a leading source of crypto (and related technology) expertise in a growing ecosystem.</li>
                  <li>Grow and tune your investment capabilities (crypto and traditional).</li>
                  <li>Access our wisdom repository: ontologies, systems, strategies, tactics, viewpoints, and insights for optimization of your investing activities.</li>
                  {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}

                  {/* <li>Carefully selected early contributors who will have access to closed Beta</li> */}
                  {/* <li>Crowdsourced token project intelligence</li> */}
                  {/* <li>Polkadot, Cosmos (Interop)</li> */}
                  {/* <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li> */}
                </ul>
                <div id="subtitle" className="subtitle-big">Own your Networks.</div>

              </div>
              <p>Like what you read? Share it! Hate what you read? Let us know..</p>
              <ul style={{margin: '0 auto', width: '50%', listStyleType: 'none'}}>
                <li>On Twitter: <a target="_blank" href="https://www.twitter.com/CryptoWiseAI">@CryptoWiseAI</a></li>
                <li>On Reddit: <a target="_blank" href="https://www.reddit.com/user/CryptoWiseAI">u/CryptoWiseAI</a></li>
                <li>On Medium: <a target="_blank" href="https://medium.com/@cryptowise">@cryptowise</a></li>
              </ul>
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

const devStyles = {
  data_scientists: {
    '& #data-scientist-content': {
      margin: '0 auto',
      padding: 20,
      paddingBottom: 150,
      maxWidth: '60ch',
      userSelect: 'none',
      filter: 'saturate(1) contrast(1)',

      '& #title': {
        fontSize: '3.5em',
        lineHeight: '1em',
        width: '50%',
        textAlign: 'center',
        margin: '0 auto',
      
        '& #title-dev': {
          fontSize: '.6em'
        }
      },
      '& #subtitle': {
        // fontSize: '1.4em',
        // lineHeight: '1.8em',
        // fontWeight: 'bold',
        letterSpacing: '.1em',
        fontVariant: 'small-caps',
        textAlign: 'center',
        margin: '0 0 15px 0',
        textAlign: 'center',
        '& #title-dev': {
          fontSize: '.7em'
        }
      },
      '& h3': {
        textAlign: 'center',
        maxWidth: '50ch'
      },

      '& #data-scientist-header': {
        maxWidth: '50ch',
        marginBottom: '20px'
      },

      '& #data-scientist-list': {
        maxWidth: '50ch',
        // padding: 15
      },

      '@media (min-width: 992px)': {
        width: '60ch',
      },

      '@media (min-width: 480px and max-width: 992px)': {
        width: '95vw',
      },

      '@media (min-width:  480px)': {
        width: '95vw',
      },
    }
  }
}

export default injectSheet(devStyles)(DataScientistComponent)
