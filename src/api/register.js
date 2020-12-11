import request from '@/utils/request'

export function register(nickName, userName, userPas, invitationCode) {
  return request({
    url: '/registered',
    method: 'post',
    data: {
      nickName,
      userName,
      userPas,
      invitationCode
    }
  })
}


