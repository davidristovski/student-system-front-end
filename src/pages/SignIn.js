import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES, APP_ROUTES } from '../api/constants';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../lib/customHooks';
import { storeTokenInLocalStorage } from '../security/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignIn = () => {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate(APP_ROUTES.HOME)
  }
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signIn = async (formData) => {
    try {
      setIsLoading(true);
      const payload = new FormData();
      payload.append('username', formData.userName)
      payload.append('password', formData.password)
      const response = await axios({
        method: 'POST',
        url: API_ROUTES.SIGN_IN,
        data: payload,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (!(typeof response?.data?.access_token === 'string' && response.data.access_token.trim().length > 0)) {
        toast.error("Unable to log-in, check back later please.", response);
        return;
      }
      if (response.status === 201) {
        toast.success("Welcome! Please refresh the page after I disappear!");
      }
      storeTokenInLocalStorage(response.data.access_token);
      navigate(APP_ROUTES.HOME);
    }
    catch (error) {
      if (error?.response?.status === 401) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Unable to log-in, check back later please.", error);
      }
    }
    finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit(signIn)}>
          <div className="formbold-form-title">
            <h2>Sign In</h2>
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
            } Sign In
          </button>
          <div style={{ paddingTop: "10px"}}>
            <p>Not a user yet?</p>
            <Link to="/signup">
              <div style={{ paddingTop: "10px"}}>Sign Up!</div>
            </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;