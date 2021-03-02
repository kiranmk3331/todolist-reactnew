import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodo] = useState([]);

  // run once
  useEffect(() => {
    getLocalTodos();
  },[]
)

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line
  }, [todos,status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
         setFilteredTodo(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodo(todos);
    }
  }

  // Local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodo(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>
          ToDo List
        </h1>
      </header>
      <Form setInput={setInput} input={input} todos={todos} setTodo={setTodo} setStatus={setStatus}/>
      <TodoList todos={todos} setTodo={setTodo} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
