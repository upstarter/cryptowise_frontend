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
          <section id="federation" className={classes.federations}>
            <div id="federation-content" >
              <div id='federation-header'>
                <div id="header-title">
                  <h2 id="title">
                    Deep tech cryptoasset trading tools and data.
                  </h2>
                </div>
                <div id="words">
                  <div id="blurb">
                    <p>
                      WiseGroups give you the ability to collaborate on relevant topics with friends and
                      other members of the cryptowise ecosystem about any topic you can imagine and create goals
                      with eachother. Advertise your wares and market your financial services.
                      Maximize <a>Reed's Law</a> by creating sub-networks within the larger network.
                      Future versions will include individual contributions from ecosystem members
                      including news, article submissions, group discussions, and coordinated contributions from
                      professional ecosystem peers:
                    </p>
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
                  Create WiseGroup{" "}
                </AppButton>
              </p>

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
  federations: {
    paddingBottom: '20px',
    marginTop: 100,

    "@media (max-width: 860px)": {
      marginTop: 70,
    },

    '& #federation-content': {
      display: 'grid',
      gridTemplateRows: '0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr',
      gridTemplateColumns: '100vw',
      userSelect: 'none',
      filter: 'saturate(1) contrast(1)',
      width: '100vw',

      "@media (max-width: 860px)": {
        gridTemplateRows: 'repeat(6, .03fr)',
        gridTemplateColumns: '90vw'
      },

      '& #federation-header': {
        gridRow: 1,
        justifyItems: 'center',
        width: '100vw',

        '& #header-title': {
          width: '100vw',
          padding: 13,
          alignContent: 'center',
          gridRow: 2,
          justifyItems: 'center',
          '& #title': {
            justifySelf: 'center',
            fontSize: '3.0rem !important',
            textAlign: 'center',
            color: colors.darkYellow,
            height: 50,

            "@media (max-width: 408px)": {
              marginTop: 25,
              padding: 0,
              fontSize: '3.3rem !important',
              lineHeight: '3rem',
            },
          },
        },

        '& #words': {
          gridRow: 3,
          gridColumn: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100vw',
          "@media (max-width: 860px)": {
            maxWidth: '98vw',
          },
          "@media (max-width: 408px)": {
            maxWidth: '100vw',

          },

          '& #blurb': {
            margin: [0,0,0,0],
            '& p': {
              width: '100vw',
              fontSize: '2rem',
              maxWidth: '70ch',
              margin: [10,0,5,15],
              padding: 15,
              color: `${colors.lighterBlack}`,
              "@media (max-width: 860px)": {
                fontSize: '1.4rem !important',
                maxWidth: '70ch',
              },
            },

            '& #participant-list': {
              display: 'flex',
              margin: [0,0,0,0],
              flexDirection: 'row',
              justifyContent: 'center',
              fontSize: '2.2rem !important',
              '& ul': {
                color: `${colors.smoke}`,

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
        marginLeft: 10,
        '& button': {
          width: 180,
          height: 55,
        },
        "@media (max-width: 860px)": {
          // marginTop: 40,
        },
      },
      '& #federation-list': {
        maxWidth: '70ch',
        justifySelf: 'center',
        // padding: 17,

        "@media (max-width: 860px)": {

        },

        '& #list-subtitle': {
          fontSize: '2rem !important',
          gridRow: 4,
          margin: '2.5rem 0 1.5rem 0',
          letterSpacing: '.1em',
        },
        '& ul': {

          fontSize: '1.7rem !important',

          '& li': {
            maxWidth: '60ch',
            color: `${colors.smoke}`,
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
        '& li': {
          listStyleType: 'none'
        },
        '& li a': {
          color: `${colors.sproutGreen}`,
          filter: 'saturate(2)',
        }
      },
    }
  },
}

export default injectSheet(devStyles)(AnalystComponent)
