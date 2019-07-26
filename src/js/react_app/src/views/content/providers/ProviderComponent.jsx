import React from "react"
import ReactDOM from "react-dom"
import injectSheet, { jss } from 'react-jss'
import colors from 'Styles/colors'

class ProviderComponent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <section id="provider" className={classes.provider}>
          <div className="scroll-to is-hidden-desktop">
            <a className="icon">
              <i className="fa fa-chevron-down"></i>
            </a>
          </div>
           <div id="provider-text" className="content">
            <h1 className="title provider-heading">
              Seeking Cryptoasset Experts
            </h1>
            <p>
              We're building the Dow Jones of Cryptoassets, and we're seeking cryptoasset
              article writers. Join our wise, talented, and passionate network of crypto
              analysts, researchers, crypto-economists and industry experts — all focused on
              forming the future of cryptoasset technologies. We love sharing insights and
              ideas, filtering fraud, and curing crypto confusion. Our writers help crypto
              investors make better financial decisions by making use of news, research,
              opinion and in-depth discussion on relevant topics of interest.
            </p>
            <br />
            <p>
              We’re building a collaborative investment ecosystem
              harnessing the wisdom of the crowd and AI to optimize individual & collective
              investment outcomes. As an early adopter you have a unique opportunity to become
              an influencer — and attain mindshare — as we cross the chasm to mainstream
              adoption of cryptoassets.
            </p>
            <br />
            <p>
              If you're interested in generating income through analysis of pertinent topics
              in categories relevant to crypto investors, we would love to hear from you.
            </p>
            <br/>
            <h3>How it Works</h3>
            <p>
              If you feel you’re qualified to contribute cryptoasset articles on the topics
              below, submit your email address and we’ll send a link to our contributor
              application. After you apply we’ll get back to you if there’s a good fit.
            </p>
            <br/>
            <p>
              We handle all aspects of payments including chargebacks and refunds,
              you just focus on high quality content for your audience.
            </p>
            <br />
            <h3 className="list-heading">Our Universe of Discourse:</h3>

            <div className="topics columns list">
              <div className="crypto-finance column">
                <ul>
                  <li className="topic">Cryptoeconomics</li>
                  <li className="topic">Decentralized Apps (Dapps)</li>
                  <li className="topic">Cryptocurrencies</li>
                  <li className="topic">Regulatory</li>
                  <li className="topic">Compliance</li>
                  <li className="topic">CryptoCloud</li>
                  <li className="topic">Sustainability</li>
                  <li className="topic">Network Ownership Effects</li>
                  <li className="topic">Social Impact</li>
                  <li className="topic">ERC-XX</li>
                </ul>
              </div>
              <div className="emerging-tech column">
                <ul>
                  <li className="topic">Crypto Investing Strategy</li>
                  <li className="topic">Global Tactical Asset Allocation</li>
                  <li className="topic">Trading Systems & Methods</li>
                  <li className="topic">Decentralized Exchanges</li>
                  <li className="topic">Portfolio Optimization</li>
                  <li className="topic">Game Theory</li>
                  <li className="topic">Mechanism Design</li>
                  <li className="topic">Artificial Intelligence</li>
                  <li className="topic">Security</li>
                  <li className="topic">Internet of Things</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const providerStyles = {
  provider: {
    margin: '0 auto',
    width: '95vw',

    '@media (min-width: 992px)': {
      maxWidth: '70ch',
    },

    '& #provider-text': {
      justifyContent: 'center',
      '& .provider-heading': {
        marginBottom: '30px',
      }
    },

    '& .list-heading': {
      textAlign: 'center',
    },

    '& .topics': {
      '& .topic': {
        listStyleType: 'circle',

        '& .feature-icon': { padding: '7px', },
        '& p': { maxWidth: '300px', }
      }
    }
  }
}

export default injectSheet(providerStyles)(ProviderComponent)
