import axios from 'axios'
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
export const SEND_NEW_EMOJI = 'SEND_NEW_EMOJI'
export const GET_CONVERSATION = 'GET_CONVERSATION'
export const PROFILE_INFO = 'PROFILE_INFO'
export const GET_AVATAR = 'GET_AVATAR'
export const AUTHENTICATED_USER = 'AUTHENTICATED_USER'

export const sendNewMessage = (newMessage) => ({
  type: SEND_NEW_MESSAGE,
  payload: newMessage
})

export const getConversation = (user) => ({
  type: GET_CONVERSATION,
  payload: user
})

export const profileInfo = (admin) => ({
  type: PROFILE_INFO,
  payload: admin
})

export const getAvatar = avatar => ({
  type: GET_AVATAR,
  payload: avatar
})

export const authenticatedUser = authenticated => ({
  type: AUTHENTICATED_USER,
  payload: authenticated
})

// export const login = (email, password, history) => {
//   return function () {
//     return axios
//       .post('http://localhost:3000/users', {
//         email: email,
//         password: password
//       })
//       .then((response) => {
//         console.log('loginFunction::', response)
//         window.localStorage.setItem('tocken', response.data.id)
//         console.log('action props test::', history)
//         history.push('/messenger')
//       })
//       .then((error) => {
//         console.log('login error::', error)
//       })
//   }
// }

export function signup (email, password, history) {
  return function () {
    return axios
      .post('http://localhost:3000/users', {
        data: {
          email: email,
          password: password
        }
      })
      .then((response) => {
        console.log('loginFunction::', response)
        window.localStorage.setItem('tocken', response.data.id)
      })
      .then((error) => {
        console.log('sign up error::', error)
      })
  }
}
