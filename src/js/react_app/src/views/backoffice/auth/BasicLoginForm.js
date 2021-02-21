import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Route,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import { loginUser } from "Redux/core/auth.core"
import injectSheet, { jss } from 'react-jss'
import { Input, Button, Checkbox } from 'antd';
import { Form } from '@ant-design/compatible';

import colors from "Styles/colors"
import {UserOutlined,LockOutlined} from "@ant-design/icons"

class BasicLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(loginUser(values))
        this.props.history.replace('/discuss')
      }
    });
  };

  render() {
    const { classes } = this.props
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="dark-wrap">
        <div className={classes.container}>
          <div className={classes.header}>
            <h2 id="title" className={classes.title, "title-small"}>
              Profit from deep tech analysis of hyper-growth assets.
            </h2>
          </div>
          <div className={classes.main}>
            <Form onSubmit={this.handleSubmit} className={classes.loginForm}>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item className='action-items'>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className={classes.loginFormForgot} href="">
                  Forgot password
                </a>
                <Button type="primary" htmlType="submit" className={classes.loginFormButton}>
                  Sign in
                </Button>
                Or <a href="/signup">Register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedBasicLoginForm = Form.create({ name: 'basic_login' })(BasicLoginForm);

const styles = {
  container: {
    marginTop: 110,
    display: "grid",
    gridTemplateRows: ".3fr 1fr",
    justifyItems: 'center',
  },
  header: {
    gridRow: 1,
    marginBottom: 10,

    "@media (max-width: 480px)": {
      marginBottom: 0,

    },

    '& #title': {
      fontSize: '3.3rem !important',
      lineHeight: '4rem !important',
      maxWidth: 400,
      margin: '20px auto',
      textAlign: 'center',
      color: `${colors.white}`,

      "@media (max-width: 480px)": {
        fontSize: '2.7rem !important',
        maxWidth: '22ch !important',
        margin: '-25px auto',
      },
    },
  },
  main: {
    marginTop: '-20px',

    "@media (max-width: 480px)": {
      marginTop: '-30px',
    },
  },
  loginForm: {
    gridRow: 2,
    maxWidth: '300px',
    textAlign: 'center',
    color: `${colors.silver}`,

    '& a': {
      color: `${colors.origGreen}`
    },

    '& .action-items': {

      '& a': {
        fontSize: '1.6rem',
      }
    }
  },
  loginFormForgot: {
    float: 'right'
  },
  loginFormButton: {
    margin: [10,0],
    display: 'block',
    fontSize: '2rem',
    height: 45,
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

  "@media (min-width: 480px)": {
    header: {
      height: "160px",
      lineHeight: "1em",
    },
    title: {
      width: '200px',
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
  "@media (max-width: 480px)": {
    container: {
      gridTemplateRows: "3fr 7fr",
    },
    header: {
      minHeight: "140px",
      '& #title': {
        maxWidth: '40ch',
        fontSize: 21,
        lineHeight: '1.5em',
      },
    },
    main: {
      padding: "0 1em"
    },
    loginForm: {
      maxWidth: "300px"
    }
  }
};

export default connect(null, null)(injectSheet(styles)(withRouter(WrappedBasicLoginForm)));
