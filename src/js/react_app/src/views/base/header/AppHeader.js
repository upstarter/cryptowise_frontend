import React from "react";
import PropTypes from "prop-types";
import {
  Link,
  withRouter
} from "react-router-dom";
import { Button, Icon, notification } from "antd";
import injectSheet, { jss } from "react-jss";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const { Header } = Layout;
import colors from 'Styles/colors'
import nav_logo from "Images/white_nav_logo.svg";

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
        <Icon
          className={classes.trigger}
          type={this.state.siderCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleSider}
        />
        <Link to="/">
          <img className={classes.logo} src={nav_logo} />
        </Link>
        <div>
          <Menu
            className={classes.menu}
            mode="horizontal"
            style={{
              borderBottom: "none",
            }}
          >
            <SubMenu
              onClick={this.handleSubClick}
              style={{
                borderBottom: "none",
              }}
              title={
                  <Icon
                    style={{fontSize: 25}}
                    className="menu"
                    type='bars'
                    onClick={this.toggleSub}
                  />
              }
            >
              <Menu.Item key="/login">Sign In</Menu.Item>
              {/* <Menu.Item key="/contact">Contact</Menu.Item> */}
              <Menu.Item key="/about">About</Menu.Item>
              <Menu.Item key="/logout">Sign out</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    )
  }
}

const headerStyles = {
  header: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    fontSize: 25,
    // background: `${colors.primary}`,
    padding: 0,
    position: 'fixed',
    width: '100vw',
    right: 0,
    zIndex: 999,
  },
  trigger: {
    padding: 15,
  },
  menu: {
    padding: 5,
    marginTop: 10,
    color: `${colors.silver}`,
  },
  logo: {
    color: `${colors.white}`,
    height: 160,
    width: 180,
    '@media (max-width: 576px)': {
      // marginLeft: '32px',
    },
  }
}
const AppHeaderWithRouter = withRouter(AppHeader);

export default injectSheet(headerStyles)(AppHeaderWithRouter);
