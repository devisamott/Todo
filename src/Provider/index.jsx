import { createContext, useState } from "react";

 export const TodoContext = createContext();

 export function TodoProvider ({children} ){
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) =>{
        setTodos([...todos, {text : todo, completed: false}]);
    }

    const deleteTodo = (index) => {
        const newTodos =  todos.filter(
          (_, todoIndex) => todoIndex !== index  
        );
        setTodos(newTodos)
    }

    const completTodo = (index) => { 
        const newTodos = todos.map(
            (todo, todoIndex) => todoIndex === index ? 
            {...todo, completed : !todo.completed } : todo
        )
        setTodos(newTodos)
    }
    return(
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo,
            completTodo
        
        }}>
            {children}
        </TodoContext.Provider>
    )
 }
