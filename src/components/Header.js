import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button, Alert, Snackbar } from '@mui/material';
import { fetcher, METHOD } from '../fetcher';
import { signOut } from '../endpoints';

export default function Header() {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    const response = await fetcher(signOut, METHOD.POST);
    console.log('response :', response);

    // setAlert({
    //   open: true,
    //   status: response.status,
    //   message: response.message,
    // });

    if (response.status === 0) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      navigate('/signin')
    }
  };
  return (
    <section className='absolute h-20 w-full flex justify-between px-8 items-center'>
      <section className='font-bold text-2xl'>Feverly Back Office</section>
      <section>
        <Button onClick={() => handleSubmit()}>Sign Out</Button>
      </section>
    </section>
  );
}
