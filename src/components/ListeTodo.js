import ItemTodo from './ItemTodo';


function ListeTodo({listTodo, todoDelete}){
    return listTodo.length ? (
        <ul>
            { listTodo.map((todo) => (
            <ItemTodo key={todo.id} todo={todo} todoDelete={todoDelete} />
            ))}
        </ul>
    ) : (
        <p>Aucune todo pour le moment</p>
    );
}
export default ListeTodo;