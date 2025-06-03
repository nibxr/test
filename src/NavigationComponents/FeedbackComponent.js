import React from 'react';
import { Form, Input, Button, message as Message } from 'antd';

const FeedbackContent = () => {
  const handleFeedbackSubmit = (values) => {
    console.log('Feedback:', values.feedback);
    Message.success('Thank you for your feedback!');
  };

  return (
    <div>
      <h2>We value your feedback!</h2>
      <p>Please share your thoughts and suggestions with us.</p>
      <Form
        name="feedback-form"
        layout="vertical"
        onFinish={handleFeedbackSubmit}
      >
        <Form.Item
          name="name"
          label="Your name"
          rules={[
            {
              required: true,
              message: 'Name cannot be blank',
            },
          ]}
        >
          <Input.TextArea rows={1} columns={1} placeholder="Type your name here" />
        </Form.Item>       
        <Form.Item
          name="feedback"
          label="Your Feedback"
          rules={[
            {
              required: true,
              message: 'Please enter your feedback',
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Type your feedback here..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FeedbackContent;