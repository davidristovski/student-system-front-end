import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES, APP_ROUTES } from '../api/constants';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const SignUp = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const signUp = async (formData) => {
    try {
      setIsLoading(true);
      const payload = {
        username: formData.userName,
        password: formData.password
      }
      const response = await axios.post(`${API_ROUTES.SIGN_UP}`, payload);
      if (response.data.status === 201) {
        navigate(APP_ROUTES.SIGN_IN);
      }
    }
    catch (error) {
      if (error.response.status === 409) {
        toast.error(error.response.data.detail);
      }
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit(signUp)}>
          <div className="formbold-form-title">
            <h2>Sign Up</h2>
          </div>
          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">
                Username
              </label>
              <input
                type="text"
                name="user-name"
                id="user-name"
                className="formbold-form-input"
                {...register("userName", { required: "This field is required." })}
              />
              {errors.userName && <p className="errorMsg">{errors.userName.message}</p>}
            </div>
            <div>
              <label className="formbold-form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="formbold-form-input"
                {...register("password", { required: "This field is required." })}
              />
              {errors.password && <p className="errorMsg">{errors.password.message}</p>}
            </div>
          </div>
          <button className="formbold-btn">
            {
            isLoading ?
              <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
            } Sign Up
          </button>
          <div style={{ paddingTop: "10px"}}>
            <p>Already a User?</p>
            <Link to="/signin">
              <div style={{ paddingTop: "10px"}}>Sign In</div>
            </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;