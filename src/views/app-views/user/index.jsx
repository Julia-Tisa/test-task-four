import React, { useState } from 'react';
import {
  Form, Button, Input, Row, Col, message,
} from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROW_GUTTER } from '../../../constants/ThemeConstant';

function EditProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    name, email, username, phone, website, address, company,
  } = location.state.user;

  const [usersName, setUsersName] = useState(name);
  const [usersEmail, setUsersEmail] = useState(email);
  const [usersUserName, setUsersUserName] = useState(username);
  const [usersCompanyName, setUsersCompanyName] = useState(company.name);
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [usersWebsite, setUsersWebsite] = useState(website);
  const [usersAddress, setUsersAddress] = useState(`${address.street}/${address.suite}`);
  const [usersCity, setUsersCity] = useState(address.city);
  const [postcode, setPostcode] = useState(address.zipcode);

  const onFinish = (values) => {
    const key = 'updatable';
    message.loading({ content: 'Обновление...', key });
    setTimeout(() => {
      setUsersName(values.name);
      setUsersEmail(values.email);
      setUsersUserName(values.userName);
      setUsersCompanyName(values.coompanyName);
      setPhoneNumber(values.phoneNumber);
      setUsersWebsite(values.website);
      setUsersAddress(values.address);
      setUsersCity(values.city);
      setPostcode(values.postcode);
      message.success({ content: 'Данные обновлены!', key, duration: 2 });
      navigate('/app/basics/clients/list');
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Error:', errorInfo);
  };

  return (
    <div>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            name: usersName,
            email: usersEmail,
            username: usersUserName,
            companyName: usersCompanyName,
            phoneNumber,
            website: usersWebsite,
            address: usersAddress,
            city: usersCity,
            postcode,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Имя"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Пожалуйста, укажите имя!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Ник"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Пожалуйста, укажите ник!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Пожалуйста, укажите ваш email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Название компании" name="companyName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Номер телефона" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Сайт" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Адрес" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Город" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Индекс" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Сохранить изменения
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default EditProfile;
