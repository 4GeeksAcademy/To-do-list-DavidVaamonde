import React, { useState }from 'react'

//crea componente
const ListaTareas = (props) => {

    const [tareas, setTareas] = useState(props.tarea);

    const borrarTarea = (idTarea) => {
        setTareas(tareas.filter(tarea => tarea.id !== idTarea));
    }

    return (
        <>
            <p>Soy Lista Tareas</p>
        </>
    )
}

export default ListaTareas;