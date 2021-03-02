import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Confirmation from './Confirmation';
import axios from 'axios';
import Footer from './Footer';
import * as yup from 'yup';
import formSchema from './validation/formSchema'
import './App.css';


const initialFormValues ={
  dropdown: '',
  sauces: '',
  pepperoni: false,
  sausage: false,
  spicy_italian: false,
  onions: false,
  tomatoes: false,
  spinach: false,
  bacon: false,
  mushrooms: false,
  text_area: ''
}
const initialFormErrors = {
  dropdown: '',
  sauces: '',
  text_area: '',
}
const initialDisabled = true;
const initialOrders = [];

export default function App(){ 
  const [orders, setOrders] = useState(initialOrders) 
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)
 
  const history = useHistory()

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/users`, newOrder)
    .then(res=> {
      setOrders([...orders, res.data]);
      
    })
    .catch(err => {
      console.log(err)
    })
    history.push(`/pizza/confirmation`)
    setFormValues(initialFormValues)
    console.log(orders)
  }
  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(()=> {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({...formValues, [name]: value})
    
  }
 
  const formSubmit = () => {
    const newOrder = {
      dropdown: formValues.dropdown.trim(),
      sauces: formValues.sauces.trim(),
      toppings: ['pepperoni' , 'sausage' , 'spicy_italian' , 'onion' , 'tomatoes' , 'mushrooms' , 'spinach' , 'bacon'].filter(topping => {
        return formValues[topping]
      }),
      text_area: formValues.text_area.trim()  
    }
    postNewOrder(newOrder); 
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      console.log(valid)
      return setDisabled(!valid)}
   )}, [formValues])
  //  console.log(formValues)

  const onSubmit = evt => {
    evt.preventDefault()
    formSubmit()
   
    
  }
console.log(formValues)

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    inputChange(name, valueToUse);
  }
  return (
    <div className='App'>
      <nav>
      <h1 className='store-header'>KHANA PIES</h1>
      <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Online</Link>
        </div>
      </nav>
    <Switch>
      <Route exact path='/pizza/confirmation'>
      {/* {orders.map((order, index) =>{ 
        return(
        <div className='form-group' key={index}>
        <h1> Thanks for ordering. See you soon! </h1>
        <h4> Size: {order.dropdown} </h4> 
        <h4> Sauce: {order.sauces}</h4>
        <h4> Topping(s): {order.toppings} </h4>
        <h4>Special Instructions: {order.text_area}</h4> 
        </div>
      )})} */}
        <Confirmation orders={orders}/>
      </Route>
      <Route exact path='/pizza'>
        <Form submit={onSubmit} change={onChange} formValues={formValues} disabled={disabled} errors={formErrors}/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>
    <Footer/>
    </div>
  )
}
