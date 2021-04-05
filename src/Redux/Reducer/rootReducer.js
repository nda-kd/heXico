import { SEND_NEW_MESSAGE } from '../action/actions'
import { GET_CONVERSATION } from '../action/actions'

const initState = {
  newMessage: [],
  user : ''
}
 
export default function RootReducer (state = initState, action) {
  console.log('action::', action, 'state::', state)

  switch (action.type) {
    case SEND_NEW_MESSAGE :
      console.log("newMessage::",state.newMessage)
      return {
        ...state,
        newMessage: [...state.newMessage, action.payload]

      }
    
    case GET_CONVERSATION:
      console.log("conversationaction::",state.user)
      return {
        ...state,
        user: action.payload
      }
      
    default:
      return state
  }
}
