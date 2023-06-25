import React from 'react';
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from './AppConfig';

export const publicRoutes = [
  {
    key: 'login',
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() => import('../views/auth-views/authentication/login')),
  },
  {
    key: 'register',
    path: `${AUTH_PREFIX_PATH}/register`,
    component: React.lazy(() => import('../views/auth-views/authentication/register')),
  },
  {
    key: 'forgot-password',
    path: `${AUTH_PREFIX_PATH}/forgot-password`,
    component: React.lazy(() => import('../views/auth-views/authentication/forgot-password')),
  },
];

export const protectedRoutes = [
  {
    key: 'basics.dashboard',
    path: `${APP_PREFIX_PATH}/basics/dashboard`,
    component: React.lazy(() => import('../views/app-views/basics/dashboard')),
  },
  {
    key: 'basics.catalog.products',
    path: `${APP_PREFIX_PATH}/basics/catalog/products`,
    component: React.lazy(() => import('../views/app-views/basics/catalog/products')),
  },
  {
    key: 'basics.catalog.categories',
    path: `${APP_PREFIX_PATH}/basics/catalog/categories`,
    component: React.lazy(() => import('../views/app-views/basics/catalog/categories')),
  },
  {
    key: 'basics.catalog.collections',
    path: `${APP_PREFIX_PATH}/basics/catalog/collections`,
    component: React.lazy(() => import('../views/app-views/basics/catalog/collections')),
  },
  {
    key: 'basics.catalog.combo',
    path: `${APP_PREFIX_PATH}/basics/catalog/combo`,
    component: React.lazy(() => import('../views/app-views/basics/catalog/combo')),
  },
  {
    key: 'basics.orders',
    path: `${APP_PREFIX_PATH}/basics/orders`,
    component: React.lazy(() => import('../views/app-views/basics/orders')),
  },
  {
    key: 'basics.clients.list',
    path: `${APP_PREFIX_PATH}/basics/clients/list`,
    component: React.lazy(() => import('../views/app-views/basics/clients/list')),
  },
  {
    key: 'basics.clients.groups',
    path: `${APP_PREFIX_PATH}/basics/clients/groups`,
    component: React.lazy(() => import('../views/app-views/basics/clients/groups')),
  },
  {
    key: 'basics.banners',
    path: `${APP_PREFIX_PATH}/basics/banners`,
    component: React.lazy(() => import('../views/app-views/basics/banners')),
  },
  {
    key: 'basics.scheduler',
    path: `${APP_PREFIX_PATH}/basics/scheduler`,
    component: React.lazy(() => import('../views/app-views/basics/scheduler')),
  },
  {
    key: 'basics.promocodes',
    path: `${APP_PREFIX_PATH}/basics/promocodes`,
    component: React.lazy(() => import('../views/app-views/basics/promocodes')),
  },
  {
    key: 'basics.offlineDots.addresses',
    path: `${APP_PREFIX_PATH}/basics/offlineDots/addresses`,
    component: React.lazy(() => import('../views/app-views/basics/offlineDots/addresses')),
  },
  {
    key: 'basics.offlineDots.geofences',
    path: `${APP_PREFIX_PATH}/basics/offlineDots/geofences`,
    component: React.lazy(() => import('../views/app-views/basics/offlineDots/geofences')),
  },
  {
    key: 'basics.staff',
    path: `${APP_PREFIX_PATH}/basics/staff`,
    component: React.lazy(() => import('../views/app-views/basics/staff')),
  },
  {
    key: 'basics.mailing',
    path: `${APP_PREFIX_PATH}/basics/mailing`,
    component: React.lazy(() => import('../views/app-views/basics/mailing')),
  },
  {
    key: 'system.settings',
    path: `${APP_PREFIX_PATH}/system/settings`,
    component: React.lazy(() => import('../views/app-views/system/settings')),
  },
  {
    key: 'system.mobileApp',
    path: `${APP_PREFIX_PATH}/system/mobileApp`,
    component: React.lazy(() => import('../views/app-views/system/mobileApp')),
  },
  {
    key: 'system.usersLogs',
    path: `${APP_PREFIX_PATH}/system/usersLogs`,
    component: React.lazy(() => import('../views/app-views/system/usersLogs')),
  },
  {
    key: 'user',
    path: `${APP_PREFIX_PATH}/user`,
    component: React.lazy(() => import('../views/app-views/user')),
  },
];
