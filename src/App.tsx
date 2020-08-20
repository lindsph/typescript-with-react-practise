import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';

const App = () => {

  const [ todos, setTodos ] = useState<Todo[]>([]);

  const toDoAddHandler = (text: string) => {
    setTodos(prevState => [
      ...prevState, 
      { text: text, id: Math.random().toString() }
    ]);
  };

  const toDoDeleteHandler = (toDoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== toDoId);
    });
  };

  return (
    <div className="App">
      <NewToDo
        toDoAddHandler={toDoAddHandler}
      />
      <ToDoList 
        items={todos}
        toDoDeleteHandler={toDoDeleteHandler}
      />
    </div>
  );
}

export default App;
