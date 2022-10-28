//Formulaire pour ajouter une Liste avec un bouton pour ajouter et l'input dans lequel nous pourrons ajouter les informations
function AjouterTodo({AjouterTodo}){
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <input type="text"placeholder="Ajouter Todo" className="mr-15"/>
            <button className="btn btn-primary">Ajouter</button>
        </div>
    )
}
export default AjouterTodo;