import { Alert, Label, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextInput, Button } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessages } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.email || !formData.password) {
    return dispatch(signInFailure('Please fill out all fields.'));
  }
  try {
    dispatch(signInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data.message));
    } else {
      dispatch(signInSuccess(data));
      navigate('/');
    }
  } catch (error) {
    dispatch(signInFailure(error.message));
  } finally { 
    dispatch(signInFinish());
  }
};

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to="/" className=' font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blog</span>
            Application
          </Link>
          <br></br>
          <br></br>
          <p className='text-sm mt:5'>Welcome! to the Signin page for My Blog's website. You can sign in with your email and password or with Google Account.</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='*************' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </> ) : 'Sign In'
              }
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't Have an account?</span>
            <Link to='/sign-up' className='text-blue-500 font-bold'>Sign up</Link>
          </div>
          {
            errorMessages && (
              <Alert className='mt-5' color={'failure'}>{errorMessages}</Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
