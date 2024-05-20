import { useContext } from 'react';
import { TodoContext } from '../Provider'; 

export function Item({ todo, index }) {
  const { deleteTodo, completTodo } = useContext(TodoContext); 

  return (
    <li>
      <button onClick={() => completTodo(index)}>
        {todo.completed ? '🟣' : '🔘'}
      </button>
        {todo.text}
      <button onClick={() => deleteTodo(index)}>❌</button>
    </li>
  );
}

export default Item;
