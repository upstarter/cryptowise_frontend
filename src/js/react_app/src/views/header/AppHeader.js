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
  constructor() {
    super();
    this.state = {
      collapsed: false,
      visible: false
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };


  toggle = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    const { classes, match, location, history } = this.props;
    return (
      <Header
        className={classes.header}
      >
        <Link to="/">
          <div style={{flexDirection: 'flex-start', padding: '5px 13px', zIndex: 100}}>
              <img className={classes.logo} src={nav_logo} />
          </div>
        </Link>
        <div>
          <Menu
            mode="horizontal"
            className={classes.menu}
            onClick={
              ({ item, key, keyPath }) => {
                history.push(key)
              }
            }
            style={{
              borderBottom: "none",
            }}
          >
            <SubMenu
              style={{
                borderBottom: "none",
              }}
              title={
                <span>
                  <Icon
                    className="trigger"
                    type='bars'
                    onClick={this.toggle}
                  />
                </span>
              }
            >
              <Menu.Item key="/contact">Contact</Menu.Item>
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
    background: `${colors.primary}`,
    padding: 0,
    position: 'fixed',
    width: '100%',
    right: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: 'space-between',
    '@media (min-width: 576px)': {
    },
  },
  menu: {
    padding: 9,
    background: `${colors.primary}`,
    color: '#fff',

  },
  logo: {
    color: '#000',
    '@media (max-width: 576px)': {
      // marginLeft: '32px',
    },
  }
}
const AppHeaderWithRouter = withRouter(AppHeader);

export default injectSheet(headerStyles)(AppHeaderWithRouter);
