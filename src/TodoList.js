import React, {useState} from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) =>  setTodos(todos => [...todos, newTodo]);
    const removeTodo = (todoIndex) =>{
        setTodos(todos => todos.filter((todo, index)=> index !== todoIndex));
    }
    return (
        <>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo}/>
            <div className="TodoList">
                {todos.map((todo, index)=>(
                    <div key={index}>
                        <Todo removeTodo={removeTodo}
                            index={index}
                            newTodo={todo}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
export default TodoList;