export const initialState = {
    todos: [],
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: Date.now(), text: action.payload, completed: false, editing: false }
          ]
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
      case 'REMOVE_ALL':
        return { ...state, todos: [] };
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, editing: true } : todo
          )
        };
      case 'SAVE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text, editing: false } : todo
          )
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  
