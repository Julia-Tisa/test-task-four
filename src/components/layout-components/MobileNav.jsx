/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { NAV_TYPE_SIDE } from '../../constants/ThemeConstant';
import { onMobileNavToggle } from '../../store/slices/themeSlice';
import Flex from '../shared-components/Flex';
import Logo from './Logo';
import MenuContent from './MenuContent';

function MobileNav({
  routeInfo,
  hideGroupTitle,
}) {
  const dispatch = useDispatch();

  const sideNavTheme = useSelector((state) => state.theme.sideNavTheme);
  const mobileNav = useSelector((state) => state.theme.mobileNav);

  const menuContentprops = { sideNavTheme, routeInfo, hideGroupTitle };

  const onClose = () => {
    dispatch(onMobileNavToggle(false));
  };

  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={mobileNav}
      bodyStyle={{ padding: 5 }}
      width={300}
    >
      <Flex flexDirection="column" className="h-100">
        <Flex justifyContent="space-between" alignItems="center">
          <Logo mobileLogo />
          <div className="px-3" onClick={() => onClose()}>
            <ArrowLeftOutlined />
          </div>
        </Flex>
        <div className="h-100">
          <Scrollbars autoHide>
            <MenuContent type={NAV_TYPE_SIDE} {...menuContentprops} />
          </Scrollbars>
        </div>
      </Flex>
    </Drawer>
  );
}

export default MobileNav;
