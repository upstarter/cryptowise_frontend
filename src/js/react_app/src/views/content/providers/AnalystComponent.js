import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
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
        <div className="dark-wrap">
          <section id="analyst" className={classes.analysts}>
            <div id="analyst-content" >
              <div id='analyst-header'>
                <div id="header-title">
                  <h1 id="title">
                    <span style={{color: `${colors.silver}`}}>The world needs your investment wisdom.</span>
                  </h1>
                </div>
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
                <div id="list-subtitle" className="subtitle-small">What's Included?</div>

                <ul>
                  <li>Free access to ecosystem leading peer-to-peer robo-advisory services where serious investors discover, implement, curate and enrich next-generation decentralized methods of strategic asset analysis.</li>
                  <li>Play a part in leading US crypto-economic research & development in the growing blockchain/defi ecosystem.</li>
                  <li>Access our community wisdom repository: ontologies, systems, strategies, tactics, insights, and viewpoints for investment engineering optimization.</li>
                  {/* <li>Crowdsourced token project intelligence.</li> */}
                  <li>Early contributors get premium access to closed Beta Features.</li>

                  {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}
                </ul>
              </div>
              <div id="social-subtitle" className="subtitle-big">Own Your Networks.</div>

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
    paddingBottom: '20px',
    marginTop: 60,

    "@media (max-width: 860px)": {
      marginTop: 40,
    },

    '& #analyst-content': {
      display: 'grid',
      gridTemplateRows: 'repeat(6, 0.03fr)',
      gridTemplateColumns: '100vw',
      userSelect: 'none',
      filter: 'saturate(1) contrast(1)',

      "@media (max-width: 860px)": {
        marginTop: 25,
        gridTemplateRows: 'repeat(6, .05fr)',
        gridTemplateColumns: '100vw'
      },

      '& #analyst-header': {
        display: 'grid',
        gridTemplateRows: '160px repeat(2, .05fr)',
        justifyItems: 'center',

        "@media (max-width: 860px)": {
          gridTemplateRows: '140px repeat(2, .05fr)',
        },

        '& #header-title': {
          gridRow: 1,
          padding: [0, 10, 0, 10],

          '& #title': {
            justifySelf: 'center',
            fontSize: '4.5rem !important',
            textAlign: 'center',
            maxWidth: '20ch',

            "@media (max-width: 408px)": {
              marginTop: 35,
              fontSize: '3.3rem !important',
              lineHeight: '3rem',
            },


            "@media (min-width: 408px) and (max-width: 860px)": {
              marginTop: 28,
              fontSize: '4.3rem !important',
              lineHeight: '3.8rem',
            },
          },
        },

        '& #words': {
          gridRow: 2,
          gridColumn: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 20,

          "@media (max-width: 860px)": {
            marginTop: 0,
            width: '95vw',
          },

          '& #blurb': {

            '& h5': {
              textAlign: 'center',
              fontSize: '2.5rem',
              color: `${colors.offWhite}`,

              "@media (max-width: 860px)": {
                fontSize: '1.7rem !important',
              },
            },

            '& #participant-list': {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              fontSize: '2.2rem !important',
              '& ul': {
                marginLeft: 45,
                color: `${colors.silver}`,
                listStyleType: 'square',

                '& li': {
                  fontSize: '2.1rem !important',

                  "@media (max-width: 860px)": {
                    fontSize: '1.8rem !important'
                  }
                }
              }
            },

            "@media (max-width: 860px)": {
              fontSize: '2rem !important',
            }
          },
        },

      },
      '& #button': {
        justifySelf: 'center',
        // marginTop: 60,
        '& button': {
          width: 170,
          height: 45,
        },
        "@media (max-width: 860px)": {
          // marginTop: 40,
        },
      },
      '& #analyst-list': {
        maxWidth: '70ch',
        justifySelf: 'center',
        padding: 17,

        "@media (max-width: 860px)": {

        },

        '& #list-subtitle': {
          fontSize: '2rem !important',
          gridRow: 4,
          margin: '2.5rem 0 1.5rem 0',
          letterSpacing: '.1em',
          // fontVariant: 'small-caps',
          textAlign: 'center',
        },
        '& ul': {
          marginLeft: 35,
          fontSize: '1.7rem !important',

          '& li': {
            maxWidth: '45ch',
            color: `${colors.silver}`,
            listStyleType: 'square',
            fontSize: '1.7rem',
            padding: '14px 0',

            "@media (max-width: 860px)": {
              fontSize: '1.7rem !important',
            },
          }
        }
      },

      '& #social-subtitle': {
        gridRow: 4,
        fontSize: '2rem !important',
        letterSpacing: '.1em',
        textAlign: 'center',

        "@media (max-width: 860px)": {
          fontSize: '2rem !important',

        },
      },
      '& #social-blurb': {
        gridRow: 5,
        justifySelf: 'center',
        alignSelf: 'center',
        fontSize: '1.8rem'
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
