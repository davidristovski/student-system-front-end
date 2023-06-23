import React from 'react';
import { useUser } from '../lib/customHooks';

const Home = () => {
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return (
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="formbold-form-title">
                <h2 className="">Add New Course</h2>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="formbold-form-title">
              <h2 className="">Hello, {user.username}!</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;