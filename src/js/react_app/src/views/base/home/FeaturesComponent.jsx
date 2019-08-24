import React from 'react'
import ReactDOM from 'react-dom'
import colors from 'Styles/colors'
import { Row, Col } from 'antd'
import injectSheet, { jss } from "react-jss"
import Icon1 from 'Images/icon1.svg';
import Icon2 from 'Images/icon2.svg';
import Icon3 from 'Images/icon3.svg';


class FeaturesComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <section id='features' className={classes.features}>
          <div className={classes.heading}>
            <h1>Features</h1>
          </div>
          <div className="wrap">
            <Row type="flex" justify="space-around">
              <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>
                <div className="feature-icon">
                  <figure className="image">
                    <img alt="Crypto investing strategies" src={Icon1}/>
                  </figure>
                </div>
                <h3>Strategic Asset Analysis</h3>
                <p className="subtitle-small">
                  It takes sophisticated methods to construct, manage and
                  optimize a modern investment portfolio. Get help with
                  the complex bits and be informed of important asset developments.
                </p>
              </Col>
              <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>
                <div className="feature-icon">
                  <figure className="image">
                    <img alt="Crypto Network" src={Icon2}/>
                  </figure>
                </div>
                <h3>Crypto Networking</h3>
                <p className="subtitle-small">
                  Participate in an autonomous decentralized ecosystem that rewards creative solutions to
                  complicated investment problems based on the wisdom of the AI crowd.
                </p>
              </Col>
              <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>
                <div className="feature-icon">
                  <figure className="image">
                    <img alt="Crypto Trading, Crypto Investing" src={Icon3}/>
                  </figure>
                </div>
                <h3>Multi-agent Formations</h3>
                <p className="subtitle-small">
                  Autonomic Swarms and individual Agents deliver novel personalized
                  opportunites and guidance based on preferences. Participants
                  can create autonomous teams to focus on ontologies, strategies, tactics.
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const featuresStyles = {
  features: {
    padding: '6rem',
    margin: '-7 auto',

    background: '#191F2D',
    color: '#fff',
    '& a': { background: 'none !important' },
    '& h1': {
      color: 'white'
    },

  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
  },

  feature: {
    '& .feature-icon': {
      margin: '0 auto',
      padding: '.7rem',
      height: '55px',
      width: '50px',
    },
    '& .subtitle-small': {
      margin: '0 auto',
      maxWidth: '35rem',
      color: '#AEBED4',

    },
    '& h3, & p': {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center !important',
      color: 'white'
    },
  }
}

export default injectSheet(featuresStyles)(FeaturesComponent)
