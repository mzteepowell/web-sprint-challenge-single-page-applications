// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    dropdown: yup.string().required('Size is required'),
    
    //radio
    sauces: yup.string().oneOf(['original', 'garlic_ranch', 'parmesan_alfredo', 'bbq'], 'Please select a sauce').required("Sauce is required"),
   
    //checkboxes not required
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    spicy_italian: yup.boolean(),
    onions: yup.boolean(),
    tomatoes: yup.boolean(),
    mushrooms: yup.boolean(),
    spinach: yup.boolean(),
    bacon: yup.boolean(),
    
    text_area: yup.string().trim().max(50, 'Reached maximum characters allowed')//Not required
})

export default formSchema;