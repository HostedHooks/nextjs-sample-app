import { useRef, useState } from 'react';
import Todo from './todo';
import sendWebhookMessage from '../utils/hostedhooks';

export default function TodoApp() {
  const inputRef = useRef()
  const [todos, setTodos] = useState([
    {
      id: '2',
      text: 'Buy a new book',
      completed: false,
    },
    {
      id: '1',
      text: 'Sign up and subscribe to hostedhooks',
      completed: true,
    },
  ])

  const AddTodo = (text) => {
    inputRef.current.value = '';
    const newTodo = {
      id: new Date().getTime(),
      text: text,
      completed: false
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
    return newTodo
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
    return newTodos[todoIndex]
  }

  const deleteTodo = (id) => {
    const todo = todos.find(todo => todo.id === id)
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    return todo
  }

  const handleOnAddTodoSubmit = (e) => {
    e.preventDefault();
    const todo = AddTodo(inputRef.current.value)
    sendWebhookMessage('todo.created', todo)
  }

  const handleOnTodoClick = (id) => {
    const todo = toggleTodo(id)
    if (todo.isCompleted) {
      sendWebhookMessage('todo.uncompleted', todo)
    } else {
      sendWebhookMessage('todo.completed', todo)
    }
  }

  const handleOnDeleteTodoClick = (id) => {
    const todo = deleteTodo(id)
    sendWebhookMessage('todo.deleted', todo)
  }

  return (
    <div className="mx-auto sm:my-10 sm:max-w-xl sm:rounded-md sm:border bg-white">
      <div className="px-4 pt-8 pb-10 sm:px-8 h-full">
        <h2 className="text-2xl font-semibold text-gray-900">Todo App</h2>
        <form onSubmit={handleOnAddTodoSubmit} className="mt-6 flex flex-col sm:flex-row">
          <input required ref={inputRef} className="px-4 h-11 sm:flex-1 rounded-md border focus:border-gray-500 transition-colors focus:outline-none" placeholder="Add your todo" type="text" />
          <button className="mt-4 sm:mt-0 sm:ml-4 px-4 h-11 text-sm font-medium tracking-wide uppercase rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-colors focus:outline-none">
            Add Todo
          </button>
        </form>
        <hr className="my-6" />
        {todos && todos.length >= 1 ?
          <div className="space-y-6">
            {todos.map(todo => (
              <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                handleOnTodoClick={() => handleOnTodoClick(todo.id)}
                handleOnDeleteTodoClick={() => handleOnDeleteTodoClick(todo.id)}
              />
            ))}
          </div>
          : <div className="mt-8 text-center text-lg font-medium text-gray-500">No Todos!</div>}
      </div>
    </div>
  )
}
