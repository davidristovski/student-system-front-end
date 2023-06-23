import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer, toast } from 'react-toastify';
import Home from "./pages/Home";
import AndNewStudent from './pages/AddNewStudent';
import StudentsList from './pages/StudentsList';
import AddNewCourse from './pages/AddNewCourse';
import CoursesList from './pages/CoursesList';
import AddNewResult from './pages/AddNewResult';
import ResultsList from './pages/ResultsList';
import LeftSidebar from './components/Sidebar';
import { APP_ROUTES } from './api/constants';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useUser } from './lib/customHooks';
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {

  const { user, authenticated } = useUser();

  if (!user || !authenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <div style={{ display: "flex", height: "100vh" }}>
          <LeftSidebar>
          <MenuItem component={<Link to={APP_ROUTES.SIGN_IN} className="link" />}>
            Sign In
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.SIGN_UP} className="link" />}>
            Sign Up
          </MenuItem>
          </LeftSidebar>
            <section>
              <Routes>
                <Route path={APP_ROUTES.SIGN_UP} element={<SignUp />} />
                <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
              </Routes>
            </section>
        </div>
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={1000}/>
      </QueryClientProvider>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: "flex", height: "100vh" }}>
        <LeftSidebar>
          <MenuItem component={<Link to={APP_ROUTES.HOME} className="link" />}>
            Home
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.ADD_NEW_STUDENT} className="link" />}>
            Add New Student
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.STUDENTS_LIST} className="link" />}>
            Students List
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.ADD_NEW_COURSE} className="link" />}>
            Add New Course
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.COURSES_LIST} className="link" />}>
            Courses List
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.ADD_NEW_RESULT} className="link" />}>
            Add New Result
          </MenuItem>
          <MenuItem component={<Link to={APP_ROUTES.RESULTS_LIST} className="link" />}>
            Results List
          </MenuItem>
        </LeftSidebar>
        <section>
          <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
            <Route path={APP_ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={APP_ROUTES.ADD_NEW_STUDENT} element={<AndNewStudent />} />
            <Route path={APP_ROUTES.STUDENTS_LIST} element={<StudentsList />} />
            <Route path={APP_ROUTES.ADD_NEW_COURSE} element={<AddNewCourse />} />
            <Route path={APP_ROUTES.COURSES_LIST} element={<CoursesList />} />
            <Route path={APP_ROUTES.ADD_NEW_RESULT} element={<AddNewResult />} />
            <Route path={APP_ROUTES.RESULTS_LIST} element={<ResultsList />} />
          </Routes>
        </section>
      </div>
      <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={1000}/>
    </QueryClientProvider>
  );
};

export default App;
