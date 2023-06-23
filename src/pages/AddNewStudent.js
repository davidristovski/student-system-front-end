import StudentForm from "../components/StudentForm";
import { createStudent } from "../api/students";
import { handleFormSubmit } from "./utils";
import { useUser } from '../lib/customHooks';


const AddNewStudent = () => {

  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return <div className="p-16 bg-gray-800 h-screen">
        <div className="text-2xl mb-4 font-bold text-white">Home</div>
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>;
  }

  const handleStudentSubmit = (data) => {
    handleFormSubmit(() => createStudent(data), "Student created successfully!");
  };
  return (
      <div>
        <StudentForm onSubmit={handleStudentSubmit}/>
      </div>
    );
  }

export default AddNewStudent;
