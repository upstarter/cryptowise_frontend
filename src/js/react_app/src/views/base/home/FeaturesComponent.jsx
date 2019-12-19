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
        <div className="dark-wrap">
          <section id='features' className={classes.features}>
            <div className={classes.heading}>
              <h1>Ecosystem Features</h1>
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
                  <p>
                    It takes sophisticated methods to construct, manage and
                    optimize a modern high-tech growth portfolio. Collaborate
                    with crypto and finance experts to maximize returns and stay informed of
                    crypto project developments relevant to your goals and interests.
                  </p>
                </Col>
                <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>
                  <div className="feature-icon">
                    <figure className="image">
                      <img alt="Crypto Trading, Crypto Investing" src={Icon3}/>
                    </figure>
                  </div>
                  <h3>Decentralized Finance Compute</h3>
                  <p>
                    Participate in an investing ecosystem that rewards creative
                    solutions to complicated investment problems. Analyze, synthesize, and actualize
                    cutting edge research across increasingly vast design spaces in Crypto Networking, Financial Machine Learning
                    and Artificial Intelligence.
                  </p>
                </Col>
                <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>

                  <div className="feature-icon">
                    <figure className="image">
                      <img alt="Crypto Network" src={Icon2}/>
                    </figure>
                  </div>
                  <h3>Crowd Investing Mastery</h3>
                  <p>
                    Core Teams, Task Forces, Swarms, and Individual Agents deliver
                    practical market insights. Participants formulate, coordinate, and implement
                    coherent sets of tactical policies custom tailored to self-selected core
                    capabilities within and across group investment objectives.
                  </p>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

const featuresStyles = {
  features: {
    padding: '3rem',
    margin: '-10 auto',

    color: '#fff',
    '& a': { background: 'none !important' },
    '& h1': {
      filter: 'saturate(0.65)',
      color: `${colors.white}`
    },

  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
    color: 'white'
  },

  feature: {
    '& .feature-icon': {
      margin: '0 auto',
      padding: '2rem',
      height: '10rem',
      width: '10rem',
    },
    '& p': {
      margin: '0 auto',
      maxWidth: '35rem',
      color: `${colors.smoke}`,
      fontSize: '1.65rem !important',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center !important',

    },
    '& h3': {
      fontSize: '2.2rem !important',
      textAlign: 'center !important',
      // filter: 'saturate(1)',
      color: `${colors.silver}`,
    },
  }
}

export default injectSheet(featuresStyles)(FeaturesComponent)
