import  {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


const Addtodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler}  className='space-x-2 mt-12'>
        <input 
        type='text'
        placeholder='enter a todo'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button type=' submit'> Add ToDo</button>

    </form>
  )
}

export default Addtodo;