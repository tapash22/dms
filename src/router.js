import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('./components/Dashboard.vue')
      },
      {
        path: '/category-type',
        name: 'category-type',
        component: () => import('./components/CategoryType.vue')
      },
      {
        path: '/document',
        name: 'document',
        component: () => import('./components/Document.vue'),
      },
      {
        path: '/file-upload',
        name: 'file-upload',
        component: () => import('./pages/FileUpload.vue'),
      },
      {
        path: '/document/:type',
        name: 'document-info',
        component: () => import('./components/DocumentDetails.vue')
      },
      {
        path: '/file/details',
        name: 'file-details',
        component: () => import('./components/DocFileDetails.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('./components/Category.vue')
      },
      {
        path: '/meta-field',
        name: 'meta-field',
        component: () => import('./components/MetaField.vue')
      },
      {
        path: '/shared-with-me',
        name: 'shared-with-me',
        component: () => import('./components/SharedWithMe.vue')
      },
      {
        path: '/pending-approval-list',
        name: 'pending-approval-list',
        component: () => import('./components/PendingApprovalList.vue')
      },
      {
        path: '/ui',
        name: 'ui',
        component: () => import('./components/UI.vue')
      },
      {
        path: '/category-ui',
        name: 'category-ui',
        component: () => import('./components/CategoryUI.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('./components/User.vue')
      },
      {
        path: '/user-group',
        name: 'user-group',
        component: () => import('./components/UserGroup.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('./components/Role.vue')
      },

      // {
      //     path: '/user-group-role',
      //     name: 'user-group-role',
      //     component: () => import('./components/UserGroupRole.vue')
      // },
      {
        path: '/user-group-category',
        name: 'user-group-category',
        component: () => import('./components/UserGroupCategory.vue')
      },

      {
        path: '/formlayout',
        name: 'formlayout',
        component: () => import('./components/FormLayoutDemo.vue')
      },
      {
        path: '/input',
        name: 'input',
        component: () => import('./components/InputDemo.vue')
      },
      {
        path: '/floatlabel',
        name: 'floatlabel',
        component: () => import('./components/FloatLabelDemo.vue')
      },
      {
        path: '/invalidstate',
        name: 'invalidstate',
        component: () => import('./components/InvalidStateDemo.vue')
      },
      {
        path: '/button',
        name: 'button',
        component: () => import('./components/ButtonDemo.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('./components/TableDemo.vue')
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListDemo.vue')
      },
      {
        path: '/tree',
        name: 'tree',
        component: () => import('./components/TreeDemo.vue')
      },
      {
        path: '/panel',
        name: 'panel',
        component: () => import('./components/PanelsDemo.vue')
      },
      {
        path: '/overlay',
        name: 'overlay',
        component: () => import('./components/OverlayDemo.vue')
      },
      {
        path: '/media',
        name: 'media',
        component: () => import('./components/MediaDemo.vue')
      },
      {
        path: '/menu',
        component: () => import('./components/MenuDemo.vue'),
        children: [
          {
            path: '',
            component: () => import('./components/menu/PersonalDemo.vue')
          },
          {
            path: '/menu/seat',
            component: () => import('./components/menu/SeatDemo.vue')
          },
          {
            path: '/menu/payment',
            component: () => import('./components/menu/PaymentDemo.vue')
          },
          {
            path: '/menu/confirmation',
            component: () => import('./components/menu/ConfirmationDemo.vue')
          }
        ]
      },
      {
        path: '/messages',
        name: 'messages',
        component: () => import('./components/MessagesDemo.vue')
      },
      {
        path: '/file',
        name: 'file',
        component: () => import('./components/FileDemo.vue')
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('./components/ChartDemo.vue')
      },
      {
        path: '/misc',
        name: 'misc',
        component: () => import('./components/MiscDemo.vue')
      },
      {
        path: '/crud',
        name: 'crud',
        component: () => import('./pages/CrudDemo.vue')
      },
      {
        path: '/timeline',
        name: 'timeline',
        component: () => import('./pages/TimelineDemo.vue')
      },
      {
        path: '/empty',
        name: 'empty',
        component: () => import('./components/EmptyPage.vue')
      },
      {
        path: '/documentation',
        name: 'documentation',
        component: () => import('./components/Documentation.vue')
      },
      {
        path: '/blocks',
        name: 'blocks',
        component: () => import('./components/BlocksDemo.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import('./components/IconsDemo.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/Login.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('./pages/LandingDemo.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('./pages/Error.vue')
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('./pages/NotFound.vue')
  },
  {
    path: '/access',
    name: 'access',
    component: () => import('./pages/Access.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('./pages/demo/DemoForm.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('./pages/demo/Content.vue')
  },
]

const router = createRouter({
// change the history from Hash to /
  history:createWebHistory(),
  // history: createWebHashHistory(),
  routes
})

export default router
