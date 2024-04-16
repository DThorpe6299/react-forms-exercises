import React, {useState} from "react";

const NewBoxForm = ({addBox}) =>{
    const INITIAL_STATE = {
        width:"",
        height:"",
        backgroundColor:""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = e =>{
        e.preventDefault();
        addBox(formData.width, formData.height, formData.backgroundColor);
        setFormData(INITIAL_STATE)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='width'>Width:</label>
            <input id='width' 
            type='text' 
            name='width' 
            placeholder='width' 
            value={formData.width}
            onChange={handleChange}></input>

            <label htmlFor='height'>Height:</label>
            <input id='height' 
            type='text' 
            name='height' 
            placeholder='height' 
            value={formData.height}
            onChange={handleChange}></input>
        
            <label htmlFor='backround-color'>Background Color:</label> 
            <input id='backround-color' 
            type='text' 
            name='backgroundColor' 
            placeholder='background color' 
            value={formData.backgroundColor}
            onChange={handleChange}></input>
            
            <button>Add A Box</button>
        </form>
    )
}
export default NewBoxForm;