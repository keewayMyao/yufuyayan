import { asyncRouter, constantRoutes } from '@/router'


// function hasPermission(roleId, route) {
//   if (route.meta && route.meta.roleId) {
//     return roleId.some(role => route.meta.roleId.includes(role))
//   } else {
//     return true
//   }
// }
//
//
// export function filterAsyncRoutes(routes, roleId) {
//   const res = []
//
//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roleId, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRoutes(tmp.children, roleId)
//       }
//       res.push(tmp)
//     }
//   })
//
//   return res
// }

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roleId) {
    return new Promise(resolve => {
      let accessedRoutes
      //如果roleId等于99就是超级管理员，不等于就不需要权限路由
      if (roleId === 99) {
        //添加权限路由
        accessedRoutes = asyncRouter || []
      }
      else {
        //不添加权限路由
        accessedRoutes = []
        // accessedRoutes = filterAsyncRoutes(asyncRouter, roleId)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
