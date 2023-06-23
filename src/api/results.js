import axios from 'axios';
import { handleRequestError } from './utils';
import { API_ROUTES } from './constants';
import { getTokenFromLocalStorage } from '../security/auth';

const token = getTokenFromLocalStorage();
const headers = { 'Authorization': `Bearer ${token}` }; 

export const getResults = async () => {
  try {
    const response = await axios.get(API_ROUTES.RESULTS, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const createResult = async (resultData) => {
  const payload = {
    course_uuid: resultData.course.value,
    student_uuid: resultData.student.value,
    grade: resultData.score.value
  }
  try {
    const response = await axios.post(API_ROUTES.RESULTS, payload, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const deleteResult = async (rowUuid) => {
  try {
    const response = await axios.delete(`${API_ROUTES.RESULTS}/${rowUuid}`, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
