import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import AppButton from "Components/base/button/AppButton";
import colors from "Styles/colors"

// import colors from 'Styles/colors'
// import BarChart from "Components/charts/bar"


class AnalystComponent extends React.Component {
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
        <div className="dark-wrap" style={{overflow: 'hidden', position: 'absolute'}}>
          <section id="analyst" className={classes.analysts}>
            <div id="analyst-content" >
              <div id='analyst-header'>
                <h1 id="title" className={classes.title}>
                  <span id='title-dev'>CryptoWise for</span>
                </h1>
                <div id="words" className="slidingVertical">
                  <span>Investment Strategists</span>
                  <span>Data Curators</span>
                  <span>Feature Analysts</span>
                  <span>ML & AI Engineers</span>
                  <span>Financial Analysts</span>
                </div>
                <p id="subtitle">
                  <span>The world needs your investment wisdom.</span>
                </p>
              </div>
              <p id='button'>
                <AppButton
                  type="primary"
                  className={`${
                    this.state.subscribeButtonLoading ? "is-loading" : ''
                  }`}
                  onClick={this.signUpRouteChange}
                  size='default'
                >
                  {" "}
                  Sign Up{" "}
                </AppButton>
              </p>
              <div id='analyst-list'>
                <div id="list-subtitle" className="subtitle-big">What's included?</div>

                <ul>
                  <li>Free access to ecosystem leading peer-to-peer robo-advisory services.</li>
                  <li>Discover, implement, curate and enrich next-generation decentralized methods of strategic asset analysis.</li>
                  <li>Become a leading source of crypto-economic development and investment expertise in the growing blockchain/defi ecosystem.</li>
                  <li>Access our community wisdom repository: ontologies, systems, strategies, tactics, viewpoints, and insights for optimization of your investment hacking activities.</li>
                  <li>Crowdsourced token project intelligence</li>
                  <li>Early contributors will have premium access to closed Beta Features</li>

                  {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}
                </ul>
                <div id="list-subtitle" className="subtitle-big">Own your Networks.</div>

              </div>
              <p id='social-blurb'>Like what you read? Share it! Hate what you read? Let us know..</p>
              <ul id='social-list'>
                <li>On Twitter: <a target="_blank" href="//www.twitter.com/CryptoWiseAI">@CryptoWiseAI</a></li>
                <li>On Reddit: <a target="_blank" href="//www.reddit.com/user/CryptoWiseAI">u/CryptoWiseAI</a></li>
                <li>On Medium: <a target="_blank" href="//medium.com/@cryptowise">@cryptowise</a></li>
              </ul>
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

const devStyles = {
  analysts: {
    minHeight: '110vh',
    overflow: 'auto',
    position: 'absolute',
    '& #analyst-content': {
      display: 'grid',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateColumns: '1fr 600px 1fr',
      justifyItems: 'center',
      alignItems: 'center',
      justifyContent: 'start',
      maxHeight: '30vh',
      userSelect: 'none',
      filter: 'saturate(1) contrast(1)',
      "@media (max-width: 860px)": {
        justifyItems:  'start',
        gridTemplateColumns: '1fr'
      },
      '& #analyst-header': {
        gridRow: 1,
        gridColumn: 2,
        display: 'grid',
        gridTemplateRows: '100px 2fr 1fr',
        justifyItems: 'center',
        '& #title': {
          gridRow: 1,
          // justifySelf: 'start',
          fontSize: '2rem',
        },
        '& #words': {
          gridRow: 2,
          fontSize: '3.5rem !important',
          alignSelf: 'start',
          justifySelf: 'start',
          // textIndent: -8,
          display: 'block !important',
          "@media (max-width: 860px)": {
            fontSize: '2.4rem !important',
            // justifySelf: 'start'
          }
        },
        '& #subtitle': {
          gridRow: 3,
          alignSelf: 'center',
          justifySelf: 'center',
        },
      },
      '& #button': {
        gridRow: 2,
        gridColumn: 2,
        alignSelf: 'center',
        justifySelf: 'center'
      },
      '& #analyst-list': {
        gridRow: 3,
        gridColumn: 2,
        maxWidth: '50ch',
        justifySelf: 'center',
        padding: 15,
        // marginLeft: 30,
        '& #list-subtitle': {
          gridRow: 4,
          margin: '1em 0 1em 0',
          letterSpacing: '.1em',
          fontVariant: 'small-caps',
          textAlign: 'center',
        },
      },
      '& #social-blurb': {
        gridRow: 5,
        gridColumn: 2,
        justifySelf: 'center',
        alignSelf: 'center'
      },
      '& #social-list': {
        gridRow: 6,
        gridColumn: 2,
        justifySelf: 'center',
        alignSelf: 'center',
        '& li a': {
          color: `${colors.origGreen}`,
          filter: 'saturate(2)',
        }
      },


      '@media (min-width: 992px)': {
        // width: '60ch',
      },

      '@media (min-width: 480px and max-width: 992px)': {
        // width: '95vw',
      },
      '@media (max-width:  480px)': {
      }
    }
  },
}

export default injectSheet(devStyles)(AnalystComponent)
