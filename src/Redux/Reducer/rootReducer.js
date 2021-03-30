import { SEND_NEW_MESSAGE } from '../action/actions'

const initState = {
  newMessage: [
    {
      message: ' ',
      id: ''
    }
  ],
}

export default function RootReducer (state = initState, action) {
  console.log('action::', action, 'state::', state)

  switch (action.type) {
    case SEND_NEW_MESSAGE :
      console.log("newMessage::",state.newMessage)
      return {
        ...state,
        newMessage: [
          ...state.newMessage,
          {
            message: action.payload 
          }
        ]
      }
      
    default:
      return state
  }
}
