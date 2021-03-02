import React from 'react';
import './App.css';
import './Form.css';

export default function Form(props){ 
  const {formValues, disabled, change, submit, errors} = props;

  return (
    <div className='item-wrapper'>
    
      <form className='form' onSubmit={submit}>
        <div className='form-group submit'>
        <div className='errors'>  
            <div>{errors.dropdown}</div>
            <div>{errors.sauces}</div>
            <div>{errors.text_area}</div>
        </div>
        </div>

        <div className='form-group'>
        <h2>Build Your Own Pizza</h2>
        {/* DROPDOWN */}
        <div className="label-name">
          <h3>Choice of Size</h3>
          <p>Required</p>
        <label>
          <select
            onChange={change}
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
            onChange={change}
            value='original'
            checked={'original' === formValues.sauces}
          />
        </label>
        <label>Garlic Ranch
          <input
            type='radio'
            name='sauces'
            onChange={change}
            value='garlic_ranch'
            checked={'garlic_ranch' === formValues.sauces}
          />
        </label>
        <label>Parmesan Alfredo
          <input
            type='radio'
            name='sauces'
            onChange={change}
            value='parmesan_alfredo'
            checked={'parmesan_alfredo' === formValues.sauces}
          />
        </label>
        <label>BBQ     
          <input
            type='radio'
            name='sauces'
            onChange={change}
            value='bbq'
            checked={'bbq' === formValues.sauces}
          />
        </label>
        </div>

  
    </div>

        <h3>Choice of Toppings</h3>
        <div className='form-group-checkbox'>

        {/* ////////// CHECKBOXES ////////// */}
        <label className='form-group-checkbox-labels' >Pepperoni
            <input 
            type='checkbox'
            name='pepperoni'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Sausage
            <input 
            type='checkbox'
            name='sausage'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Spicy Italian Sausage
            <input 
            type='checkbox'
            name='spicy_italian'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Onions
            <input 
            type='checkbox'
            name='onions'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Tomatoes
            <input 
            type='checkbox'
            name='tomatoes'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Spinach
            <input 
            type='checkbox'
            name='spinach'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Bacon
            <input 
            type='checkbox'
            name='bacon'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        <label className='form-group-checkbox-labels'>Mushrooms
            <input 
            type='checkbox'
            name='mushrooms'
            onChange={change}
            checked={formValues.toppings}
            />
        </label>
        </div>
        <div className="text-area">
          <label> Special Instructions
            <input type='text' onChange={change} placeholder='Max 50 characters' name='text_area' value={formValues.text_area} />

          </label>
        </div>
        <div className='form-group submit'>
          {/* <Link to={`${url}/confirmation`}> */}
        <button disabled={disabled}>SUBMIT</button>
        {/* </Link> */}
        </div>
       
    </form>    
    </div>
  );
}