import React, { useState, useContext, useEffect } from 'react'
import TodoItem from './TodoItem'
import { GlobalContext } from '../context/GlobalState'

const TodoList = () => {
  const { items, getItems } = useContext(GlobalContext)

  useEffect(() => {
    console.log('INSIDE USEEFFECT')
    getItems()
  }, [])

  return (
    <div className='text-center'>
      {items.map(item => (
        <TodoItem key={item.id} todoListData={item} />
      ))}
    </div>
  )
}

export default TodoList
