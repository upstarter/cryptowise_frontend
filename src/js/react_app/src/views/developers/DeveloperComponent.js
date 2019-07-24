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
            <div id="title" className="title-small">CryptoWise for Developers</div>
            <p>
                The industries of our time are crypto-networking, AI, cloud/fog
                computing, and Robotics. CryptoWise is empowering developers to
                form new human and machine serving markets on the blockchain,
                which will allow people to connect, cooperate, and compete in
                the crypto-economy.
            </p>
            <p>
                With the objective of minimizing the  productivity damaging
                effects of the creativity-starved rent-seeking financial
                intermediaries, our mission is to provide talented creators with
                the resources and access to capital that they desperately need
                to create a more efficient, effective, and prosperous world.
            </p>
            <p>
              Peer to Peer disruption is our rebel
              yell. Achieving this goal requires contributions from a growing
              community of developers; And we need your help. We curate the
              best content from our growing community of volunteer analysts
              and cryptonetwork engineers.
            </p>
            <p>
                Most crypto analyst firms and research houses on wall street
                and are made up of non-technical MBA or finance graduates with little
                expertise in the foundations of these new disruptive technologies.
                Our team is made up of engineers, scientists and researchers steeped
                in the technical complexity that are crypto-networking and web native
                software construction.
            </p>
            <div>
              <ul style={{marginLeft: 30}}>
                <li>Open data and software tools library</li>
                <li>Carefully select early contributors who have access to closed Beta</li>
                <li>Crowdsource token project intelligence</li>
                <li>Share you expertise</li>
                <li>Fill out our Google docs application form and we will get back to you soon.</li>
                <li>Polkadot, Cosmos (Interop)</li>
                <li>BDFL Eric Steen, democratically developed software usually doesn't work, just enough authority, engineers making risk decisions, not management</li>
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
