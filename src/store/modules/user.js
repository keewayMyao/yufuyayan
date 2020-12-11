import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'


const getDefaultState = () => {
  return {
    token: getToken(),
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', //头像
    userId: '', //用户ID
    nickName: '', //昵称
    userName: '', //用户名
    userRole: '', //用户身份
    roleId: '',    //身份ID
    income: '',
    invitationCode: '', //邀请码

  }
}

const state = getDefaultState()


const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, state)
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // SET_AVATAR: (state, avatar) => {
  //   state.token = avatar
  // },
  SET_NICKNAME: (state, nickName) => {
    state.nickName = nickName
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_USERNAME: (state, userName) => {
    state.userName = userName
  },
  SET_USERROLE: (state, userRole) => {
    state.userRole = userRole
  },
  SET_ROLEID: (state, roleId) => {
    state.roleId = roleId
  },
  SET_INCOME: (state, income) => {
    state.income = income
  },
  SET_INVITATIONCODE: (state, invitationCode) => {
    state.invitationCode = invitationCode
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const userName = userInfo.userName.trim()
    const userPas = userInfo.userPas.trim()
    return new Promise((resolve, reject) => {
      login(userName, userPas).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  //获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // console.log(state.token)
      getInfo(state.token).then(response => {
        const { data } = response
        // console.log(data.roleId)
        if (!data) {
          return reject('验证失败，请重新登录')
        }
        const { nickName, roleId ,userId, userName,
          userRole, invitationCode, income, avatar} = data
        commit('SET_NICKNAME', nickName)
        // commit('SET_AVATAR', avatar)
        commit('SET_USERID', userId)
        commit('SET_USERNAME', userName)
        commit('SET_USERROLE', userRole)
        commit('SET_ROLEID', roleId)
        commit('SET_INCOME', income)
        commit('SET_INVITATIONCODE', invitationCode)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 用户注销
  logout({ commit }) {
    return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLEID', '')
        removeToken() // must remove  token  first
        resetRouter()
      resolve()
    })
  },

  // 删除token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

