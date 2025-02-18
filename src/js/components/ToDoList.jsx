import React, {useState} from 'react'

//importar fontawesome
import "https://kit.fontawesome.com/072e5df971.js"

//crear componente
const ToDoList = () => {

    const [inputTarea, setInputTarea ] = useState('');
    const [lista, setLista] = useState(["Haz la cama", "Comer cachopo", "Vacaciones de verano"]);

    //Manejando la funcion de la tecla Enter
    const manejoKeyPress = (e) => {
        console.log("Tecla pulsada: "+e.key);
        if (e.key === 'Enter') {
            console.log("Has pulsado Enter!!");
            setLista([...lista, inputTarea]);
            setInputTarea('');
        }
    }

    //Funcion para eliminar tareas
    const eliminarTarea = (index) => {
        const nuevaLista = lista.filter((_, i) => i !== index);
        setLista(nuevaLista);
    }

    //Funcion para generar la lista junto con eliminarTarea
    const generarListaTareas= () => {
        let elementos = [];
        for (let i = 0; i < lista.length; i++) {
            elementos.push(
                <li key={i}>
                    {lista[i]}
                    <button onClick={() => eliminarTarea(i)}>
                        <i className="fa-solid fa-eraser"></i>
                    </button>
                </li>
            );
        }
        return elementos;
    }

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
                        onKeyDown={ manejoKeyPress }
                        placeholder='Añade aquí una tarea... '
                         />
                    </li>
                    {generarListaTareas()}
                    
                </ul>
                <div>{lista.length} tareas</div>
            </div>
        </>
    )
}

export default ToDoList;