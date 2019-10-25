import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
// import colors from 'Styles/colors'
// import BarChart from "Components/charts/bar"


class AboutComponent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <section id="about" style={{width: '100%'}}>
          <div id="about-content" className={classes.about_content}>
            <h1 className="title">About</h1>
            <h3 className="subtitle-big">
              CryptoWise is a collaborative investment ecosystem harnessing the
              wisdom of the crowd and AI to optimize investment outcomes.
            </h3>
            <p className="paragraph">
              We are connecting investors with next-generation financial
              technology capabilities for automated, scalable data
              gathering, insight generation, and investment decision-making. <i> We're
              harnessing the acquired wisdom and innate talent of those most
              passionate about the future of investing and capital formation.
              </i>
            </p>
            <h1 className="title">Vision</h1>
            <h3 className="subtitle-big">
              Research has shown that a collective entity makes a better
              decision as a whole than the most intelligent person in the
              group alone.
            </h3>
            <blockquote
              className="subtitle-small"
              cite="//www.goodreads.com/work/quotes/3250675-the-wisdom-of-crowds">
              Groups are only smart when there is a balance between the
              information that everyone in the group shares and the information
              that each of the members of the group holds privately. It&#39;s the
              combination of all those pieces of independent information, some of
              them right, some of the wrong, that keeps the group wise. - The Wisdom of Crowds
            </blockquote>

            <h1 className="title">Mission</h1>
            <p>
              To provide the worlds most informative crowdsourced investment
              research & analysis ecosystem.
            </p>
            <h1 className="title">Values</h1>
            <p>
              Transparency, Integrity, Openness, Curiosity, Accuracy, Precision,
              Autonomy, Dedication, Compassion, Originality, Fun.
            </p>
            <h1 className="title">Pursuits</h1>
            <p>
              Crypto Economics, Trading Strategies & Methods, Portfolio
              Management, Decentralized Applications, Artificial Intelligence,
              Software & Systems Architecture, Emerging Tech, Multi-Agent Reinforcement
              Learning, Cognitive Computing, Quantum Computing.
            </p>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const aboutStyles = {
  about_content: {
    padding: '0rem 1rem 2rem 1rem',
    margin: '0 auto',
    marginBottom: 50,
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

    '& .team-image': {
      '& .image': {
        border: 'double .4rem #AEBED4',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
      }
    }
  }
}

export default injectSheet(aboutStyles)(AboutComponent)
