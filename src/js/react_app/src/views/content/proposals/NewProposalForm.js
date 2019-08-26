import React from 'react'

import { List, Button, Modal, Form, Input, Radio, Typography } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const NewProposalForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, confirmLoading } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Submit a Proposal"
          okText="Propose"
          onCancel={onCancel}
          onOk={onCreate}
          confirmLoading={confirmLoading}
        >
          <Form layout="vertical">
            <Paragraph>RIFF Guidelines</Paragraph>
            <ul style={{paddingLeft: 30}}>
              <li>
                Propose solutions relevent to your strongest capabilities, goals & activities.
              </li>
            </ul>
            <Paragraph>Examples of good proposals...</Paragraph>
            <ul style={{paddingLeft: 30}}>
              <li>
                "What business models currently stand to dominate the crypto ecosystem?"
              </li>
              <li>
                "Determine the optimal swing trading value-at-risk period for trend following DFINITY"
              </li>
            </ul>
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of feature!' }],
              })(<Input placeholder="How do global interest rates effect the volatility of bitcoin?"/>)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<TextArea placeholder="Bitcoin volatility
                seems to be highly effecte by x, y, z..." rows={4}
              type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('is_public', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private (you can add it to a group you've joined later)</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);


export default NewProposalForm
