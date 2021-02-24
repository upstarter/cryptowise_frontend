//use to replace login in Step2
import React, { Component } from 'react';
import injectSheet, { jss } from 'react-jss'
import { connect } from "react-redux";
import {
  Route,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";

import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

import {
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal,
} from 'antd';
import colors from "Styles/colors";

import {QuestionCircleOutlined} from "@ant-design/icons"
import TermsOfServiceComponent from 'Base/TermsOfServiceComponent'

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    visible: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.saveForm(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }


  // compareToFirstPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // };
  //

  // validatePassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['password'], { force: true });
  //   }
  //   callback();
  // };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const { classes, confirmLoading, onCancel, onCreate } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '1',
    })(
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="44">+44</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <>
      <TermsOfServiceComponent
        wrappedComponentRef={this.saveFormRef}
        wrapClassName={classes.modal}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
        confirmLoading={confirmLoading}
      />
      <Form name='reg-form' labelAlign='left' {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item

          label={
            <span className={classes.label}>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          className={classes.label}
          label={
            <span className={classes.label}>
              Email&nbsp;
            </span>
          }
        >
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          className={classes.label}
          label={
            <span className={classes.label}>
              Password&nbsp;
            </span>
          }
          hasFeedback
          // validateStatus="error"
          // help="Should be at least 8 chars"
          >
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 8,
                message: 'Should be at least 8 characters'
              },
              {
                // validator: this.validatePassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
        </Form.Item>
        {/* <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item> */}

        {/* <Form.Item label="">
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item> */}
        {/* <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: false, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item> */}
        {/* <Form.Item label="Website">
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>,
          )}
        </Form.Item> */}
        {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item> */}
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('terms_accepted', {
            valuePropName: 'checked',
            rules: [
              {
                required: true,
                message: 'Please agree to the terms!',
              },
            ],
          })(
            <Checkbox>
              I have read the <a onClick={this.showModal}>terms of service.</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
    );
  }
}


const styles = {
  label: {
    color: colors.midTone,
    '& .ant-legacy-form-item': {
      color: colors.midTone,

      listStyleType: 'none',
    }
  },

};
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
// const BasicRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const BasicRegistrationForm = injectSheet(styles)(WrappedRegistrationForm);
export default withRouter(BasicRegistrationForm);
// export default withRouter(BasicRegistrationForm);
