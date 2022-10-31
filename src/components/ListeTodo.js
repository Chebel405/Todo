import ItemTodo from './ItemTodo';


function ListeTodo({listTodo, todoDelete, todoToggle}){
    return listTodo.length ? (
        <ul>
            { listTodo.map((todo) => (
            <ItemTodo 
                key={todo.id} 
                todo={todo} 
                todoDelete={ () =>todoDelete(todo.id)} 
                todoToggle={ () => todoToggle(todo.id)} />
            ))}
        </ul>
    ) : (
        <p>Aucune todo pour le moment</p>
    );
}
export default ListeTodo;