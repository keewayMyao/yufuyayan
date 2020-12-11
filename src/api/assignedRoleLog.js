import request from '@/utils/request'

export function getAssignedRoleLog(num, pages) {
  return request({
    url: `/getAssignedRoleLog?num=${num}&pages=${pages}`,
    method: 'get'
  })
}
//192.168.0.129:8080/getAssignedRoleLog?num=10&pages=10
