import request from '@/utils/request'


export function getSignature() {
  return request({
    url: '/getSignature',
    method: 'get',
  })
}


export function test(){
  return request({
    url: '/test001',
    method:'get',
  })
}
