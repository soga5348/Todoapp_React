import logo from './logo.svg';
import './App.css';
import {useState,useRef} from "react";
import TodoList from "./TodoList";





function App() {
  const [todos,setTodos] = useState([
    { id: 1, name:" Todo1", completed: false}]);

    const todoNameRef = useRef();


const handleAddTodo = () => {
  //タスクを追加する
  const name = todoNameRef.current.value;
  if (name ==="") return;
  setTodos((prevTodos) => {
    return [...prevTodos,{id:prevTodos.length + 1,name:name,completed:false}]
  });
  todoNameRef.current.value =  null;
};

const toggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id == id);
  todo.completed = !todo.completed;
  setTodos(newTodos);

};

const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
};


  return (
    <>
     <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input type="text" ref={todoNameRef}/>
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button onClick={handleClear}>完了したタスクの削除</button>
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
};

export default App;
