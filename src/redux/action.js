import request from "../@utils/request";
export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";
export const getUserDataRequest = () => ({
  type: USER_REQUEST,
});
export const getUserData = (payload) => ({
  type: USER_SUCCESS,
  payload,
});

export const UserDataError = (payload) => ({
  type: USER_ERROR,
  payload,
});
export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUserDataRequest());
    fetch("https://randomuser.me/api/?results=10").then(res=>res.json()).then((response) => {
        dispatch(getUserData(response.results));
        console.log("response", response.results);
    });
  };
};
