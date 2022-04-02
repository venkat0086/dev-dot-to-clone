import {
    LOGIN_SUCCESS, LOGOUT_SUCCESS,
  } from "./actionTypes";
  
  export const loginSuccess = (token) => {
    return {
      type: LOGIN_SUCCESS,
      payload: token,
    };
  };

  export const logoutSuccess = (key) => {
    return {
      type: LOGOUT_SUCCESS,
      payload: key,
    };
  };
  