import { 
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MobileOutlined,
  MailOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined, 
  UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const basicBoardNavTree = [{
  key: 'basics',
  path: `${APP_PREFIX_PATH}/basics`,
  title: 'sidenav.basics',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'basics-dashboard',
      path: `${APP_PREFIX_PATH}/basics/dashboard`,
      title: 'sidenav.basics.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }, 
    {
      key: 'basics-catalog',
      path: `${APP_PREFIX_PATH}/basics/catalog`,
      title: 'sidenav.basics.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'basics-catalog-products',
          path: `${APP_PREFIX_PATH}/basics/catalog/products`,
          title: 'sidenav.basics.catalog.products',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basics-catalog-categories',
          path: `${APP_PREFIX_PATH}/basics/catalog/categories`,
          title: 'sidenav.basics.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basics-catalog-collections',
          path: `${APP_PREFIX_PATH}/basics/catalog/collections`,
          title: 'sidenav.basics.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basics-catalog-combo',
          path: `${APP_PREFIX_PATH}/basics/catalog/combo`,
          title: 'sidenav.basics.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'basics-orders',
      path: `${APP_PREFIX_PATH}/basics/orders`,
      title: 'sidenav.basics.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basics-clients',
      path: `${APP_PREFIX_PATH}/basics/clients`,
      title: 'sidenav.basics.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'basics-clients-list',
          path: `${APP_PREFIX_PATH}/basics/clients/list`,
          title: 'sidenav.basics.clients.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basics-clients-groups',
          path: `${APP_PREFIX_PATH}/basics/clients/groups`,
          title: 'sidenav.basics.clients.groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }, 
    {
      key: 'basics-banners',
      path: `${APP_PREFIX_PATH}/basics/banners`,
      title: 'sidenav.basics.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basics-promocodes',
      path: `${APP_PREFIX_PATH}/basics/promocodes`,
      title: 'sidenav.basics.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basics-offlineDots',
      path: `${APP_PREFIX_PATH}/basics/offlineDots`,
      title: 'sidenav.basics.offlineDots',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'basics-offlineDots-addresses',
          path: `${APP_PREFIX_PATH}/basics/offlineDots/addresses`,
          title: 'sidenav.basics.offlineDots.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basics-offlineDots-geofences',
          path: `${APP_PREFIX_PATH}/basics/offlineDots/geofences`,
          title: 'sidenav.basics.offlineDots.geofences',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }, 
    {
      key: 'basics-staff',
      path: `${APP_PREFIX_PATH}/basics/staff`,
      title: 'sidenav.basics.staff',
      icon: TeamOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basics-mailing',
      path: `${APP_PREFIX_PATH}/basics/mailing`,
      title: 'sidenav.basics.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const systemsBoardNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: SettingOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.dashboard.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    }, 
    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobileApp`,
      title: 'sidenav.dashboard.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/userLogs`,
      title: 'sidenav.dashboard.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...basicBoardNavTree,
  ...systemsBoardNavTree,
]

export default navigationConfig;
