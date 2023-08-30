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

    if (response.status === 0) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      navigate('/signin');
    }
  };
  return (
    <section className='absolute h-20 w-full flex justify-between px-8 items-center'>
      <section className='font-bold text-2xl hidden md:block'>
        Feverly Back Office
      </section>
      <section className='flex justify-end items-center gap-4'>
        <NavLink to={'/'}>
          <Button variant='text'>Home</Button>
        </NavLink>
        <NavLink to={'/shop'}>
          <Button variant='text'>Shop</Button>
        </NavLink>
        <NavLink to={'/banner'}>
          <Button variant='text'>Banner</Button>
        </NavLink>
        <Button variant='outlined' color='error' onClick={() => handleSubmit()}>
          Sign Out
        </Button>
      </section>
    </section>
  );
}
