import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function TeamCards() {
  return (
    <div className='cards'>
      <h1>Lab Team</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/team/Jenna.jpg'
              text='Jenna L. Gorlewicz, Ph.D.'
              label='Director'
              path='/team'
            />
            <CardItem
              src='images/team/jen.png'
              text='Jen L. Tennison, Phd'
              label='Lab Manager'
              path='/team'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/team/maya.jpg'
              text='Maya Dunlap'
              label='Pd.D. Student'
              path='/team'
            />
            <CardItem
              src='images/team/scott.jpg'
              text='Scott Lambert'
              label='Ph.D. Student'
              path='/team'
            />
            <CardItem
              src='images/team/bryan.jpg'
              text='Bryan MacGavin'
              label='Ph.D. Student'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;