import axios from 'axios';
import { GET_USERS_FAIL, GET_USERS_SUCCESS, SET_CURRENT_USER } from '../Type';

export const getUsersAction = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      dispatch({ type: GET_USERS_SUCCESS, data: response.data });
    } catch (error) {
      dispatch({ type: GET_USERS_FAIL, error });
    }
};

export const setUserAction = (user) => {
  return {
    type: SET_CURRENT_USER,
    data: user
  }
}