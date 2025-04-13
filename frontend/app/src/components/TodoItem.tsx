import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="todo-checkbox"
        />
        <span
          className={`todo-text ${todo.completed ? "completed" : ""}`}
        >
          {todo.title}
        </span>
      </label>
      <button className="delete-button" onClick={onDelete} title="Delete todo">
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
