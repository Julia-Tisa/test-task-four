/* eslint-disable no-return-assign */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import navigationConfig from '../../configs/NavigationConfig';
import IntlMessage from '../util-components/IntlMessage';

const breadcrumbData = {
  '/app': <IntlMessage id="home" />,
};

navigationConfig.forEach((elm) => {
  const assignBreadcrumb = (obj) => breadcrumbData[obj.path] = <IntlMessage id={obj.title} />;
  assignBreadcrumb(elm);
  if (elm.submenu) {
    elm.submenu.forEach((el) => {
      assignBreadcrumb(el);
      if (el.submenu) {
        el.submenu.forEach((elem) => {
          assignBreadcrumb(elem);
        });
      }
    });
  }
});

function BreadcrumbRoute() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      title: <Link to={url}>{breadcrumbData[url]}</Link>,
    };
  });

  return (
    <Breadcrumb items={breadcrumbItems} />
  );
}

class AppBreadcrumb extends Component {
  render() {
    return (
      <BreadcrumbRoute />
    );
  }
}

export default AppBreadcrumb;
