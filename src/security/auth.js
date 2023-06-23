import { API_ROUTES } from '../api/constants';
import axios from 'axios';

export function storeTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
};

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
};

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    if (!token || token === 'undefined' || token === undefined) {
      return defaultReturnObject;
    }
    const response = await axios({
      method: 'GET',
      url: API_ROUTES.GET_USER,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const { status } = response;
    if (status === 200) {
      return { authenticated: true, user: response.data }
    } else {
      return defaultReturnObject;
    }
  }
  catch (err) {
    console.log('getAuthenticatedUser Error:', err.message || err);
    return defaultReturnObject;
  }
};
