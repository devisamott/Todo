import { useContext } from "react"
import { Item } from "../TodoItem"
import { TodoContext } from "../Provider"

export function List () {
    const { todos } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo, index) => {
                <Item key={index} todo={todo} index={index}/>
            })}
            <p>hola</p>
        </ul>
    )
}