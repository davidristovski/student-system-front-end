const API_URL = 'http://localhost:8000/api/v1'

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/users`,  // do a POST to sign up
  SIGN_IN: `${API_URL}/auth/login`,
  GET_USER: `${API_URL}/auth/me`,

  COURSES: `${API_URL}/courses`,
  STUDENTS: `${API_URL}/students`,
  RESULTS: `${API_URL}/grade_cards`,
}

export const APP_ROUTES = {
  HOME: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  ADD_NEW_STUDENT: '/add-new-student',
  STUDENTS_LIST: '/students-list',
  ADD_NEW_COURSE: '/add-new-course',
  COURSES_LIST: '/courses-list',
  ADD_NEW_RESULT: '/add-new-result',
  RESULTS_LIST: '/results-list',
}
