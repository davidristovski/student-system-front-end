import CourseForm from "../components/CourseForm";
import { createCourse } from "../api/courses";
import { handleFormSubmit } from "./utils";

const AddNewCourse = () => {
  const handleCourseSubmit = (data) => {
    handleFormSubmit(() => createCourse(data), "Course created successfully!");
  };
  return (
      <div>
        <CourseForm onSubmit={handleCourseSubmit}/>
      </div>
    );
  }

export default AddNewCourse;
