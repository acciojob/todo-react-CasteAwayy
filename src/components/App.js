
import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
   const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
      >
        To-Do List
      </h1>
      <div style={{ display: "flex", marginBottom: "16px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task"
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px 0 0 4px",
            outline: "none",
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: "8px 16px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          Add Todo
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              background: "#f9f9f9",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <span>{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              style={{
                background: "none",
                border: "none",
                color: "#d9534f",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
