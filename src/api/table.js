import request from '@/utils/request'

export function getList(roleId) {
  return request({
    url: '/getRole',
    method: 'get',
    params: {
      roleId
    }
  })
}
