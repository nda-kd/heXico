import axios from 'axios'
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
export const SEND_NEW_EMOJI = 'SEND_NEW_EMOJI'

export const sendNewMessage = (message) => ({
  type: SEND_NEW_MESSAGE,
  payload: message
})


export function login(email,password,history){
  return function() {
    return axios.post('',{
    email: email,
    password: password}
  ).then((response)=>{
      console.log('loginFunction::', response)
      window.localStorage.setItem('tocken', response.data.id)
      console.log('action props test::', history)
      history.push('/messenger')
  }).then((error) => {
      console.log('login error')
  })}
}

export function signup(email,password,history){
  return function(){
    return axios.post('',{
      email: email,
      password: password
    }).then(response => {
        console.log('loginFunction::', response)
        window.localStorage.setItem('tocken', response.data.id)
    }).then(error =>{
        console.log('sign up error')
    })
  }
}