import React from 'react'

import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

import { List, Button, Modal, Input, Radio, Typography } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;
import colors from "Styles/colors"

const NewThreadForm = Form.create({ name: 'form_in_modal' })(
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
          title="New Discussion Thread"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
          centered={true}
          confirmLoading={confirmLoading}
          width={'95vw'}
          height={'95vh'}
          bodyStyle={{height: '61.8vh', width: '95vw'}}
        >
          <Form layout="vertical">
            <Paragraph size="small"><Text>Discussion Thread Examples...</Text></Paragraph>

            <ul style={{listStyleType: 'ellipses', paddingLeft: 30, color: colors.smoke}}>
              <li>
                I need someone to correlate BTC volatility, momentum and sentiment data and provide a data product endpoint
              </li>
              <li>
                Who can provide stats on seasonality and periodicity for ATOM swing trading (2-4 weeks value-at-risk) over the last year?
              </li>
            </ul>
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title!' }],
              })(<Input placeholder="Enter your title..."/>)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<TextArea placeholder="Describe your question, thesis, idea..." rows={4}
              type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('is_public', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private (you can publish later)</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);


export default NewThreadForm
