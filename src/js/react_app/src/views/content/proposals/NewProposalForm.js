import React from 'react'

import { List, Button, Modal, Form, Input, Radio, Typography } from 'antd';
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
          title="Create a new RIFF for Solutions"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          confirmLoading={confirmLoading}
        >
          <Form layout="vertical">
            <Paragraph>RIFF Guidelines</Paragraph>
            <List>
              <List.Item>
                Solutions should take no longer than a few days or weeks to implement.
              </List.Item>
              <List.Item>
                Prioritize problems relevent to your goals & activities to gain most value.
              </List.Item>
              <List.Item>
                Upvote problems submitted by the community for expert solutions.
              </List.Item>
              <List.Item>
                Subversive Trolls will be immediately expelled without recourse.
              </List.Item>
            </List>
            <Paragraph>Examples of decent problem submissions...</Paragraph>
            <List>
              <List.Item>
                 "What business models currently stand to dominate the crypto ecosystem?"
              </List.Item>
              <List.Item>
                "How do global interest rates effect the volatility of bitcoin"
              </List.Item>
              <List.Item>
                "Determine the optimal swing trading value-at-risk period for trend following DFINITY"
              </List.Item>
            </List>
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of feature!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
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
