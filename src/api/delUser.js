import request from '@/utils/request'


export function delUserById(id) {
  return request({
    url: '/delUserById',
    method: 'get',
    params: { id }
  })
}
