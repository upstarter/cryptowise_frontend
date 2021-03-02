import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import colors from 'Styles/colors'
// import BarChart from "Components/charts/bar"


class AboutComponent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <section className={classes.about}>
          <div id="about-content" className={classes.about_content}>
            <h1 className={classes.headerTitle}>About</h1>
            <h3 className={classes.descHead}>
              CryptoWise is a collaborative investment ecosystem harnessing the
              wisdom of the crowd and AI to optimize investment outcomes.
            </h3>
            <p className={classes.descBody}>
              We are providing tech saavy investors with network structure
              and roles for automated, scalable investment data curation and
              decision-making. <i> We're harnessing the acquired wisdom and
              innate talent of those most passionate about the future of
              investing and capital formation. </i>
            </p>
            <h1 className={classes.title2}>Vision</h1>
            <h3 className={classes.blockDesc}>
              Research has shown that a collective entity makes a better
              decision as a whole than the most intelligent person in the
              group alone.
            </h3>
            <blockquote
              className="subtitle-small"
              cite="//www.goodreads.com/work/quotes/3250675-the-wisdom-of-crowds">
              Groups are only smart when there is a balance between the
              information that everyone in the group shares and the information
              that each of the members of the group holds privately. It&#39;s
              the combination of all those pieces of independent information,
              some of them right, some of the wrong, that keeps the group wise. -
              The Wisdom of Crowds
            </blockquote>

            <h1 className={classes.title2}>Mission</h1>
            <h3 className={classes.blockDesc}>
              To provide the worlds most informative investment
              research & analysis ecosystem.
            </h3>
            <h1 className={classes.title2}>Values</h1>
            <h3 className={classes.blockDesc}>
              Transparency, Integrity, Openness, Curiosity, Accuracy, Precision,
              Autonomy, Dedication, Compassion, Originality, Fun.
            </h3>
            <h1 className={classes.title2}>Pursuits</h1>
            <ul id="pursuits">
              <li>Crypto Economics</li>
              <li> Trading Strategies & Methods </li>
              <li>Portfolio Management</li>
              <li>Decentralized Applications</li>
              <li>Artificial Intelligence</li>
              <li>Software & Systems Architecture</li>
              <li>Emerging Tech</li>
              <li>Multi-Agent Reinforcement Learning</li>
              <li>Cognitive Computing</li>
              <li>Quantum Computing</li>
            </ul>
            </div>
        </section>
      </React.Fragment>
    )
  }
}

const aboutStyles = {
  about: {
    marginTop: 40,
    width: '100%',
  },
  headerTitle: {
    fontSize: '40px !important',
    fontWeight: '600 !important',
    textAlign: 'center',
  },
  descHead: {
    fontSize: '21px !important',
    color: '#eee !important',
  },
  descBody: {
    color: colors.smoke8,
    maxWidth: '60ch',
    margin: '3.8rem auto 2.4rem auto',
    padding: 10
    // margin: [55, 60, 13, 90],
  },
  title2: {
    color: '#eee',
    fontWeight: '400 !important'
  },
  blockDesc: {
    color: '#bbb',
    color: `${colors.smoke8} !important`,
    fontSize: '1.8rem !important'
  },
  about_content: {
    margin: '100px auto',
    width: '100vw',
    marginBottom: 50,
    maxWidth: '60ch',

    '@media (max-width: 680px)': {
      padding: 20,
      margin: '50px auto',
    },


    '& h3': {
      marginLeft: '1.3rem',
      color: `#ddd`,
      fontSize: '.8rem',
    },

    '& .title': {
      color: `#bbb`,
    },

    '& .paragraph': {
      color: `${colors.offWhite}`,
      lineHeight: '2.2rem !important',
    },

    '& blockquote': {
      color: `#ccc`,
    },

    '& #pursuits': {
      marginLeft: '4rem',
      '& li': {
        listStyleType: 'square',
        color: `#bbb`
      }
    },

    '@media (min-width: 992px)': {
      width: '60ch',
    },

    '@media (min-width: 576px and max-width: 992px)': {
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
