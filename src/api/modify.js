import request from '@/utils/request'

export function updateNickName(userId, userNickName) {
  return request({
    url: '/updateNickName',
    method: 'get',
    params: {
      userId,
      userNickName
    }
  })
}

export function updatePas(userId, newPas, oldPas ) {
  return request({
    url: '/updatePas',
    method: 'post',
    data: {
      userId,
      newPas,
      oldPas
    }
  })
}
