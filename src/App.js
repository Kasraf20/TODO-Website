import React, { useState } from 'react'
import './App.css';
import TodoInput from './Component/TodoInput';
import TodoItemList from './Component/TodoItemList';

function App() {

  const [todo_Items , setTodoItems] =useState([])

  function handleNewItem(itemName,itemDueDate){
    const newTodo_Item = [...todo_Items,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newTodo_Item)
  }

  const handleDelete = (item_name) =>{
    const newTodo_Item = todo_Items.filter(item => item.name !== item_name)
    setTodoItems(newTodo_Item) 
  }
 
  return (
    <div className="container">
      <div className="container-data">
        <h1>TODO LIST</h1>
        <TodoInput onNewItem={handleNewItem}/>
        <TodoItemList todoItems = {todo_Items} onDelete = {handleDelete}/>      
      </div>
    </div>
    
  );
}  

export default App;
