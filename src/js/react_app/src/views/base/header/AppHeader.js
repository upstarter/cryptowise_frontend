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
      siderCollapsed: props.onSiderCollapsed(),
      subCollapsed: true,
      visible: false
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };


  toggleSider = () => {
    this.setState({siderCollapsed: !this.state.siderCollapsed})
    this.props.onSiderCollapsed()
  }

  toggleSub = () => {
    this.setState({subCollapsed: !this.state.subCollapsed})
  }

  render() {
    const { classes, match, location, history } = this.props;
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
          {/* <span style={{color: 'white'}}>A web native organization.</span> */}
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
              onClick={
                ({ item, key, keyPath }) => {
                  history.push(key)
                }
              }
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
    height: 70,
    fontSize: 25,
    // background: `${colors.primary}`,
    padding: 0,
    position: 'fixed',
    width: '100%',
    right: 0,
    zIndex: 100,

    '@media (min-width: 576px)': {
    },
  },
  trigger: {
    padding: 25,
  },
  menu: {
    padding: 10,
    marginTop: 10,
    color: `${colors.silver}`,

  },
  logo: {
    color: '#000',
    margin: '15px',
    '@media (max-width: 576px)': {
      // marginLeft: '32px',
    },
  }
}
const AppHeaderWithRouter = withRouter(AppHeader);

export default injectSheet(headerStyles)(AppHeaderWithRouter);
