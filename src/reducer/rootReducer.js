const Init = {
  messageList: [
    {
      text: 'Hello',
      id: 1
    }
  ]
}

export default function conversation (state = Init, action) {
  console.log('action;', state, action)

  switch (action.type) {
    case 'SEND_NEW_MESSAGE':
      return {
        ...state,
        messageList: [
          ...state.messageList,
          {
            text: action.payload,
            id: 1
          }
        ]
      }

    default:
      return state
  }
}
