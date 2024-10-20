import React, { useReducer } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import reducer, { initialState } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>TODO App</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
      {state.todos.length > 0 && (
        <button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>
          Remove All Todos
        </button>
      )}
    </div>
  );
}

export default App;

