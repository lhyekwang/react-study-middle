import React from 'react';
import { Form, Row, Col, Typography, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Login() {
  return(
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
            찾 아 야 한 다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
            <Form
              initialValues={{ remember: true }}
              style={{ width: 300, marginTop: 50 }}
              onFinish={()=>{}}
            >
              <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input autoFocus prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Log in
                </Button>
                Or <Link to="/signup">register now!</Link>
              </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}