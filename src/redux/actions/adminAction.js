import { IS_ADMIN_LOGGED_IN, SET_MENU_DATA } from "../actionTypes";

export const loginAdmin = (payload) => (dispatch) => {
  dispatch({ type: IS_ADMIN_LOGGED_IN, payload });
};

export const setMenuData = (payload) => (dispatch) => {
  dispatch({ type: SET_MENU_DATA, payload });
};
