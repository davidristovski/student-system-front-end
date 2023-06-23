import { useForm } from 'react-hook-form';

const CourseForm = ( {onSubmit} ) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="formbold-form-title">
            <h2 className="">Add New Course</h2>
          </div>
          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">
                Course Name
              </label>
              <input
                type="text"
                name="course-name"
                id="course-name"
                className="formbold-form-input"
                {...register("courseName", { required: "This field is required." })}
              />
              {errors.courseName && <p className="errorMsg">{errors.courseName.message}</p>}
            </div>
          </div>
          <button className="formbold-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
