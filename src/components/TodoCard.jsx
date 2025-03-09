import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Trash2 } from "react-feather";

const TodoCard = ({ todo, updateTodo, updateTodoStatus, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.todo);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
    }
    setIsEditing(false);
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `todo-${todo.id}`,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : "",
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="todo-card" style={style}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <h4>{todo.todo}</h4>
      )}
      {isEditing ? (
        <button onClick={handleSave}>💾</button>
      ) : (
        <button onClick={handleEdit}>✏️</button>
      )}
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TodoCard;
