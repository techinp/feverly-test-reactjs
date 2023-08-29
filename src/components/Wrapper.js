import React from 'react';

export default function Wrapper({ children }) {
  return (
    <section className='container flex justify-center items-center min-h-screen mx-auto flex-col pt-20'>
      {children}
    </section>
  );
}
