import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Route,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import loginUser from "Actions/loginUser"
import injectSheet, { jss } from 'react-jss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import colors from "Styles/colors"

class BasicLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values)

      if (!err) {
        this.props.dispatch(loginUser(values)).then(response => {
          this.props.history.replace('/proposals')
        })
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
              Profit from deep tech analysis on hypergrowth assets.
            </h2>
          </div>
          <div className={classes.main}>
            <Form onSubmit={this.handleSubmit} className={classes.loginForm}>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
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
    marginTop: 80,
    display: "grid",
    gridTemplateRows: ".3fr 1fr",
    justifyItems: 'center',
  },
  header: {
    gridRow: 1,
    padding: 15,
    '& #title': {
      fontSize: '3.3rem !important',
      lineHeight: '4.3rem !important',
      maxWidth: 400,
      padding: 20,
      margin: '0 auto',
      textAlign: 'center',
      color: `${colors.white}`,

      "@media (max-width: 480px)": {
        fontSize: '2.8rem !important',
      },
    },
  },
  main: {
    marginTop: 40,

    "@media (max-width: 480px)": {
      marginTop: 0,
    },

    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    // justifyContent: "center",
    // alignItems: 'top',
  },
  loginForm: {
    gridRow: 2,
    maxWidth: '300px',

    // margin: '100px auto',
    textAlign: 'center',
    color: `${colors.silver}`,

    '& a': {
      color: `${colors.origGreen}`
    },
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

export default connect(null, null)(injectSheet(styles)(WrappedBasicLoginForm));
