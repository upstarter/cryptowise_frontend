import React, { Component } from "react";
import { FireFilled } from '@ant-design/icons';
import { Button } from 'antd';
import styles from 'Css/styles.scss'
import colors from 'Styles/colors'
export default class AppButton extends Component {
  render() {
    let props = this.props;
    return (
      <Button
        type={props.type}
        icon={
          <FireFilled
            type={props.icon}
            style={{
              color: '#eee',
              padding: 2,
              boxShadow: `0px 0px 3px 1px ${colors.smoke}`,
              borderRadius: 50,
            }}
            />}
        size={props.size}
        style={{

            background: colors.link,
            border: `1px solid ${colors.link}`
          }}

        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    );
  }
}
