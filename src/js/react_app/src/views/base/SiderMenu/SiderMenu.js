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
      siderCollapsed: props.siderCollapsed,
      collapsedWidth: 0,
      broken: false
    };
  }

  // 
  // componentDidUpdate(prevProps, prevState) {
  //   if (!this.props.siderCollapsed) {
  //     // when the state is updated (turned red),
  //     // a timeout is triggered to switch it back off
  //     setTimeout(() => {
  //       this.props.toggleSider()
  //
  //     }, 5000);
  //   }
  // }

  onSelect = () => {
    this.props.toggleSider()
  }

  render() {
    const { location, classes, siderCollapsed} = this.props;
    return (
      <Sider
        className={classes.sider}
        style={{right: 0}}
        collapsible
        defaultCollapsed={true}
        width="200"
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
    marginTop: 60,
    overflow: 'auto',
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
