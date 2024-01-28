import React, { useState } from 'react'
import './CSS/TodoInput.css'

export default function TodoInput({onNewItem}) {

    const [newTodoName,setNewTodoName] = useState('');
    const [newTodoDate, setNewTodoDate] = useState('');

    const handleNewTodoName = (e) => {
        setNewTodoName(e.target.value)
    }

    const handleNewTodoDate = (e) => {
        setNewTodoDate(e.target.value)
    }

    const passNewItem = () =>{
        onNewItem(newTodoName,newTodoDate)
        setNewTodoName("")
        setNewTodoDate("")
    }
    
  return (
    <div className='todo-input-box'>
      <input type='text' placeholder='Enter Things To-Do' value={newTodoName} onChange={handleNewTodoName}/>
      <input type='date' value={newTodoDate} onChange={handleNewTodoDate}/>
      <button onClick={passNewItem}>Add</button>
    </div>
  )
}
