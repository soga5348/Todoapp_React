import React from 'react'

const Todo = ({todo,toggleTodo}) => {
    const handleTodoTodoClick =() => {
        toggleTodo(todo.id);
    }
  return(
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoTodoClick} />
        </label>
        {todo.name}
    </div>
  );
};

export default Todo