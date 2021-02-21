import React, { Component } from "react";
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Button } from 'antd';
import styles from 'Css/styles.scss'

export default class AppButton extends Component {
  render() {
    let props = this.props;
    return (
      <Button
        type={props.type}
        icon={<LegacyIcon type={props.icon} />}
        size={props.size}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    );
  }
}
