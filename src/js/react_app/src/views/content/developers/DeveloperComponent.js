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
              Cryptoassets represent the native asset class to information
              networks: setting up a means of both capitalization and
              monetization. As information networks grow and mature, so will our
              understanding of the archetypal tokens in the crypto ecosystem.
            </p>
            <p>
              The high-tech ecosystems of our time are Crypto Networking,
              Artificial Intelligence, Cloud/Fog computing, Robotics, BioTech,
              NanoTech, TransformativeTech, HealthTech, Mixed Reality, IoT, and
              RegTech, GovTech. CryptoWise is empowering developers to form useful
              decentralized market networks.
            </p>
            <p>
              Where popular technological trends follow ever-shortening cycles
              of marketing hype and often lack true disruption, decentralization
              stands as the most readily available solution to allevate the
              important problems of corruption, over-organization and additional
              effects of over-population. These evolutionary outcomes are known
              to have a constraining effect on personal freedom.
            </p>
            <p>
              Corruption has a trust undermining effect by restricting peoples
              ability to openly connect, cooperate, and compete in our
              ever-accelerating, hyper-efficient, rapidly democratizing global
              economy. Blockchain stands strong to fix the chasm of trust via
              transparency and sound scientific verifiability in contractual
              obligations and transactional integrity.
            </p>
            <p>
              With the objective of minimizing the cultural and productivity
              damaging effects of over-organized and creativity-starved
              rent-seeking financial intermediaries, our mission is to provide
              talented fintech creators with the resources and access to capital
              that they desperately need to create a more efficient, effective,
              and prosperous economy. One in which people can join together and
              pool their resources for the attainment of prosperity in a way
              that is respectful of their autonomy and individuality, rather
              than subordinate to the needs of a dis-combobulated heirarchical
              cluster of busy-ness with a do-gooder mentality.
            </p>
            <h3 className='subtitle-big'>
              Peer-to-Peer disruption architecture is our rebel yell.
            </h3>
            <p>
              Achieving the goal of a decentralized and equinimitous distribution
              of the means of technological disruption requires significant contributions from a growing
              community of developers; And we need your help. Help us curate and enrich the
              best algorithms and content from our growing community of volunteer analysts
              and crypto-network engineers and researchers.
            </p>
            <p>
              Most crypto analyst firms and research houses on wall street are made up of
              highly non-technical MBA or finance graduates with little
              expertise in the foundations of our new disruptive technologies.
              Our team is made up of engineers, scientists and researchers steeped
              in the technical complexity that are crypto-networking and
              web software engineering.
            </p>
            <div id='developer-list'>
              <ul style={{marginLeft: 30}}>
                <li>Grow and Share your deep crypto-finance expertise, own your network</li>

                <li>Access our repository of tools</li>
                {/* <li>Carefully selected early contributors who will have access to closed Beta</li> */}
                <li>Crowdsourced token project intelligence for early adopters</li>
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
      padding: '3ch 1rem 1rem 1rem',
      margin: '0 auto',
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
