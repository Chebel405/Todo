import { useState } from "react";

//Formulaire pour ajouter une Liste avec un bouton pour ajouter et l'input dans lequel nous pourrons ajouter les informations
function AjouterTodo({ajouterTodo}){
    const [value, setValue] = useState("");


    function handleChange(event){
        const inputValue = event.target.value;
        setValue(inputValue);
    }
    function handleKeyDown(event){
        if(event.code === 'Enter' && value.length){
            ajouterTodo(value);
            setValue("");
        }
    }

    function handleClick(){
        if(value.length){
            ajouterTodo(value);
            setValue("");
        }
        
    }


    return (
        <div className="d-flex flex-row justify-content-center align-items-center mb-20">
            <input
            type="text"
            onChange={ handleChange}
            onKeyDown={handleKeyDown}
            value={ value }
            placeholder="Ajouter Todo"
            className="mr-15 flex-fill"
            />
            
            <button onClick={handleClick} className="btn btn-primary">Ajouter</button>
        </div>
    )
}
export default AjouterTodo;