import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from 'Utils/ScrollToTopOnMount'

// import colors from 'Styles/colors'
// import BarChart from "Components/charts/bar"


class DeveloperComponent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <section id="developer" className={classes.developers}>
          <div id="developer-content" className="content">
            <div id="title" className="title-small"><span id='title-dev'>CryptoWise for</span> Developers</div>
            <div id="subtitle" style={{marginBottom: 30}} className="subtitle-big">Own your Networks</div>
            <p>
              The information networks of our time reside within the realms of
              Quantum Computing, Crypto Networking, Artificial Intelligence,
              Cloud/Fog/Edge computing, IoT, Robotics, BioTech, Crispr,
              NanoTech, TransformativeTech, HealthTech, Mixed Reality, RegTech,
              GovTech.
            </p>
            <p>
              Cryptoassets represent the native asset class of information
              networks: setting up a means of both capitalization and
              monetization. As information networks grow and mature, so will our
              understanding of the archetypal tokens in the crypto ecosystem.
            </p>
            <p>
              Our mission is to provide talented technology creators with the
              resources and access to capital that they desperately need to
              create a more secure, private, efficient, effective, and
              prosperous digital economy. One in which people can join together
              and pool their resources for the attainment of prosperity in a way
              that is respectful of their autonomy and individuality.
            </p>
            <p>
              Peer-to-Peer decentralized organization is the most apparent
              alleviation for economic and social stagnation as a result of
              over-organization and lack of data integrity at many large
              platforms. Until personal information rights become as
              universally protected (by law or otherwise) as are property
              rights, it is apparent that significant developments will be
              needed in crypto networking ecosystems.
            </p>
            <p>
              The Legal Entities of the next 5 years will be light-years beyond
              todays status quo in organization and function. Where most popular
              technological trends follow ever-shortening cycles of marketing
              hype, peer-to-peer decentralized networking and distributed algorithmic
              computation are solid long term trends worth following.
            </p>
            <p>
              Achieving the goal of a decentralized distribution of the means of
              technological disruption requires significant contributions from a
              growing community of creative developers; And we need your help.
              Help us curate and enrich the best organizational structure,
              policies, algorithms, systems, and content from our growing community.
            </p>
            <div id='developer-list'>
              <ul style={{marginLeft: 30}}>
                <li>Grow and Share your deep crypto-finance expertise, own your networks</li>
                <li>Access our repository of tools: algorithms, ontologies, systems, strategies, tactics, viewpoints, insights.</li>
                {/* <li>DO THIS! Fill out our Google docs application form |here| and we will get back to you soon.</li> */}

                {/* <li>Carefully selected early contributors who will have access to closed Beta</li> */}
                {/* <li>Crowdsourced token project intelligence</li> */}
                {/* <li>Polkadot, Cosmos (Interop)</li> */}
                {/* <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li> */}
              </ul>

            </div>
            <h5>Like what you read? Share it! Hate what you read? Let us know..</h5>
            <ul style={{marginLeft: 45}}>
              <li><a target="_blank" href="https://www.twitter.com/CryptoWiseAI">@CryptoWiseAI</a> on Twitter™</li>
              <li><a target="_blank" href="https://www.reddit.com/user/CryptoWiseAI">u/CryptoWiseAI</a> on Reddit™</li>
              <li>Visit the <a target="_blank" href="https://medium.com/@cryptowise">@cryptowise</a> Blog on Medium™</li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const devStyles = {
  developers: {
    '& #developer-content': {
      padding: '3ch 1rem 4rem 1rem',
      margin: '0 auto',
      marginBottom: 30,
      maxWidth: '60ch',

      '& #title': {
        lineHeight: '1em',
        marginBottom: '0.4em',
        width: '50%',
        margin: '0 auto',
        textAlign: 'center',
        '& #title-dev': {
          fontSize: '.5em'
        }
      },
      '& #subtitle': {
        // fontSize: '1.4em',
        // lineHeight: '1.8em',
        fontWeight: 'bold',
        letterSpacing: '.1em',
        fontVariant: 'small-caps',
        width: '50%',
        margin: '0 auto',
        textAlign: 'center',
        '& #title-dev': {
          fontSize: '.7em'
        }
      },
      '& h3': {
        textAlign: 'center',
        maxWidth: '50ch'
      },

      '& #developer-list': {
        maxWidth: '50ch',
        padding: 15
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

export default injectSheet(devStyles)(DeveloperComponent)
