import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount'
// import colors from '../../styles/colors'
// import BarChart from "../../components/charts/bar"


class DeveloperComponent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <ScrollToTopOnMount/>
        <section id="developer" className={classes.developers}>
          <div id="developer-content" className="content">
            <h1>CryptoWise for Developers</h1>
            <h5 className="subtitle">
              The industries of our time are crypto-networking, AI, cloud/fog computing,
              and Robotics.
              CryptoWise is empowering developers to form new knowledge markets
              on the blockchain, which will allow knowledge and truth seekers to
              connect, cooperate, and compete in the crypto-economy with the objective
              of minimizing trusted intermediaries. Achieving this visionary goal requires
              contributions from a growing community of developers; And we need
              your help. We curate the best content from our growing community of
              1+ volunteer analysts and cryptonetwork engineers.
            </h5>
            <h5 className="subtitle">
              Most crypto analyst firms and research houses are on wall street
              and are made up of non-technical MBA or finance graduates.
              Our team is made up of engineers, scientists and researchers steeped
              in the technical complexity that are crypto networks and web native
              software construction.
            </h5>
            <ul>
              <li>Data engineers, open data library, AI, Web Engineers</li>
              <li>Carefully select early contributors who have access to closed Beta, first, last, email, linkedin, twitter, resume</li>
              <li>Crowdsource token project details</li>
              <li>Share you expertise</li>
              <li>Fill out our Google docs application form and we will get back to you soon.</li>
              <li>Polkadot, Cosmos (Interop)</li>
              <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li>
              <li>Like what you read? Share it! Hate what you read? Let me know @MessariCrypto.</li>
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
      padding: '0rem 1rem 1rem 1rem',
      margin: '0 auto',
      maxWidth: '60ch',

      '@media (min-width: 992px)': {
        width: '60ch',
      },

      '@media (min-width: 576px and max-width: 992px)': {
        width: '95vw',
      },

      '@media (min-width: 576px)': {
        width: '95vw',
      },
    }
  }
}

export default injectSheet(devStyles)(DeveloperComponent)
