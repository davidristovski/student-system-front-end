import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const ResultForm = ({ courses, students, scores, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmitForm = (data) => {
    onSubmit(data);
  };
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="formbold-form-title">
          <h2 className="">Add New Result</h2>
        </div>
        <div className="formbold-input-flex">
          <div>
            <label className="formbold-form-label">Course Name</label>
            <Controller
              name="course"
              control={control}
              rules={{ required: true }}
              defaultValue={courses[0]}
              render={({ field }) => (
                <Select {...field} options={courses} />
              )}
            />
            {errors.course && (
              <p className="errorMsg">This is a required field.</p>
            )}
          </div>
          <div>
            <label className="formbold-form-label">Student</label>
            <Controller
              name="student"
              control={control}
              rules={{ required: true }}
              defaultValue={students[0]}
              render={({ field }) => (
                <Select {...field} options={students} />
              )}
            />
            {errors.student && (
              <p className="errorMsg">This is a required field.</p>
            )}
          </div>
          <div>
            <label className="formbold-form-label">Score</label>
            <Controller
              name="score"
              control={control}
              rules={{ required: true }}
              defaultValue={scores[0]}
              render={({ field }) => (
                <Select {...field} options={scores} />
              )}
            />
            {errors.score && (
              <p className="errorMsg">This is a required field.</p>
            )}
          </div>
        </div>
        <div>
          <label></label>
          <button className="formbold-btn">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ResultForm;
