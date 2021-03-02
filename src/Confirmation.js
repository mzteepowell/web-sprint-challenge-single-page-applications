import React from 'react';
import './App.css'
import './Form.css'

export default function Confirmation(props) {
  const {orders} = props;
  
  // useEffect(() => {
  //   console.log(orders)
  // }, [orders])

  if (!orders) {
    return <h3>No data returned...</h3>
  }
 
  return (
    <div className='item-wrapper'>
      {orders.map((order, index) =>{ 
        return(
        <div className='form-group' key={index}>
        <h1> Thanks for ordering. See you soon! </h1>
        <h3>Order Summary:</h3>
        <h4> Size: [ ] {order.dropdown.toUpperCase()} </h4> 
        <h4> Sauce: [ ] {order.sauces.toUpperCase()}</h4>
        <h4> Topping(s): {order.toppings.map(add => `[ ] ${add.toUpperCase()} `)} </h4>
        <h4>Special Instructions: [ ] {order.text_area.toUpperCase()}</h4> 
        </div>
      )})}
    <img
      className='home-image'
      src='https://www.maryspizzashack.com/wp-content/uploads/0182-Marys07142017paigegreen_cropped-1920x650.jpg'
      alt='Wooden counter top with fresh green leafy vegetables and red tomatoes'
      />
    </div>
  )
}
  