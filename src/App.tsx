import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

interface Todo {
  id: number;
  task: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "Hacer la compra" },
    { id: 2, task: "Limpiar la casa" },
    { id: 3, task: "Estudiar para el examen" }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(newTodo === "") return
    setTodos([...todos, { id: todos.length + 1, task: newTodo }]);
    setNewTodo("");
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInput}
          placeholder="Añadir tarea"
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task}
            <button className="add-button" onClick={() => handleRemoveTodo(todo.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
