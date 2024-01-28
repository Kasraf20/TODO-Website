import React from 'react'
import './CSS/Item.css'

export default function Item({ name, dueDate, onDelete}) {

  return (
    <div className='todo-item'>
        <div className="todo-detail">
            <p>{name}</p>
            <p>{dueDate}</p>
        </div>
        <div className="todo-delete">
            <button onClick={()=>onDelete(name)}>Delete</button>
        </div>
    </div>
  )
}
