import axios from 'axios';
import { camelToSnakeCase, handleRequestError } from './utils';
import { API_ROUTES } from './constants';
import { getTokenFromLocalStorage } from '../security/auth';

const token = getTokenFromLocalStorage();
const headers = { 'Authorization': `Bearer ${token}` }; 

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_ROUTES.STUDENTS}`, { headers });
    return response.data.map((student) => ({
      ...student,
      student_name: `${student.first_name} ${student.last_name}`,
      date_of_birth: new Date(student.date_of_birth).toLocaleDateString('en-US'),
    }));
  } catch (error) {
    return handleRequestError(error);
  }
};

export const createStudent = async (studentData) => {
  const payload = camelToSnakeCase(studentData);
  try {
    const response = await axios.post(`${API_ROUTES.STUDENTS}`, payload, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const deleteStudent = async (rowUuid) => {
  try {
    const response = await axios.delete(`${API_ROUTES.STUDENTS}/${rowUuid}`, { headers });
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
