import { useState } from "react";




//Formulaire pour ajouter une Liste avec un bouton pour ajouter et l'input dans lequel nous pourrons ajouter les informations
export default function AjouterTodo({ajouterTodo}){
    const [value, setValue] = useState('');


    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleClick(){
        if(value.length){
            ajouterTodo(value);
            setValue('');
        }
        
    }

    function handleKeyDown(e){
        if(e.code === 'Enter' && value.length){
            ajouterTodo(value);
            setValue('');
        }
    }



    return (
        <div className="d-flex flex-row justify-content-center align-items-center mb-20">
            <input
                type="text"
                onChange={ handleChange}
                onKeyDown={ handleKeyDown}
                value={ value }
                className="mr-15 flex-fill"
                placeholder="Ajouter Todo"          
            />
            
            <button onClick={handleClick} className="btn btn-primary">Ajouter</button>
        </div>
    );
}
