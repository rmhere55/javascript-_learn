import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoSlice'


const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>todo</div>
    <ul className='list-none'>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    <div>{todo.text}</div>
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>remove</button>
                </li>
            ))
        }

    </ul>

    </>
  )
}

export default Todo