import React, { Component } from 'react';
import { connect } from "react-redux";
import Auth from '../../components/auth/Auth'
import {
  Route,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import injectSheet, { jss } from 'react-jss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import colors from "Styles/colors"

class BasicLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { classes } = this.props
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.title}>
            Sign in to uncover hypergrowth cryptoassets along with top analysts
          </h2>
        </div>
        <div className={classes.main}>
          <Form onSubmit={this.handleSubmit} className={classes.loginForm}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className={classes.loginFormForgot} href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className={classes.loginFormButton}>
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedBasicLoginForm = Form.create({ name: 'basic_login' })(BasicLoginForm);

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "center",

  },
  header: {
    // textAlign: 'center',
    width: '100%',
    height: '10vh',
    margin: [0,0,20,0],
    zIndex: 1,
    background: `${colors.white}`,
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    width: '800px !important',
    'overflow-y': 'none',
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: "21px !important",
    color: `${colors.black}`,
  },
  loginForm: {
    maxWidth: '300px',
  },
  loginFormForgot: {
    float: 'right'
  },
  loginFormButton: {
    display: 'block',
    width: '100% !important'
  },
  fbLoginButton: {
    width: 190,
    height:35,
    borderRadius: 3,
    background: '#3b5998',
    color: 'white',
    border: '0px transparent',
    textAlign: 'center',
    margin: [5, 0, 0, 0],
    display: 'inline-block',
    '&:hover': {
        background: '#3b5998',
        opacity: "0.6"
    }
  },
  googleLoginButton: {
    width: 190,
    height: 48,
    borderRadius: 3,
    color: 'white',
    background: 'transparent',
    border: '0px transparent',
    textAlign: 'center',
    margin: [10, 0, 0, 0],
    display: 'inline-block',
    '&:hover': {
        background: 'transparent',
        opacity: "0.6"
    }
  },
  socialButtons: {
    justifyContent: 'center',
  },
  footer: {
    position: 'fixed',
    height: "80px",
    width: '100vw',
    bottom: 0,
    right: 0,
    fontSize: 22,
    background: `${colors.white}`,
    boxShadow: '8px 2px 4px 8px #f0f1f2',
  },
  "@media (min-width: 576px) (max-width: 992px)": {
    header: {
      height: "160px",
      lineHeight: "2em",
    },
    title: {
      padding: '7%',
      fontSize: "21px",
    },
    tileGrid: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr"
    },
    main: {
      padding: "1em 1em"
    },
    socialButtons: {
      maxWidth: "100%"
    },
    vl: {
      borderTop: "1px solid black",
      width: "40em",
      borderLeft: "0",
      height: "0",
      maxWidth: "100%"
    }
  },
  "@media (max-width: 800px)": {
    header: {
      height: "160px",
      lineHeight: "2em",
    },
    title: {
      padding: '7%',
      fontSize: "16px",
    },
    steps: {
      display: 'none !important',
    },
    tileGrid: {
      gridTemplateColumns: "1fr 1fr"
    },
    main: {
      padding: "0 1em"
    },
    loginForm: {
      maxWidth: "100%"
    }
  }
};

export default connect(null, null)(injectSheet(styles)(WrappedBasicLoginForm));
