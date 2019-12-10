import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Sider } = Layout;
import LinkMenu from './LinkMenu'
import injectSheet, { jss } from "react-jss"
import AppButton from 'Components/base/button/AppButton';
import { Button, Radio, Icon } from 'antd';
import colors from "Styles/colors"


class SiderMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
      collapsedWidth: 0,
      broken: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onSiderCollapse = (collapsed, type) => {
    console.log(collapsed, type)
    if (!collapsed) {
      this.setState({collapsed: false})
      setTimeout(() => {
        this.setState({collapsed: true})
      }, 5000)
    } else {
      setTimeout(() => {
        this.setState({collapsed: true})
      }, 5000)
    }
  };

  collapse = () => {
    this.setState({
      collapsed: true,
    });
  }

  open = () => {
    this.setState({
      collapsed: false
    });
  }

  onSelect = () => {
    this.collapse()
  }

  render() {
    const { location } = this.props;
    const { classes } = this.props;
    return (
      <Sider
        className={classes.sider}
        collapsible
        defaultCollapsed={true}
        width="140"
        collapsedWidth="0"
        // trigger={this.state.broken ? '' : null}
        // zeroWidthTriggerStyle={{bottom: 0}}
        collapsed={this.state.collapsed}
        // onCollapse={this.onSiderCollapse}
        onMouseEnter={this.open}
        onMouseLeave={this.collapse}
        // breakpoint="xs"
        // onBreakpoint={(broken) => { this.collapse() } }
      >
        <LinkMenu onSelect={this.onSelect}/>
      </Sider>
    )
  }
}

const siderMenuStyles = {
  sider: {
    marginTop: 70,
    overflow: 'visible',
    height: '100vh',
    position: 'fixed',
    zIndex: 100,
    left: 0,

    '& .ant-layout-sider-zero-width-trigger': {
      backgroundColor: `${colors.primary} !important`,
      color: `${colors.offWhite} !important`,
    }
  }
}

export default injectSheet(siderMenuStyles)(SiderMenu);
