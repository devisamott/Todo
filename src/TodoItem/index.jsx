import { useContext } from "react"
import { TodoContext } from "../Provider"

export function Item ({ todo, index }) {
    const { deleteTodo, completTodo} =useContext(TodoContext)
    console.log("HOla")
    return (
        <>
            <li>
                <button onClick={()=> completTodo(index)}>V</button>
                {todo}
                <button onClick={()=> deleteTodo(index)}>F</button>
                <p>hola</p>

            </li>
        </>
    )
}