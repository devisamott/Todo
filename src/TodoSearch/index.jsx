import { useContext, useState } from 'react'
import './search.css'
import { TodoContext } from '../Provider'

export function Search() {
    const [newTodo, setNewTodo] = useState('');
    const { addTodo } =useContext(TodoContext);

    const handleInputChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleAddTodo = () => {
        if(newTodo.trim() !== ''){
            addTodo(newTodo)
            setNewTodo('')
        }
    }
    return (
        <div>
            <input 
                type="text"
                onChange={handleInputChange}
                placeholder="Añade tu nuevo TODO" 
             />
             <button onClick={handleAddTodo}>📤</button>
        </div>
    )
}