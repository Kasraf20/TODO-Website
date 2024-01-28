import React from 'react'
import './CSS/TodoItemList.css'
import Item from './Item'

export default function TodoItemList({ todoItems,onDelete }) {


    return (
        <div className='todo-item-list'>
            {todoItems.length === 0 ? <h2>There is Nothing TO-DO</h2> :
                todoItems.map((item) => {
                    return <Item key={item.name} name={item.name} dueDate={item.dueDate} onDelete = {onDelete}/>
                })
            }
        </div>
    )
}
