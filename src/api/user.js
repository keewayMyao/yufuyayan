import request from '@/utils/request'

//登录接口
export function login(userName, userPas) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      userName,
      userPas
    }
  })
}

//
export function getInfo(userToken) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    params: { userToken }
  })
}

export function getUser() {
  return request({
    url: '/getUser',
    method: 'get',
  })
}
export function queryUserListById(accountType,id) {
  return request({
    url: `/queryUserListById?accountType=${accountType}&id=${id}`,
    method: 'get',
  })
}






// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
