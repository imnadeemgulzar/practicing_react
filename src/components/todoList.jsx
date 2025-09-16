import React from 'react'
import TodoItem from './todoItem'

const TodoList = ({todoList,handleStateChange,handleRemoveItem}) => {
  return (
    <div>
      <h2>Todo List</h2>
      <div className='flex flex-wrap'>
      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item} handleStateChange={handleStateChange} handleRemoveItem={handleRemoveItem}/>
      }
    )}
</div>
    </div>
  )
}

export default TodoList
