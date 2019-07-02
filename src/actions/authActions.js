import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  SET_CURRENT_GOAL
} from "./types";




// Register User
export const signupUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3001/users/signup", userData)
    .then(res => history.push("/login")) // re-direct to login on successful signup
    .catch(err =>
     console.log(err)
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:3001/users/login", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Delete user 
export const deleteUser = (deleteUserInfo) => dispatch => {
  console.log("CALLING DELETE FUNCTION")
  axios
    .delete(`http://localhost:3001/users/:Id`, deleteUserInfo)
    // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
};

// Create Goal
export const createGoal = (newGoal, history) => dispatch => {
  console.log("CALLING CREATE GOAL FUNCTION!");
  axios
    .post("http://localhost:3001/goals", newGoal)
    .then(res => history.push("/profile")) // re-direct to login on successful signup
    .catch(err =>
     console.log(err)
    );
};


// Set Goal Details
export const setGoalDetails = goalDetails => dispatch => {
  axios
    .get("http://localhost:3001/goals", goalDetails)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { goalToken } = res.data;
      localStorage.setItem("goalInfo", goalToken);
      // Set token to Auth header
      setAuthToken(goalToken);
      // Decode token to get user data
      const decoded = jwt_decode(goalToken);
      // Set current user
      dispatch(setCurrentGoal(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentGoal = decoded => {
  return {
    type: SET_CURRENT_GOAL,
    payload: decoded
  };
};