import React from "react";

import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";

import { List, Button, Modal, Input, Radio, Typography } from "antd";
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;
import colors from "Styles/colors";
import injectSheet, { jss } from "react-jss";

const NewThreadForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        classes,
        visible,
        onCancel,
        onCreate,
        form,
        confirmLoading,
        wrapClassName,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          wrapClassName={wrapClassName}
          // bodyStyle={{background: `${colors.secondaryDark}`, color: '#fff'}}
          visible={visible}
          title="New Discussion Thread"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
          centered={true}
          confirmLoading={confirmLoading}
        >
          <Form layout="vertical">
            <Paragraph size="small">
              <Text>Discussion Thread Examples...</Text>
            </Paragraph>

            <ul
              style={{
                listStyleType: "ellipses",
                paddingLeft: 30,
                color: colors.smoke,
              }}
            >
              <li>
                Anyone want to synthesize a strategy using BTC volatility stats and intermarket analysis?
              </li>
              <li>What is the average true range (ATR) of BTC?</li>
            </ul>
            <Form.Item
              label={
                <span className={classes.label}>
                  Title&nbsp;
                </span>
              }
              >
              {getFieldDecorator("title", {
                rules: [{ required: true, message: "Please input the title!" }],
              })(<Input placeholder="Enter your title..." />)}
            </Form.Item>
            <Form.Item
              label={
                <span className={classes.label}>
                  Description&nbsp;
                </span>
              }
              >
              {getFieldDecorator("description")(
                <TextArea
                  placeholder="Ask a question, test a theory, form a group.."
                  rows={4}
                  type="textarea"
                />
              )}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("is_public", {
                initialValue: "public",
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private (you can publish later)</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

const styles = {
  label: {
    color: colors.midTone,
  },
};

const ThreadForm = injectSheet(styles)(NewThreadForm);
export default ThreadForm;
