import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import {UserAuth} from './AuthContext';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Sign in</title>
      </Helmet>

      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
