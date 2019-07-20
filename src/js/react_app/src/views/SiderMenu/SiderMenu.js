import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Sider } = Layout;
import LinkMenu from './LinkMenu'
import injectSheet, { jss } from "react-jss"
import AppButton from "../../components/Button/AppButton";
import { Button, Radio, Icon } from 'antd';


class SiderMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !(this.state.collapsed),
    });
  }

  onSiderCollapse = collapsed => {
    this.toggle()
  };


  render() {
    const { location } = this.props;
    const { classes } = this.props;
    return (
      <Sider
        className={classes.sider}
        collapsedWidth="0"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onSiderCollapse}
        onBreakpoint={(broken) => { console.log(broken); }}
      >
        <LinkMenu />
      </Sider>
    )
  }
}

const siderMenuStyles = {
  sider: {
    marginTop: 64,
    overflow: 'visible',
    height: '100vh',
    position: 'fixed',
    zIndex: 100,
    left: 0,

    '& .ant-layout-sider-zero-width-trigger': {
      backgroundColor: 'rgba(28,49,70,0.5) !important',
      color: 'rgba(255,255,255,0.8) !important',
    }
  }
}

export default injectSheet(siderMenuStyles)(SiderMenu);
