import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "./action";

const initialState = {
  user: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCCESS:
      {console.log("usersss",action.payload)}
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
