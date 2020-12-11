import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration


//白名单不需要登录都可以跳转
const whiteList = ['/login','/register'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {

      const hasRoles = store.getters.roleId
      // console.log(hasRoles,2)
      if (hasRoles) {

        next()
      } else {
        try {
          // get user info
          const { roleId } = await store.dispatch('user/getInfo')
          // console.log(roleId,1)
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roleId)
          // console.log(roleId,2)
          // 动态添加可访问的路由
          router.addRoutes(accessRoutes)
          // console.log(accessRoutes,3)
          if(roleId === 0){
            next()
          }else {
          //   // hack方法，以确保addRoutes是完整的
          //   // 设置replace：true，因此导航将不会留下历史记录
            next({ ...to, replace: true })
          }
        } catch (error) {
          // 删除token并进入登录页面重新登录
          await store.dispatch('user/resetToken')
          Message.error(toString(error))
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    /* 没有令牌 */

    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单中，直接进入
      next()
    } else {
      // 其他无权访问的页面将重定向到登录页面。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})


