import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

//普通路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/userList',
    name: 'UserList',
    component: () => import('@/views/userList/index'),
    hidden: true
  },
  {
    path: '/lookSonList',
    name: 'LookSonList',
    component: () => import('@/views/lookSonList/index'),
    hidden: true
  },
  {
    path: '/invite',
    component: () => import('@/views/invite/index'),
    hidden: true
  },
  {
    path: '/myHome',
    component: () => import('@/views/myHome/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/distribution',
    component: Layout,
    redirect: '/distribution',
    children: [
      {
        path: 'index',
        name: 'Distribution',
        component: () => import('@/views/distribution/index'),
        meta: { title: '管理中心', icon: 'tree' }
      }
    ]
  }
]
//超级管理员路由
export const asyncRouter = [
  {
    path: '/administration',
    alwaysShow: true,
    component: Layout,
    hidden: false,
    redirect: '/administration/index',
    name: 'Administration',
    meta: {
      title: '管理',
      icon: 'el-icon-s-help',
    },
    children: [
      {
        path: 'allUser',
        name: 'AllUser',
        component: () => import('@/views/allUser/index'),
        meta: { title: '全部用户', icon: 'table' }
      },
      {
        path: 'founder',
        name: 'Founder',
        component: () => import('@/views/founder/index'),
        meta: { title: '创始人', icon: 'table' }
      },
      {
        path: 'partner',
        name: 'Partner',
        component: () => import('@/views/partner/index'),
        meta: { title: '合伙人', icon: 'table' }
      },
      {
        path: 'mouthpiece',
        name: 'Mouthpiece',
        component: () => import('@/views/mouthpiece/index'),
        meta: { title: '代言人', icon: 'table' }
      },
      {
        path: 'tourist',
        name: 'Tourist',
        component: () => import('@/views/tourist/index'),
        meta: { title: '普通用户', icon: 'table' }
      }
    ]
  },
  {
    path: '/operate',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Operate',
        component: () => import('@/views/operate/index'),
        meta: { title: '操作日志', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
//用户路由
export const userAsyncRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }]
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
