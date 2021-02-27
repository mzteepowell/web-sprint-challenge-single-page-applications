// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    dropdown: yup.string().oneOf(['sm','med', 'lg', 'xl'],'Please select a size').required('Size is required'),
    
    //radio
    sauces: yup.boolean().oneOf(['original', 'garlic_ranch', 'parmesan_alfredo', 'bbq'], 'Please select a sauce'),
   
    //checkboxes not required
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    spicy_italian: yup.boolean(),
    onion: yup.boolean(),
    tomatoes: yup.boolean(),
    mushrooms: yup.boolean(),
    spinach: yup.boolean(),
    bacon: yup.boolean(),
    
    text_area: yup.string().trim().min(100, 'Reached maximum characters allowed')//Not required
})

export default formSchema;