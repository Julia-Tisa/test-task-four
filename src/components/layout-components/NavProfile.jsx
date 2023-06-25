/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Dropdown, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import NavItem from './NavItem';
import Flex from '../shared-components/Flex';
import { signOut } from '../../store/slices/authSlice';
import {
  FONT_WEIGHT, MEDIA_QUERIES, SPACER, FONT_SIZES,
} from '../../constants/ThemeConstant';

const Icon = styled.div(() => ({
  fontSize: FONT_SIZES.LG,
}));

const Profile = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const UserInfo = styled('div')`
  padding-left: ${SPACER[2]};

  @media ${MEDIA_QUERIES.MOBILE} {
  display: none
  }
`;

const Name = styled.div(() => ({
  fontWeight: FONT_WEIGHT.SEMIBOLD,
}));

const Title = styled.span(() => ({
  opacity: 0.8,
}));

function MenuItemSignOut(props) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const { label } = props;

  return (
    <div onClick={handleSignOut}>
      <Flex alignItems="center" gap={SPACER[2]}>
        <Icon>
          <LogoutOutlined />
        </Icon>
        <span>{label}</span>
      </Flex>
    </div>
  );
}

const items = [
  {
    key: 'Sign Out',
    label: <MenuItemSignOut label="Выйти" />,
  },
];

function NavProfile({ mode }) {
  return (
    <Dropdown placement="bottomRight" menu={{ items }} trigger={['click']}>
      <NavItem mode={mode}>
        <Profile>
          <Avatar src="/img/avatars/thumb-1.jpg" />
          <UserInfo className="profile-text">
            <Name>Charlie Howard</Name>
            <Title>Frontend Developer</Title>
          </UserInfo>
        </Profile>
      </NavItem>
    </Dropdown>
  );
}

export default NavProfile;
