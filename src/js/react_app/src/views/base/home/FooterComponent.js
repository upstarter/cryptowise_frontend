import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import colors from 'Styles/colors'
import injectSheet, { jss } from "react-jss"
import { Layout } from 'antd';
const { Footer } = Layout;

class FooterComponent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Footer className={classes.footer}>
        <p className="copyright">Copyright ©2018, Aion Labs, Inc.</p>
        <Link to="/privacy_policy" className="footer-link">
          Privacy Policy
        </Link>
      </Footer>
    );
  }
}


// Resources
//   Product Brief
//   Whitepaper
//   DApp
//   Developers
//   GitHub
//   Docs
// Community
//  Telegram
//  Discord
//  Reddit
//  WeChat
//  Weibo
//  KakaoTalk
// Social
//  Twitter
//  Instagram
//  Facebook
//  Medium
//  Youtube
// Organization
//   Team
//   Presale
//   Partners
//   Meetups
//   Jobs

const footerStyles = {
  footer: {
    background: '#001528',
    fontSize: "1.4rem",
    textAlign: "center",
    padding: "2rem",
    color: `${colors.link}`,
    '& a': { background: 'none !important' }
  }
}
export default injectSheet(footerStyles)(FooterComponent)
