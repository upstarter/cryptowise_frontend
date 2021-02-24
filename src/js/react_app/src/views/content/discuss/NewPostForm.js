import React from "react";

import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";

import { List, Button, Modal, Input, Radio, Typography } from "antd";
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;
import colors from "Styles/colors";

const NewPostForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
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
          title="New Reply"
          okText="Reply"
          onCancel={onCancel}
          onOk={onCreate}
          centered={true}
          width={'95vw'}
          height={'95vh'}
          bodyStyle={{height: '61.8vh', width: '95vw'}}
          confirmLoading={confirmLoading}
        >
          <Form layout="vertical">
            <Form.Item label="Reply">
              {getFieldDecorator("body")(
                <TextArea
                  placeholder="Your comment..."
                  rows={13}
                  type="textarea"
                />
              )}
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
  }
);

export default NewPostForm;
