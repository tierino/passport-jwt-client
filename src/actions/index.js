import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

// Redux Thunk allows us to return either an action object (as usual) or a function
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    ); //formProps has email and password

    // Successful signup action, send web token in payload
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // Store token in localStorage (persisting logged-in state)
    localStorage.setItem("token", response.data.token);
    // Redirects user to '/feature'
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use." });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    ); //formProps has email and password

    // Successful signin action, send web token in payload
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // Store token in localStorage (persisting logged-in state)
    localStorage.setItem("token", response.data.token);
    // Redirects user to '/feature'
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid email or password." });
  }
};
