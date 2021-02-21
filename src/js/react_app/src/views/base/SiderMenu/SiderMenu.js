import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Sider } = Layout;
import LinkMenu from './LinkMenu'
import injectSheet, { jss } from "react-jss"
import AppButton from 'Components/base/button/AppButton';
import { Button, Radio } from 'antd';
import colors from "Styles/colors"


class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.siderCollapsed,
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
    this.props.toggleSider()
  }

  render() {
    const { location, classes, siderCollapsed } = this.props;
    return (
      <Sider
        className={classes.sider}
        collapsible
        defaultCollapsed={true}
        width="140"
        collapsedWidth="0"
        trigger={null}
        // zeroWidthTriggerStyle={{bottom: 0}}
        collapsed={siderCollapsed}
        // onCollapse={this.onSiderCollapse}
        // onMouseEnter={this.open}
        // onMouseLeave={this.collapse}
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
    marginTop: 50,
    overflow: 'visible',
    height: '100vh',
    position: 'fixed',
    zIndex: 999,
    left: 0,

    '& .ant-layout-sider-zero-width-trigger': {
      backgroundColor: `${colors.primary} !important`,
      color: `${colors.offWhite} !important`,
      zIndex: 999
    }
  }
}

export default injectSheet(siderMenuStyles)(SiderMenu);
