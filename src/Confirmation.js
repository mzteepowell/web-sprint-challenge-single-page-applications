import React from 'react';
import './App.css'
import './Form.css'

export default function Confirmation({details}) {
  // if (!details) {
  //   return <h3>No data returned...</h3>
  // }

  return (
    <div className='item-wrapper'>
      
      <div className='form-group'>
        <h1>
        Thanks for ordering. See you soon!
      </h1>
      </div>
      <img
        className='home-image'
        src='https://www.maryspizzashack.com/wp-content/uploads/0182-Marys07142017paigegreen_cropped-1920x650.jpg'
        alt='Wooden counter top with fresh green leafy vegetables and red tomatoes'
        />
    </div>
  )
}