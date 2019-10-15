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
              <p>
                The tide of centralization/decentralization has once again shifted towards
                the edge and decentralization. In the early days of computing, centralized
                mainframes owned and operated by centralized organizations ruled the information
                world. Then the personal computer revolution and client/server arose to
                decentralize power. The cloud brought a whole new level of centralization as
                once again big tech and big data took control of our personal data in giant cloud
                silos to extract every ounce of profit from the precious data.
              </p>
              <p>
                Our organizations are being run on antiquated governance structures. Long
                gone are the fuedal days where heirarchies of centralized power
                are necessary to maintain order. The problem is usually over-organization
                and too much order. The creative human spirit is being crushed by
                the overwhelming weight of beuracratic heirarchical command &
                control. Freedom is restricted and constrained by the well-meaning
                but misguided authority of a select few figures who are tied into
                the aristocratic network at the top wealth centers of society. The top 1%
                own 99% of the wealth and control the masses from centralized vantage points
                which drains the people of their power to create value.
              </p>
              <p>
                Thankfully, the current cycle of decentralization holds great
                promise in bringing a new level of power to the masses.
                The legal entities of the next 5-10 years will be light-years beyond
                todays status quo in organization and function. Where most popular
                technological trends follow ever-shortening cycles of marketing
                hype, peer-to-peer decentralized networking and efficient
                distributed computation are very solid long term trends worth
                following.
              </p>
              <p>
                The information networks of our time reside within the realms of
                Quantum Computing, Crypto Networking, Artificial Intelligence,
                Cloud/Fog/Edge computing, IoT, Robotics, BioTech, CRISPR,
                NanoTech, TransformativeTech, HealthTech, Mixed Reality, RegTech,
                GovTech.
              </p>
              <p>
                Cryptoassets represent the native asset class of information
                networks: setting up a means of both capitalization and
                monetization. As information networks grow and mature, so will our
                understanding of the archetypal tokens in the crypto ecosystem.
              </p>
              <div id='analyst-list'>
                <div id="list-subtitle" className="subtitle-big">What's included?</div>

                <ul>
                  <li>Free training and plug-and-play capabilities to help you access and/or provide ecosystem leading peer-to-peer robo-advisory services.</li>
                  <li>Help discover, implement, curate and enrich next-generation decentralized methods of strategic asset analysis.</li>
                  <li>Become a leading source of crypto expertise in a growing ecosystem.</li>
                  <li>Access our wisdom repository: ontologies, systems, strategies, tactics, viewpoints, and insights for optimization of your investing activities.</li>
                  {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}

                  {/* <li>Carefully selected early contributors who will have access to closed Beta</li> */}
                  {/* <li>Crowdsourced token project intelligence</li> */}
                  {/* <li>Polkadot, Cosmos (Interop)</li> */}
                  {/* <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li> */}
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
