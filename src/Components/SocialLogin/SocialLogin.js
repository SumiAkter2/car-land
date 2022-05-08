import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const SocialLogin = () => {
    const [googleSignIn, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return (<Spinner></Spinner>)
    }

    if (error ) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user ) {
        navigate('/home');
    }

    return (
        <div>
            {/*======================= Google sign In================ */}
<div className='login-logo text-center'>
       <button onClick={() => googleSignIn()} className='border-0 btn  w-25 mx-auto'>  <img  src="Google.jpg" alt="google-image" />oogle Sign In</button>
          </div>
        </div>
    );
};

export default SocialLogin;