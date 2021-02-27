import React, { useState, useEffect, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from './axios/index';
import * as yup from 'yup';
import formSchema from './validation/formSchema'
import './App.css';
import './Form.css';

const initialFormValues ={
  ///// DROPDOWN /////
  dropdown: '',
  ///// RADIO BUTTONS /////
  sauces: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  sausage: false,
  spicy_italian: false,
  onions: false,
  tomatoes: false,
  spinach: false,
  bacon: false,
  mushrooms: false,
  ////TEXTAREA/////
  text_area: ''
}
const initialFormErrors = {
  dropdown: '',
  sauces: '',
  text_area: '',
}
const initialDisabled = true;
const initialUsers = [];

export default function Form(props){ 
  const [users, setUsers] = useState(initialUsers) 
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)
  const [visible, setVisibility] = useState(false)
  const { url } = useRouteMatch()
  
  const isRendered = useRef(false);
  useEffect(() => {
      isRendered.current = true;
    axios.get('fakeapi.com')
    .then(res => {
      // debugger
      if (isRendered.current){
        setUsers(res.data) 
        console.log(isRendered)
        return () => (isRendered.current = false);
      } 
    })
    .catch(err => {
      console.log(err);
    })

    console.log(users) 
    }, [users])

  const postNewUser = newUser => {
    axios.post(`fakeapi.com`, newUser)
    .then(res=> {
      const newData =[res.data, ...users];
     setUsers(newData)
      console.log(newData)
    })
    .catch(err => {
      console.log(err)
    })
    setFormValues(initialFormValues)
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
    formErrors ? setVisibility(true) : setVisibility(false);
  }
 
  const history = useHistory();

  const formSubmit = () => {
    history.push(`${url}/confirmation`);
    const newUser = {
      dropdown: formValues.dropdown.trim(),
      sauces: formValues.sauces.trim(),
      toppings: formValues.toppings ? ['pepperoni', 'sausage', 'spicy_italian', 'onion', 'tomatoes', 'mushrooms','spinach', 'bacon'].filter(topping => {
        console.log(formValues[topping])
        return formValues[topping]
      }): "",
      text_area: formValues.text_area.trim()
      
    }
    postNewUser(newUser); 
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

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    inputChange(name, valueToUse);
  }

  return (
    <div className='item-wrapper'>
    
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group submit'>
      {!!visible ? 
        <div className='errors'>
            <div>{formErrors.dropdown}</div>
            <div>{formErrors.sauces}</div>
            <div>{formErrors.text_area}</div>
        </div>
        : <div> </div>
        }
    
        </div>

        <div className='form-group'>
        <h2>Build Your Own Pizza</h2>
        {/* DROPDOWN */}
        <div className="label-name">
          <h3>Choice of Size</h3>
          <p>Required</p>
        <label>
          <select
            onChange={onChange}
            value={formValues.dropdown}
            name='dropdown'
            >
            <option value=''>- Select -</option>
            <option value='sm'>'SM'</option>
            <option value='med'>'MED'</option>
            <option value='lg'>'LG'</option>
            <option value='xl'>'XL'</option>
          </select>
          </label>
        </div>
        <h3>Choice of Sauce</h3>
        <p>Required</p>
        {/* RADIO BUTTON */}
        <div className="form-group-radio">
        <label>Original Red
          <input
            type='radio'
            name='sauces'
            onChange={onChange}
            value='original'
            checked={'original' === formValues.sauces}
          />
        </label>
        <label>Garlic Ranch
          <input
            type='radio'
            name='sauces'
            onChange={onChange}
            value='garlic_ranch'
            checked={'garlic_ranch' === formValues.sauces}
          />
        </label>
        <label>Parmesan Alfredo
          <input
            type='radio'
            name='sauces'
            onChange={onChange}
            value='parmesan_alfredo'
            checked={'parmesan_alfredo' === formValues.sauces}
          />
        </label>
        <label>BBQ     
          <input
            type='radio'
            name='sauces'
            onChange={onChange}
            value='bbq'
            checked={'bbq' === formValues.sauces}
          />
        </label>
        </div>

  
    </div>

        <h3>Choice of Toppings</h3>
        <div className='form-group-checkbox-labels'>

        {/* ////////// CHECKBOXES ////////// */}
        <label>Pepperoni
            <input 
            type='checkbox'
            name='pepperoni'
            value='pepperoni'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Sausage
            <input 
            type='checkbox'
            name='sausage'
            value='sausage'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Spicy Italian Sausage
            <input 
            type='checkbox'
            name='spicy_italian'
            value='spicy_italian'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Onions
            <input 
            type='checkbox'
            name='onions'
            value='onions'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Tomatoes
            <input 
            type='checkbox'
            name='tomatoes'
            value='tomatoes'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Spinach
            <input 
            type='checkbox'
            name='spinach'
            value='spinach'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Bacon
            <input 
            type='checkbox'
            name='bacon'
            value='bacon'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        <label>Mushrooms
            <input 
            type='checkbox'
            name='mushrooms'
            value='mushrooms'
            onChange={onChange}
            checked={formValues.toppings}
            />
        </label>
        </div>
        <div className="text-area">
          <label> Special Instructions
            <input type='text-area' name='text_area'placeholder='Max 50 characters'></input>

          </label>
        </div>
        <div className='form-group submit'>
        <button disabled={disabled}>SUBMIT</button>
        </div>
       
    </form>    
    </div>
  );
}