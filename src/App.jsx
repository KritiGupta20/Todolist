import React, { useState, useEffect } from "react";
import Lane from "./components/Lane.jsx";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const updatedTodos = data.todos.map((todo) => ({
          ...todo,
          status: todo.completed ? "completed" : "pending",
        }));
        setTodos(updatedTodos);
      });
  }, []);

  const addTodo = (newTodo) => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: `todo-${Date.now()}`, todo: newTodo, status: "pending" }]);
    }
  };

  const updateTodo = (id, updatedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: updatedText } : todo
      )
    );
  };

  const updateTodoStatus = (id, newStatus) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <DndContext collisionDetection={closestCenter}>
      <div className="board">
        <button className="todo-input-btn" onClick={() => addTodo(prompt("Enter new todo:"))}>Add Todo</button>
        <div className="lanes">
          <SortableContext items={todos.map(todo => todo.id)}>
            {["pending", "in-progress", "completed"].map((status) => (
              <Lane
                key={status}
                title={status.charAt(0).toUpperCase() + status.slice(1)}
                todos={todos}
                status={status}
                updateTodo={updateTodo}
                updateTodoStatus={updateTodoStatus}
                deleteTodo={deleteTodo}
              />
            ))}
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};

export default App;
