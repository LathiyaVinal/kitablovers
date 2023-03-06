import { IS_ADMIN_LOGGED_IN, SET_MENU_DATA } from "../actionTypes";

const initialState = {
  isAdminLoggedIn: false,
  menuData: "Books",
};
export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case IS_ADMIN_LOGGED_IN:
      return {
        ...state,
        isAdminLoggedIn: action.payload,
      };
    case SET_MENU_DATA:
      return {
        ...state,
        menuData: action.payload,
      };
    default:
      return state;
  }
}
