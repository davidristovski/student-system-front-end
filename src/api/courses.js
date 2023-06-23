import axios from 'axios';
import { camelToSnakeCase, handleRequestError } from './utils';
import { API_ROUTES } from './constants';
import { getTokenFromLocalStorage } from '../security/auth';

const token = getTokenFromLocalStorage();
const headers = { 'Authorization': `Bearer ${token}` }; 

export const getCourses = async () => {
  try {
    const response = await axios.get(API_ROUTES.COURSES, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const createCourse = async (courseData) => {
  const payload = camelToSnakeCase(courseData);
  try {
    const response = await axios.post(API_ROUTES.COURSES, payload, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const deleteCourse = async (rowUuid) => {
  try {
    const response = await axios.delete(`${API_ROUTES.COURSES}/${rowUuid}`, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
