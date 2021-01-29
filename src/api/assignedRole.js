import request from '@/utils/request'

export function getAssignedRole(userId, roleId) {
  return request({
    url: `/assignedRole?userId=${userId}&roleId=${roleId}`,
    method: 'get'
  })
}



