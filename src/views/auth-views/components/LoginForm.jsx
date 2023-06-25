/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Input, Divider, Alert,
} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoogleSVG, FacebookSVG } from '../../../assets/svg/icon';
import {
  signIn,
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  signInWithGoogle,
  signInWithFacebook,
} from '../../../store/slices/authSlice';
import CustomIcon from '../../../components/util-components/CustomIcon';

function LoginForm(props) {
  const navigate = useNavigate();

  const {
    otherSignIn,
    showForgetPassword,
    hideAuthMessage,
    onForgetPasswordClick,
    showLoading,
    signInWithGoogle,
    signInWithFacebook,
    extra,
    signIn,
    token,
    loading,
    redirect,
    showMessage,
    message,
    allowRedirect = true,
  } = props;

  const initialCredential = {
    email: 'user1@themenate.net',
    password: '2005ipo',
  };

  const onLogin = (values) => {
    showLoading();
    signIn(values);
  };

  const onGoogleLogin = () => {
    showLoading();
    signInWithGoogle();
  };

  const onFacebookLogin = () => {
    showLoading();
    signInWithFacebook();
  };

  useEffect(() => {
    if (token !== null && allowRedirect) {
      navigate(redirect);
    }
    if (showMessage) {
      const timer = setTimeout(() => hideAuthMessage(), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  });

  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">или войдите с помощью</span>
      </Divider>
      <div className="d-flex justify-content-center">
        <Button
          onClick={() => onGoogleLogin()}
          className="mr-2"
          disabled={loading}
          icon={<CustomIcon svg={GoogleSVG} />}
        >
          Google
        </Button>
        <Button
          onClick={() => onFacebookLogin()}
          icon={<CustomIcon svg={FacebookSVG} />}
          disabled={loading}
        >
          Facebook
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message} />
      </motion.div>
      <Form
        layout="vertical"
        name="login-form"
        initialValues={initialCredential}
        onFinish={onLogin}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
            {
              type: 'email',
              message: 'Please enter a validate email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label={(
            <div className={`${showForgetPassword ? 'd-flex justify-content-between w-100 align-items-center' : ''}`}>
              <span>Пароль</span>
              { showForgetPassword && (
              <span
                onClick={() => onForgetPasswordClick}
                className="cursor-pointer font-size-sm font-weight-normal text-muted"
              >
                Забыли пароль?
              </span>
              )}
            </div>
    )}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите ваш пароль',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Войти
          </Button>
        </Form.Item>
        {
otherSignIn ? renderOtherSignIn : null
}
        { extra }
      </Form>
    </>
  );
}

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

const mapStateToProps = ({ auth }) => {
  const {
    loading, message, showMessage, token, redirect,
  } = auth;
  return {
    loading, message, showMessage, token, redirect,
  };
};

const mapDispatchToProps = {
  signIn,
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  signInWithGoogle,
  signInWithFacebook,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
