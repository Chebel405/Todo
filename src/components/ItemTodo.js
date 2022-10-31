//Les item pour representer le todo

function ItemTodo({todo, todoDelete}){
    return (
        <li className="d-flex flex-row justify-content-center align-items-center p-10">
            <span className="flex-fill mr-15">{todo.contenu}</span>
            <button className="btn btn-primary mr-15">Valider</button>
            <button className="btn btn-primary mr-15">Modifier</button>
            <button 
            onClick={() => todoDelete(todo.id)}
            className="btn btn-reverse-primary mr-15">Supprimer</button>
        </li>
    )
}
export default ItemTodo;