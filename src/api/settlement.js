import request from '@/utils/request'

export function settlement(userId) {
  return request({
    url: '/settlement',
    method: 'post',
    data: {
      userId
    },
  })
}
