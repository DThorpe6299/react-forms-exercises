import React from "react";

const Todo = ({removeTodo, index, newTodo}) =>{
    const handleClick = () =>{
        removeTodo(index)
    }
    return(
        <>
            <div className="Todo">
                <p>{newTodo}</p>
                <button onClick={handleClick}>X</button>
            </div>
        </>
    )
}

export default Todo;