import React from 'react';
import '../../App.css';
import TeamCards from '../TeamCards';
import Footer from '../Footer';

function Team() {
  return (
    <>
    <h1 className='team'>Team</h1>;
      <TeamCards />
      <Footer />
    </>
  );
}

export default Team;