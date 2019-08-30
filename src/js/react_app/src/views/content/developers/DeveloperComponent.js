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
            <div id="title" className="title-small">CryptoWise for Developers</div>
            <div id="title" style={{marginBottom: 30}} className="subtitle-big">Own your Networks</div>
            <p>
              The information networks of our time reside within the realms of
              Quantum Computing, Crypto Networking, Crispr, Artificial
              Intelligence, Cloud/Fog computing, Robotics, BioTech, NanoTech,
              TransformativeTech, HealthTech, Mixed Reality, IoT, and RegTech,
              GovTech. CryptoWise is devoted to empowering developers in order
              to form useful decentralized market networks to solve critically
              important problems in these ecosystems.
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
              create a more efficient, effective, and prosperous digital
              economy. One in which people can join together and pool their
              resources for the attainment of prosperity in a way that is
              respectful of their autonomy and individuality.
            </p>
            <h3 className='subtitle-big'>
              Peer-to-Peer decentralized organization is the alleviation for
              economic stagnation as a result of over-organization. The Legal
              Entities of the near future will be light-years beyond todays status quo.
            </h3>
            <p>
              Where most popular technological trends follow ever-shortening
              cycles of marketing hype, decentralized networks stand as the
              most readily available solution to problems of over-organization,
              over-population, corruption, and inequality, all of which
              constrain individual and group freedoms.
            </p>
            <p>
              Achieving the goal of a decentralized distribution of the means of
              technological disruption requires significant contributions from a
              growing community of creative developers; And we need your help.
              Help us curate and enrich the best algorithms and content from our
              growing community of volunteer analysts and crypto-network
              engineers and researchers.
            </p>
            <div id='developer-list'>
              <ul style={{marginLeft: 30}}>
                <li>Grow and Share your deep crypto-finance expertise, own your networks</li>
                <li>Access our repository of tools: algorithms, ontologies, systems, strategies, tactics, viewpoints, insights.</li>
                {/* <li>Carefully selected early contributors who will have access to closed Beta</li> */}
                {/* <li>Crowdsourced token project intelligence</li> */}
                {/* <li>Fill out our Google docs application form |here| and we will get back to you soon.</li> */}
                {/* <li>Polkadot, Cosmos (Interop)</li> */}
                {/* <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li> */}
                <li>Like what you read? Share it! Hate what you read? Let us know @CryptoWiseAI.</li>
              </ul>
            </div>
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
        width: '50%',
        margin: '0 auto',
        textAlign: 'center'
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
