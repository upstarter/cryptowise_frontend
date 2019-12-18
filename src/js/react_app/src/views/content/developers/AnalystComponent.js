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
                <div id="words">
                  <div id="blurb">
                    <h5>
                      Join the top crypto network for:
                    </h5>
                    <div id='participant-list'>
                      <ul>
                        <li>Investment Strategists</li>
                        <li>Data Curators</li>
                        <li>Feature Analysts</li>
                        <li>ML & AI Engineers</li>
                        <li>Financial Analysts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p id='button'>
                <AppButton
                  type="primary"
                  className={`${
                    this.state.subscribeButtonLoading ? "is-loading" : ''
                  }`}
                  onClick={this.signUpRouteChange}
                  size='large'
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
                <div id="social-subtitle" className="subtitle-big">Own your Networks.</div>

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
    marginTop: 70,
    paddingBottom: '10%',
    '& #analyst-content': {
      display: 'grid',
      gridTemplateRows: 'repeat(6, 0.03fr)',
      gridTemplateColumns: '95vw',
      userSelect: 'none',
      filter: 'saturate(1) contrast(1)',

      "@media (max-width: 860px)": {
        gridTemplateRows: 'repeat(6, .05fr)',
        gridTemplateColumns: '100vw'
      },

      '& #analyst-header': {
        display: 'grid',
        gridTemplateRows: '50px repeat(2, .05fr)',
        justifyItems: 'center',
        marginBottom: 20,

        "@media (max-width: 860px)": {
          gridTemplateRows: '50px repeat(2, .05fr)',
        },

        '& #title': {
          gridRow: 1,
          justifySelf: 'center',
          fontSize: '4.6rem',
          textAlign: 'center',

          "@media (max-width: 860px)": {
            fontSize: '4.6rem !important',
            lineHeight: '4rem',
          }
        },

        '& #words': {
          gridRow: 2,
          gridColumn: 1,
          width: '95vw',
          marginTop: 120,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',

          "@media (max-width: 860px)": {
            marginTop: 150,
          },

          '& #blurb': {
            fontSize: '1.7rem !important',
            '& h5': {
              textAlign: 'center',
              fontSize: '2rem',
              color: `${colors.offWhite}`
            },

            '& #participant-list': {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              '& ul': {
                marginLeft: 45,
                color: `${colors.silver}`,
                listStyleType: 'square'
              }
            },

            "@media (max-width: 860px)": {
              fontSize: '2rem !important',
            }
          },

          '& span': {
            fontSize: '3.4rem !important',

            "@media (max-width: 860px)": {

              width: '95vw',
              fontSize: '2.7rem !important',
            },
          }
        },

      },
      '& #button': {
        justifySelf: 'center',
        // marginTop: 60,

        "@media (max-width: 860px)": {
          // marginTop: 40,
        },
      },
      '& #analyst-list': {
        maxWidth: '70ch',
        justifySelf: 'center',
        padding: 17,
        marginLeft: 30,

        "@media (max-width: 860px)": {

        },

        '& #list-subtitle': {
          fontSize: '3rem !important',
          gridRow: 4,
          margin: '5rem 0 1rem 0',
          letterSpacing: '.1em',
          fontVariant: 'small-caps',
          textAlign: 'center',
        },

        '& #social-subtitle': {
          gridRow: 4,
          fontSize: '3rem !important',
          margin: '5rem 0 0 0',
          letterSpacing: '.1em',
          fontVariant: 'small-caps',
          textAlign: 'center',

          "@media (max-width: 860px)": {
            marginTop: 40,
            fontSize: '2.5rem !important',
            margin: '0 0 0 -4rem',

          },
        },

        '& ul li': {
          color: `${colors.silver}`,
          listStyleType: 'square',
          fontSize: '2.3rem',
          padding: '14px 0'
        }
      },
      '& #social-blurb': {
        gridRow: 5,
        justifySelf: 'center',
        alignSelf: 'center',
        fontSize: '2rem'
      },
      '& #social-list': {
        gridRow: 6,
        justifySelf: 'center',
        alignSelf: 'center',
        '& li a': {
          color: `${colors.origGreen}`,
          filter: 'saturate(2)',
        }
      },
    }
  },
}

export default injectSheet(devStyles)(AnalystComponent)
