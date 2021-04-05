import {
  SEND_NEW_MESSAGE,
  GET_CONVERSATION,
  PROFILE_INFO,
  GET_AVATAR,
  AUTHENTICATED_USER
} from "../action/actions";

const initState = {
  newMessage: [],
  authenticated: false,
  user: "",
  admin: "",
  adminAvatar: "https://free4kwallpapers.com/uploads/originals/2015/07/25/beatiful-girl-red-hair-blue-eyes-winter.jpg",
};

export default function RootReducer(state = initState, action) {
  console.log("action::", action, "state::", state);

  switch (action.type) {
    case SEND_NEW_MESSAGE:
      console.log("newMessage::", state.newMessage);
      return {
        ...state,
        newMessage: [...state.newMessage, action.payload],
      };

    case GET_CONVERSATION:
      console.log("conversationaction::", state.user);
      return {
        ...state,
        user: action.payload,
      };

    case PROFILE_INFO:
      console.log("profileInfo::", state.admin);
      return {
        ...state,
        admin: action.payload,
      };

    case GET_AVATAR: 
      console.log("profileInfo::", state.adminAvatar);
      return {
        ...state,
        adminAvatar: action.payload
      }

    case AUTHENTICATED_USER:
      console.log("authenticatedUser::", state.authenticated);
      return{
        ...state,
        authenticated: action.payload
      }

    default:
      return state;
  }
}
