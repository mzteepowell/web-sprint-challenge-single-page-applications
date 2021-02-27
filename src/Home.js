import React from 'react'
import { useHistory } from 'react-router-dom'
import Pizza from './Pizza';

export default function Home() {
  const history = useHistory()

  const routeToShop = () => {
    // console.log(history);
    history.push('/pizza')
  }

  return (
    <div className='home-wrapper'>
     <div>
     <img
        className='home-image'
        src='http://wallpapers9.org/wp-content/uploads/2017/01/delicious-pizza-wallpaper-hd-3.jpg'
        alt='Cheese pizza with spinach'
        />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
        >
        Order now!
      </button>
      </div>
      <div className="container">
      <Pizza />  
      <Pizza />  
      </div> 
    </div>
  )
}
