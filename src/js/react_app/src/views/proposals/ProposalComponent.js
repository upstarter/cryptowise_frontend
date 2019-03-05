import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, { jss } from 'react-jss'
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount'

//import colors from '../../styles/colors'


class ProposalComponent extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        <section id="proposal" className={classes.proposals}>
          <div id="proposal-blurb">
            <h1>Proposals</h1>
            <h5 className="subtitle-small">
              Submit features here and we will keep an eye on this page to
              see which features are most desired.
            </h5>

          </div>
          <div id="proposal-items" className={classes.proposalItems}>
            <ul className="proposal-column">
              <li>This is an item</li>
              <li>This is an item</li>
              <li>This is an item</li>
              <li>This is an item</li>
              <li>This is an item</li>
              <li>This is an item</li>
              <li>This is an item</li>
              <li>This is an item</li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const proposalStyles = {
  proposals: {

    display: 'grid',
    gridTemplateColumns: '35vw 65vw',
    gridTemplateAreas: '"sidebar content"',

    '@media (max-width: 576px)': {
      gridTemplateColumns: '95vw 95vw',
      gridTemplateAreas: '"sidebar" "content"'
    },

    '@media (min-width: 576px and max-width: 992px)': {
      gridTemplateColumns: '35vw 65vw',
      gridTemplateAreas: '"sidebar content"'
    },

    '@media (min-width: 992px)': {
      gridTemplateColumns: '35vw 65vw',
      gridTemplateAreas: '"sidebar content"'
    },

    '& #proposal-blurb': {
      gridArea: 'sidebar',
      padding: '20px',
      maxWidth: '60ch'
    }
  },
  proposalItems: {
    gridArea: 'content',
    '& ul.proposal-column': {
      '& li': {
        width: '50%',
        margin: 'auto 10%',
        textAlign: 'center',
        listStyleType: 'none'
      }
    }
  }
}

export default injectSheet(proposalStyles)(ProposalComponent)
