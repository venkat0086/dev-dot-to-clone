import { deleteData, loadData, saveData } from "../utils/localStorage";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

const token = loadData("token");
console.log('token:', token);

const init = {
  token: token || "",
};

export const reducer = (state = init, { type, payload }) => {
  console.log("stateda:", state);
  switch (type) {
    case LOGIN_SUCCESS: {
      saveData("token", payload);
      return {
        ...state,
        token: payload,
      };
    }

    case LOGOUT_SUCCESS: {
      deleteData(payload);
      return {
        ...state,
        token: "",
      };
    }

    default: {
      return state;
    }
  }
};
