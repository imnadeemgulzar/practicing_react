import React from 'react'
import TodoItem from './todoItem'

const TodoList = ({todoList,handleStateChange,handleRemoveItem,editItem}) => {
  console.log(todoList,'..........')
  return (
    <div>
      <h2 className='text-white text-xl mt-6'>Todo List</h2>
      <div className='flex flex-wrap'>
      {todoList.length ? todoList.map((item) => {
        return <TodoItem key={item.id} item={item} handleStateChange={handleStateChange} handleRemoveItem={handleRemoveItem} editItem={editItem}/>
      }
    ) : <h1 className='text-white text-4xl mt-6 mx-auto'>No Tasks Available</h1> }
</div>
    </div>
  )
}

export default TodoList
