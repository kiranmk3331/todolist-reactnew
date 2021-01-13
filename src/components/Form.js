import React from 'react'

function Form({ setInput,input,todos,setTodo,setStatus}) {
    
  const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todos,
            {
                text: input,
                completed: false,
                id:Math.random()*100,
            }
            
        ])
        setInput("");

    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
      <div>
        <form>
          <input onChange={handleChange} value={input} type="text" className="todo-input" />
          <button onClick={handleSubmit} className="todo-button" type="submit">
            <i className    ="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select onClick={statusHandler} name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    );
}

export default Form
