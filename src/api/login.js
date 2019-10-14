import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    memberName: username,
    password: password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/user/current',
    method: 'get'
  })
}
