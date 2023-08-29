import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { TextField, Button, Alert, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { fetcher, METHOD } from '../fetcher';
import { signIn } from '../endpoints';

export default function SignIn() {
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({
    open: false,
    status: null,
    message: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    setLoading(true);

    console.log(process.env.REACT_APP_API_URL);
    e.preventDefault();

    const response = await fetcher(
      signIn,
      METHOD.POST,
      {
        username,
        password,
      },
      false
    );

    setAlert({
      open: true,
      status: response.status,
      message: response.message,
    });

    if (response.status === 0) {
      localStorage.setItem('accessToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setAlert({
      open: false,
      status: null,
      message: '',
    });
  };

  return (
    <section className='container flex justify-center items-center min-h-screen mx-auto flex-col'>
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.status ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
      <h1 className='text-4xl font-bold mb-4'>Sign In Feverly Backoffice</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='username'
          name='username'
          label='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoadingButton
          loading={loading}
          loadingIndicator='Loading...'
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
        >
          Sign In
        </LoadingButton>
        <section className='text-center mt-4'>
          <NavLink to={'/signup'}>
            <Button className='w-full'>Sign Up</Button>
            {/* <a class='no-underline hover:underline text-blue-500'>Sign Up</a> */}
          </NavLink>
        </section>
      </form>
    </section>
  );
}
