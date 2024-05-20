
import './App.css'
import { TodoProvider } from './Provider'
import { List } from './TodoList'
import { Search } from './TodoSearch'

function App() {

  return (
     <TodoProvider>
      <div className="App">
        <h1>TODO'S</h1>
        <Search />
        <List />
      </div>
    </TodoProvider>
  )
}

export default App
