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
        <div className="dark-wrap">
          <section id="analyst" className={classes.analysts}>
            <div id="analyst-content" >
              <div id='analyst-header'>
                <h1 id="title">
                  <span style={{color: `${colors.silver}`}}>The world needs your investment wisdom.</span>
                </h1>
                <h3 id="subtitle" className={classes.title}>
                  <span id='title-dev'>Join the top crypto network for:</span>
                </h3>
                <div id="words" className="slidingVertical">
                  <span>Investment Strategists</span>
                  <span>Data Curators</span>
                  <span>Feature Analysts</span>
                  <span>ML & AI Engineers</span>
                  <span>Financial Analysts</span>
                </div>

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
                  <li>Free access to ecosystem leading peer-to-peer robo-advisory services where serious investors discover, implement, curate and enrich next-generation decentralized methods of strategic asset analysis.</li>
                  <li>Play a part in leading US crypto-economic research & development in the growing blockchain/defi ecosystem.</li>
                  <li>Access our community wisdom repository: ontologies, systems, strategies, tactics, insights, and viewpoints for investment engineering optimization.</li>
                  {/* <li>Crowdsourced token project intelligence.</li> */}
                  <li>Early contributors get premium access to closed Beta Features.</li>

                  {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}
                </ul>
                <div id="list-subtitle" className="subtitle-big">Own your Networks.</div>

              </div>
              <p id='social-blurb'>Share it!</p>
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
    height: '220vh',
    '& #analyst-content': {
      marginTop: 45,
      display: 'grid',
      maxHeight: '120vh',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr 1fr',
      userSelect: 'none',
      filter: 'saturate(1) contrast(1)',

      "@media (max-width: 860px)": {
        gridTemplateColumns: '1fr'
      },

      '& #analyst-header': {
        display: 'grid',
        gridRow: 1,
        gridColumn: 2,
        gridTemplateRows: '105px 2fr 1fr',
        justifyItems: 'center',
        marginBottom: 50,

        "@media (max-width: 860px)": {
          gridTemplateRows: '30px 2fr 1fr',
        },

        '& #title': {
          gridRow: 1,
          justifySelf: 'center',
          fontSize: '4.6rem',
          textAlign: 'center',

          "@media (max-width: 860px)": {
            fontSize: '3.8rem',
          }
        },

        '& #subtitle': {
          justifySelf: 'center',
          fontSize: '2.4rem',
          textAlign: 'center',

          "@media (max-width: 860px)": {
            marginTop: 20,
            fontSize: '2.2rem',
          }
        },

        '& #words': {
          gridRow: 2,
          gridColumn: 1,
          width: '75%',
          marginTop: 80,
          marginLeft: 30,
          display: 'block !important',

          "@media (max-width: 860px)": {
            marginTop: 125,
          },

          '& span': {
            marginTop: 40,
            fontSize: '3.4rem !important',

            "@media (max-width: 860px)": {
              marginTop: 80,
              fontSize: '3.2rem !important',
            },
          }
        },

      },
      '& #button': {
        gridRow: 2,
        gridColumn: 2,
        alignSelf: 'center',
        justifySelf: 'center',
        marginTop: 60,

        "@media (max-width: 860px)": {
          marginTop: 80,
        },
      },
      '& #analyst-list': {
        gridRow: 3,
        gridColumn: 2,
        maxWidth: '50ch',
        justifySelf: 'center',
        padding: 15,
        // marginLeft: 30,
        '& #list-subtitle': {
          fontSize: '3rem !important',
          gridRow: 4,
          margin: '1em 0 0.75em 0',
          letterSpacing: '.1em',
          fontVariant: 'small-caps',
          textAlign: 'center',
        },

        '& ul li': {
          color: `${colors.silver}`,
          listStyleType: 'square',
          fontSize: '2.3rem',
          padding: 14
        }
      },
      '& #social-blurb': {
        gridRow: 5,
        gridColumn: 2,
        justifySelf: 'center',
        alignSelf: 'center',
        fontSize: '2rem'
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
