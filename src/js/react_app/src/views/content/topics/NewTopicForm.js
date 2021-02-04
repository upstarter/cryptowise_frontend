import React from 'react'

import { List, Button, Modal, Form, Input, Radio, Typography } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;
import colors from "Styles/colors"

const NewTopicForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, confirmLoading, wrapClassName } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          wrapClassName={wrapClassName}
          // bodyStyle={{background: `${colors.secondaryDark}`, color: '#fff'}}
          visible={visible}
          title="New Topic"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
          centered={true}
          confirmLoading={confirmLoading}
        >
          <Form layout="vertical">
            {/* <Paragraph>RIFF Guidelines</Paragraph> */}
            <Title level={4} className='subtitle'>
              Submit a topic. Make it relevant to wide audience.
              Publication prioritizes active users.
            </Title>
            {/* <Paragraph>Examples...</Paragraph>
            <ul style={{paddingLeft: 30}}>
              <li>
                "Curate volatility, momentum and sentiment correlations data"
              </li>
              <li>
                "Provide the optimal swing trading value-at-risk periods for a set of tokens"
              </li>
            </ul> */}
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title!' }],
              })(<Input placeholder="Enter your topic"/>)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<TextArea placeholder="Describe your topic" rows={4}
              type="textarea" />)}
            </Form.Item>
            {/* <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('is_public', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private (you can add it to a group you've joined later)</Radio>
                </Radio.Group>,
              )}
            </Form.Item> */}
          </Form>
        </Modal>
      );
    }
  },
);


export default NewTopicForm
