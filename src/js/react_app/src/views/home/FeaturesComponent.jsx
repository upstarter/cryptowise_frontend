import React from 'react'
import ReactDOM from 'react-dom'
import colors from '../../styles/colors'
import { Row, Col } from 'antd'
import injectSheet, { jss } from "react-jss"


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
                    <img alt="Crypto investing strategies" src="/images/icon1.svg"/>
                  </figure>
                </div>
                <h3>Crypto Investing Strategy</h3>
                <p className="subtitle-small">
                  It takes sophisticated methods to construct, manage and
                  optimize a cryptoasset portfolio. Get help with
                  the complex bits.
                </p>
              </Col>
              <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>
                <div className="feature-icon">
                  <figure className="image">
                    <img alt="Crypto Investing" src="/images/icon2.svg"/>
                  </figure>
                </div>
                <h3>Crypto Financial Analysis</h3>
                <p className="subtitle-small">
                  Free access to cryptoasset market insights & financial analysis written
                  by a passionate community of crypto and finance experts.
                </p>
              </Col>
              <Col xs={25} sm={25} md={7} lg={7} xl={7} className={classes.feature}>
                <div className="feature-icon">
                  <figure className="image">
                    <img alt="Crypto Trading, Crypto Investing" src="/images/icon3.svg"/>
                  </figure>
                </div>
                <h3>Investment Collaboration</h3>
                <p className="subtitle-small">
                  Intelligent Agents deliver novel personalized opportunites
                  and guidance based on preferences.
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
    '& h3, & p': {
      textAlign: 'center',
      color: 'white'
    }
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
      maxWidth: '35rem'
    }
  }
}

export default injectSheet(featuresStyles)(FeaturesComponent)
