import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import { api_url, url } from "Utils/consts";

import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'
import AppButton from 'Components/base/button/AppButton'
import { Button } from 'antd';


import colors from 'Styles/colors'
// import BarChart from "Components/charts/bar"


class DeveloperComponent extends React.Component {
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
          <section id="developer" className={classes.developers}>
            <div id="developer-content" className="content">
            <div id="developer-header">
              <div  id="header-title">
                <h1 style={{ margin: '4rem 0 4rem 0', maxWidth: '96vw'}} id="title">
                  <span style={{color: `${colors.silver}` }}>
                    The world needs your WealthTech.
                  </span>
                </h1>
              </div>
              <div style={{marginTop: '3.5rem'}} id="words">
                <div id="blurb">
                  <h5>Become a <span className={classes.become}>Legendary</span>:</h5>
                  <div id="participant-list">
                    <ul>
                      <li>ML & AI Financial Strategist</li>
                      <li>Cryptoasset Specialist</li>
                      <li>Data Scientist</li>
                      <li>Data Engineer</li>
                      <li>Distributed Systems Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p id="button">
              <AppButton
                type="primary"
                className={`${
                  this.state.subscribeButtonLoading ? "is-loading" : ""
                }`}
                onClick={this.signUpRouteChange}
                size="large"
              >
                Sign Up
              </AppButton>
            </p>
            <div id="developer-list">
              <div id="list-subtitle" className="subtitle-small">
                What's Included?
              </div>
              <ul>
                <li>Free training content and plug-and-play capabilities to help you access and/or provide ecosystem leading peer-to-peer crypto-advisory services.</li>
                <li>Help discover, implement, curate and enrich next-generation decentralized methods of strategic asset analysis.</li>
                <li>Become a leading source of crypto (and related technology) expertise in a growing ecosystem.</li>
                <li>Grow and tune your investment capabilities (crypto and traditional).</li>
                <li>Access our wisdom repository: ontologies, systems, strategies, tactics, viewpoints, and insights for optimization of your trading activities.</li>
                {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}

                {/* <li>Carefully selected early contributors who will have access to closed Beta</li> */}
                {/* <li>Crowdsourced token project intelligence</li> */}
                {/* <li>Polkadot, Cosmos (Interop)</li> */}
                {/* <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li> */}
            </ul>
            </div>
            <div id="social-subtitle" className="subtitle-big">
              Own Your Networks.
            </div>
            <p className={classes.discussBtn}>
              <AppButton
                type="primary"
                className={`${
                  this.state.subscribeButtonLoading ? "is-loading" : ""
                }`}
                onClick={this.signUpRouteChange}
                size="large"
              >
                Discuss It
              </AppButton>
            </p>
            <p id="social-blurb">Share it!</p>
            <ul id="social-list">
              <li>
                On Reddit:{" "}
                <a target="_blank" href="//www.reddit.com/user/CryptoWiseAI">
                  u/CryptoWiseAI
                </a>
              </li>
              <li>
                On Twitter:{" "}
                <a target="_blank" href="//www.twitter.com/CryptoWiseAI">
                  @CryptoWiseAI
                </a>
              </li>
              <li>
                On Medium:{" "}
                <a target="_blank" href="//medium.com/@cryptowise">
                  @cryptowise
                </a>
              </li>
            </ul>
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

const devStyles = {
  discussBtn: {
    marginBottom: 21,
    marginTop: 21,
    justifySelf: 'center',
  },
  developers: {
    paddingBottom: "20px",
    marginTop: 50,

    "@media (max-width: 860px)": {
      marginTop: 40,
    },

    "& #developer-content": {
      display: "grid",
      gridTemplateRows: "repeat(6, 0.03fr)",
      gridTemplateColumns: "100vw",
      userSelect: "none",
      filter: "saturate(1) contrast(1)",

      "@media (max-width: 860px)": {
        marginTop: 25,
        gridTemplateRows: "repeat(6, .05fr)",
        gridTemplateColumns: "100vw",
      },

      "& #developer-header": {
        display: "grid",
        gridTemplateRows: "160px repeat(2, .05fr)",
        justifyItems: "center",

        "@media (max-width: 860px)": {
          gridTemplateRows: "140px repeat(2, .05fr)",
        },

        "& #header-title": {
          gridRow: 1,
          alignSelf: 'center',
          
          "& #title": {
            justifySelf: "center",
            fontSize: "4.5rem !important",
            textAlign: "center",
            maxWidth: "20ch",

            "@media (max-width: 408px)": {
              marginTop: 35,
              fontSize: "3.3rem !important",
              lineHeight: "3rem",
            },

            "@media (min-width: 408px) and (max-width: 860px)": {
              marginTop: 28,
              fontSize: "4.3rem !important",
              lineHeight: "3.8rem",
            },
          },
        },

        "& #words": {
          gridRow: 2,
          gridColumn: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: '2.3rem',

          "@media (max-width: 860px)": {
            width: "95vw",
          },

          "& #blurb": {
            "& h5": {
              textAlign: "center",
              fontSize: "2.5rem",
              color: `${colors.offWhite}`,

              "@media (max-width: 860px)": {
                fontSize: "1.7rem !important",
              },
            },

            "& #participant-list": {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "2.2rem !important",
              "& ul": {
                marginLeft: 45,
                color: `${colors.silver}`,
                listStyleType: "square",

                "& li": {
                  fontSize: "2.1rem !important",

                  "@media (max-width: 860px)": {
                    fontSize: "1.8rem !important",
                  },
                },
              },
            },

            "@media (max-width: 860px)": {
              fontSize: "2rem !important",
            },
          },
        },
      },
      "& #button": {
        justifySelf: "center",
        "& button": {
          maxWidth: 150,
        },
        "@media (max-width: 860px)": {
          // marginTop: 40,
        },
      },
      "& #developer-list": {
        maxWidth: "70ch",
        justifySelf: "center",

        "@media (max-width: 860px)": {},

        "& #list-subtitle": {
          fontSize: "2rem !important",
          gridRow: 4,
          margin: "2.5rem 0 1.5rem 0",
          letterSpacing: ".1em",
          textAlign: "center",
        },
        "& ul": {
          marginLeft: 35,
          fontSize: "1.7rem !important",

          "& li": {
            maxWidth: "45ch",
            color: `${colors.silver}`,
            listStyleType: "square",
            fontSize: "1.7rem",
            padding: "14px 0",

            "@media (max-width: 860px)": {
              fontSize: "1.7rem !important",
            },
          },
        },
      },

      "& #social-subtitle": {
        gridRow: 4,
        fontSize: "2rem !important",
        letterSpacing: ".1em",
        textAlign: "center",

        "@media (max-width: 860px)": {
          fontSize: "2rem !important",
        },
      },
      "& #social-blurb": {
        justifySelf: "center",
        alignSelf: "center",
        fontSize: "1.8rem",
        marginTop: 21,

      },
      "& #social-list": {
        justifySelf: "center",
        alignSelf: "center",
        // margin: [30,0,20,0],

        "& li a": {
          color: `${colors.link}`,
          filter: "saturate(2)",
        },
      },
    },
  },
}

export default injectSheet(devStyles)(DeveloperComponent)
