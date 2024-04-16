import React, {useState} from "react";

const NewBoxForm = ({addTodo}) =>{
    console.log(typeof addTodo);
    const INITIAL_STATE = {
        todoInput: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(formData.todoInput);
        setFormData(INITIAL_STATE);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">New Todo:</label>
            <input id="todoInput"
            type="text"
            name="todoInput"
            placeholder="New Todo"
            value={formData.todoInput}
            onChange={handleChange}></input>
            <button>Add a Todo</button>
        </form>
    )
}
export default NewBoxForm;