import AjouterTodo from './components/AjouterTodo';
import ListeTodo from './components/ListeTodo';
import { useState } from 'react';
import './App.css';

function App() {
  const [listTodo, setListTodo] = useState([]);

  function ajouterTodo(contenu){
    const todo = {
      id: crypto.randomUUID(),
      done: false,
      edit: false,
      contenu   
    };

    setListTodo([...listTodo, todo]);
  }

  function todoDelete(id){
    setListTodo(listTodo.filter((todo) => todo.id !== id));
  }

  function todoToggle(id){
    setListTodo(
      listTodo.map((todo) =>
       todo.id === id
        ? {
            ...todo,
            done: !todo.done
          }
        : todo 
     ) 
  );
}

  return (
    <div className="d-flex flex-row justifi-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className='mb-20'>Todo Liste</h1>
        <AjouterTodo ajouterTodo={ajouterTodo} />
        <ListeTodo listTodo={listTodo} todoDelete={todoDelete} todoToggle={todoToggle}/>
        
      </div>
    </div>
  );
}

export default App;
