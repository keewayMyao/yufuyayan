import request from '@/utils/request'


export function getSignature() {
  return request({
    url: '/getSignature',
    method: 'get',
  })
}

