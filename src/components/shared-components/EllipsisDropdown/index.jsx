/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function EllipsisDropdown(props) {
  const { menu, placement } = props;
  return (
    <Dropdown overlay={menu} placement={placement} trigger={['click']}>
      <div className="ellipsis-dropdown">
        <EllipsisOutlined />
      </div>
    </Dropdown>
  );
}

EllipsisDropdown.propTypes = {
  trigger: PropTypes.string,
  placement: PropTypes.string,
};

EllipsisDropdown.defaultProps = {
  trigger: 'click',
  placement: 'bottomRight',
  menu: <Menu />,
};

export default EllipsisDropdown;
