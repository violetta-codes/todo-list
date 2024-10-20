import React, { useState } from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    dispatch({ type: 'SAVE_TODO', payload: { id: todo.id, text: newText } });
  };

  return (
    <div>
      {todo.editing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'EDIT_TODO', payload: todo.id })}>
            Edit
          </button>
        </>
      )}
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
