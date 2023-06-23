import { useForm } from 'react-hook-form';
import '../styles/formStyles.css';

const StudentForm = ( {onSubmit} ) => {
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

  const isTenYearsOrOlder = (value) => {
    const today = new Date();
    const selectedDate = new Date(value);
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 10);
    if (selectedDate > minDate) {
        return 'Student must be 10 years or older.';
    }
    return true
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="formbold-form-title">
            <h2>Add New Student</h2>
          </div>
          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="formbold-form-input"
                {...register("firstName", { required: "This field is required." })}
              />
              {errors.firstName && <p className="errorMsg">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="formbold-form-label">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="formbold-form-input"
                {...register("lastName", { required: "This field is required." })}
              />
              {errors.lastName && <p className="errorMsg">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="formbold-form-input"
                {...register("email", { required: "This field is required.", pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid."
                }})}
              />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            </div>
            <div>
              <label className="formbold-form-label">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="formbold-form-input"
                {...register("dateOfBirth", {
                    required: "This field is required.",
                    validate: isTenYearsOrOlder
                })}
              />
            {errors.dateOfBirth && <p className="errorMsg">{errors.dateOfBirth.message}</p>}
            </div>
          </div>
          <button className="formbold-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
