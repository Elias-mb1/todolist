import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      title: title,
      done: false,
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id, done) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <button onClick={() => addTodo("Default Todo")}>Add</button>

      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

const TodoItem = ({ todo, toggleDone, deleteTodo }) => {
  return (
    <div>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button className="space" onClick={() => toggleDone(todo.id, todo.done)}>
        {todo.done ? "Undo" : "Done"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default App;
