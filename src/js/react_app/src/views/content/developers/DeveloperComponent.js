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
            <div id="title" className="subtitle-big">Own the Network</div>
            <div id="title" className="subtitle-small">Like hacker news, but problems only...</div>
            <p>
              Cryptoassets represent the native asset
              class to information networks: setting up a means of both
              capitalisation and monetisation. As information networks grow and
              mature, so will our understanding of the archetypal tokens in the
              crypto ecosystem.
            </p>
            <p>
                The high-tech industries of our time are crypto-networking,
                Artificial Intelligence, cloud/fog computing, robotics, and
                bio-tech. CryptoWise is empowering developers to form new
                decentralized networks. Our vision is to help alleviate problems of
                over-population and over-organization, which has a constraining
                effect on personal freedom and which optimizes peoples' ability to
                connect, cooperate, and compete in our new globally connected,
                hyper-efficient, rapidly accelerating crypto-economy.
            </p>
            <p>
                With the objective of minimizing the cultural and productivity damaging
                effects of the creativity-starved rent-seeking financial
                intermediaries, our mission is to provide talented creators with
                the resources and access to capital that they desperately need
                to create a more efficient, effective, and prosperous world in which people
                can join together and pool their resources for the attainment of prosperity in
                a way that is respectful of eachothers' autonomy and innate talents.
            </p>
            <p>
              Peer-to-Peer disruption architecture is our rebel
              yell. Achieving the goal of a decentralized and equinimitous distribution
              in the means of technological production requires significant contributions from a growing
              community of developers; And we need your help. Help us curate the
              best algorithms and content from our growing community of volunteer analysts
              and crypto-network engineers and researchers.
            </p>
            <p>
              Most crypto analyst firms and research houses on wall street are made up of
              highly non-technical MBA or finance graduates with little
              expertise in the foundations of our new disruptive technologies.
              Our team is made up of engineers, scientists and researchers steeped
              in the technical complexity that are crypto-networking and
              web software engineering. Join Us!
            </p>
            <div>
              <ul style={{marginLeft: 30}}>
                <li>Grow and Share your crypto-finance expertise, own your network</li>

                <li>Access our repository of ultra-modern data and software tools</li>
                <li>Carefully selected early contributors who will have access to closed Beta</li>
                <li>Crowdsource token project intelligence for early adopters</li>
                <li>Fill out our Google docs application form |here| and we will get back to you soon.</li>
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
