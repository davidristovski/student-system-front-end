import { useQuery } from 'react-query';
import ResultForm from "../components/ResultForm";
import { createResult } from "../api/results";
import { getCourses } from '../api/courses';
import { getStudents } from '../api/students';
import { handleFormSubmit } from "./utils";
import { transformCoursesForDisplay, transformStudentsForDisplay } from '../api/utils';

const AddNewResult = () => {
  const { data: courses, isLoadingCourses, errorCourses } = useQuery('courses', getCourses);
  const { data: students, isLoadingStudents, errorStudents } = useQuery('students', getStudents);
  const scores = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "F", label: "F" }
  ]
  const handleResultSubmit = (data) => {
    handleFormSubmit(() => createResult(data), "Result created successfully!");
  };
  if (isLoadingCourses || isLoadingStudents) {
    return <div>Loading...</div>;
  }
  if (errorCourses || errorStudents) {
    const error = errorCourses || errorStudents
    return <div>Error: {error.message}</div>;
  }
  if (!courses || !students) {
    return null;
  }
  const transformedCourses = transformCoursesForDisplay(courses || []);
  const transformedStudents = transformStudentsForDisplay(students || []);
  return (
      <div>
        <ResultForm courses={transformedCourses} students={transformedStudents} scores={scores} onSubmit={handleResultSubmit}/>
      </div>
    );
  }

export default AddNewResult;
