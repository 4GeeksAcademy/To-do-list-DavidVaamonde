import React, {useState} from 'react'
import {render} from 'react-dom'

//importar fontawesome
import "https://kit.fontawesome.com/072e5df971.js"

//importar componentes
import AgregarTarea from './AgregarTarea'
import ListaTareas from './ListaTareas'

//crear componente
const ToDoList = () => {

    const [inputTarea, setInputTarea ] = useState('');
    const [lista, setLista] = useState([]);

    const handleKeyDown = ((e) => {
            console.log("Tecla presionada: "+e.key);
            if(e.key === 'Enter') {
                setLista(lista.concat(inputTarea));
                console.log("Has pulsado Enter!!");
                console.log("Agregado: "+setLista(lista));
                setInputTarea("");
            }
    });

    return (
        <>
            <h3>Mi lista de tareas </h3>
            <div className='container'>
                <ul>
                    <li>
                        <input 
                        type="text"  
                        onChange={(e) => setInputTarea(e.target.value)}
                        value={inputTarea}
                        onKeyDown={ handleKeyDown }
                        placeholder='Añade aquí una tarea... '
                         />
                    </li>
                    {lista.map((item, index) => {
                        <li>
                            {item}{" "}
                            <i 
                                className="fa-solid fa-eraser" 
                                onClick={() => setLista(
                                    lista.filter(
                                        (t, currentIndex) => 
                                            index != currentIndex)
                                            
                                            )
                                        }
                            />
                        </li>
                    })}
                        
                    
                    
                    <li>
                        Hacer los deberes
                        <i className="fa-solid fa-eraser" />
                    </li>
                    <li>
                        Tender la ropa
                        <i className="fa-solid fa-eraser" />
                    </li>
                    <li>
                        Cocinar
                        <i className="fa-solid fa-eraser" />
                    </li>
                    <li>
                        Planchar
                        <i className="fa-solid fa-eraser" />
                    </li>
                </ul>
                <div>{lista.length} tareas</div>
            </div>
        </>
    )
}

export default ToDoList;