import React from "react";
import PropTypes from "prop-types";
import {
  Link,
  withRouter
} from "react-router-dom";
import { Button, notification } from "antd";
import injectSheet, { jss } from "react-jss";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const { Header } = Layout;
import colors from 'Styles/colors'
import nav_logo from "Images/white_nav_logo.svg";
import {MenuUnfoldOutlined, MenuFoldOutlined, BarsOutlined} from "@ant-design/icons"
class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siderCollapsed: props.siderCollapsed,
      subCollapsed: true,
      visible: false
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    // history: PropTypes.object.isRequired
  };


  toggleSider = () => {
    this.setState({siderCollapsed: !this.state.siderCollapsed})
    this.props.toggleSider()
  }

  toggleSub = () => {
    this.setState({subCollapsed: !this.state.subCollapsed})
  }

  handleSubClick = ({ item, key, keyPath }) => {
      this.props.history.replace(key)
  }

  render() {
    const { classes, match, location } = this.props;
    return (
      <Header
        className={classes.header}
      >
        {this.state.siderCollapsed ?
          <MenuUnfoldOutlined
            className={classes.mainMenu}
            onClick={this.toggleSider}
            size="large"
          /> :
          <MenuFoldOutlined
            className={classes.mainMenu}
            onClick={this.toggleSider}
            size="large"
          />
        }
        <Link className={classes.logoLink} to="/">
          <img
            loading="lazy"
            className={classes.logo} src={nav_logo}
            alt="cryptoasset research, cryptosasset analyisis, cryptoasset trading, cryptoasset investing"
          />
        </Link>
        <div>

        </div>
      </Header>
    )
  }
}

const headerStyles = {
  header: {
    position: 'fixed',
    display: "flex",
    marginBottom: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    // height: 50,
    fontSize: 25,
    padding: 0,
    right: 0,
    zIndex: 999,

  },
  mainMenu: {
    marginLeft: 10,
    fontSize: '5rem',
  },
  menu: {
    color: `${colors.silver} !important`,
    '& .ant-menu-submenu-title': {
      padding: 0,
      margin: 0
    }
  },
  logoLink: {

  },
  logo: {
    color: `${colors.white}`,
    marginRight: 63,
    // height: 50,
    width: 180,
    '@media (max-width: 576px)': {
      // marginLeft: '32px',
    },
  }
}
const AppHeaderWithRouter = withRouter(AppHeader);

export default injectSheet(headerStyles)(AppHeaderWithRouter);
