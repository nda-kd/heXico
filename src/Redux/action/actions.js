export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

export const sendNewMessage = (message) => ({
  type: SEND_NEW_MESSAGE,
  payload: message
})
