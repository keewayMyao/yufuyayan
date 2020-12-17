import request from '@/utils/request'


export function delUserById(userId) {
  return request({
    url: '/delUserById',
    method: 'get',
    params: { userId }
  })
}
