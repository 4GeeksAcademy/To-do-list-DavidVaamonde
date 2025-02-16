import React from 'react'

//importar componentes
import AgregarTarea from './AgregarTarea'
import ListaTareas from './ListaTareas'

//crear componente
const ToDoList = () => {
    return (
        <>
            <h3>Listado de tareas</h3>
            <div className='container'>
                <AgregarTarea />
                <ListaTareas />
            </div>
        </>
    )
}

export default ToDoList;