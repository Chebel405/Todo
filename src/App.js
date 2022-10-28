import AjouterTodo from './components/AjouterTodo';
import ListeTodo from './components/ListeTodo';
import { useState } from 'react';
import './App.css';

function App() {
  const [ListTodo, setListTodo] = useState([]);

  function ajouterTodo(content){
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false
    }
    setListTodo([...ListTodo, todo])
  }
  return (
    <div className="d-flex flex-row justifi-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1>Todo Liste</h1>
        <AjouterTodo ajouterTodo={ajouterTodo} />
        <ListeTodo />
      </div>
    </div>
  )
}

export default App;
