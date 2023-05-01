import React from 'react';
import {UserAuth} from './AuthContext';
import {Helmet} from "react-helmet";

const Account = () => {
  const { logOut, user } = UserAuth();
  

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] m-auto'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Account</title>
      </Helmet>

      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  );
};

export default Account;