import { createStore } from "redux";

//Importing firebase
import firebase from "firebase";

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, logged: true, user: action.payload };

    case "USER_LOGOUT":
      return { ...state, logged: false, user: {} };

    case "CHANGE_USERNAME":
      return { ...state.user, displayName: action.payload };

    default:
      return state;
  }
};

const initialState = {
  logged: false,
  user: {},
  admins: ["jonatanpc.2014@gmail.com", "diegoamaya23@gmail.com"]
};

const store = createStore(reducer, initialState);

export default store;
