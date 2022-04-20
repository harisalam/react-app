import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Welcome to the World of Innovation!</h1>
      <p className='check-content'>Recent Projects</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/src/images/research/puck.jpg'
              text='Hockey puck for Blind Ice Hockey'
              label='Research'
              path='/publications'
            />
            <CardItem
              src='/src/images/research/animal.png'
              text='Non-visual Digital Graphics on Touchscreens'
              label='Research'
              path='/publications'
            />
             <CardItem
              src='/src/images/research/forearm.png'
              text='Haptic Co-presence Sleeve for DeafBlind Individuals'
              label='Research'
              path='/publications'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/src/images/research/guide.png'
              text='Steerable Guide for Neurosurgery'
              label='Project'
              path='/research'
            />
            <CardItem
              src='/src/images//research/rod.jpg'
              text='Reprogramming rod photoreceptors to treat blindness'
              label='Project'
              path='/research'
            />
            <CardItem
              src='/src/images/research/fish.jpg'
              text='The molecular basis of infrared vision'
              label='Adrenaline'
              path='/research'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;