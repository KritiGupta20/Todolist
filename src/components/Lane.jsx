import React from "react";
import TodoCard from "./TodoCard";
import { useDroppable } from "@dnd-kit/core";

const Lane = ({ title, todos, status, updateTodo, updateTodoStatus, deleteTodo }) => {
  const { setNodeRef } = useDroppable({ id: `lane-${status}` });
  const filteredTodos = todos.filter((todo) => todo.status === status);

  return (
    <div ref={setNodeRef} className="lane">
      <h3>{title}</h3>
      {filteredTodos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          updateTodoStatus={updateTodoStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Lane;
