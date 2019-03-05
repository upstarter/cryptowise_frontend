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
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !(this.state.collapsed),
    });
  }
  render() {
    const { location } = this.props;
    const { classes } = this.props;
    return (
      <Sider
        className={classes.sider}
        breakpoint="sm"
        collapsedWidth="0"
        collapsible
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={
          (collapsed, type) =>
            { collapsed ? this.props.setContentMarginLeft('0px') : this.props.setContentMarginLeft('200px') }
        }
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
    left: 0 
  }
}

export default injectSheet(siderMenuStyles)(SiderMenu);
