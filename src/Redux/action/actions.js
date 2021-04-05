import axios from "axios";
export const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";
export const SEND_NEW_EMOJI = "SEND_NEW_EMOJI";
export const GET_CONVERSATION = "GET_CONVERSATION";

export const sendNewMessage = (newMessage) => ({
  type: SEND_NEW_MESSAGE,
  payload: newMessage,
});

export const getConversation = (user) => ({
  type: GET_CONVERSATION,
  payload: user,
});

export const login = (email, password, history) => {
  return function () {
    return axios
      .post("http://localhost:3000/users", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("loginFunction::", response);
        window.localStorage.setItem("tocken", response.data.id);
        console.log("action props test::", history);
        history.push("/messenger");
      })
      .then((error) => {
        console.log("login error::", error);
      });
  };
};

export function signup(email, password, history) {
  return function () {
    return axios
      .post("http://localhost:3000/users", {
        data: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        console.log("loginFunction::", response);
        window.localStorage.setItem("tocken", response.data.id);
      })
      .then((error) => {
        console.log("sign up error::", error);
      });
  };
}
