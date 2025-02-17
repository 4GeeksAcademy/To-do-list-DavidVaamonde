import React, { useState }from 'react'


//crea componente
const AgregarTarea = (props) => {

    const [ tarea, setTarea] = useState();
    const [ newTarea, setNewTarea ] = useState()
    


    return (
        <>
            <form onSubmit={anadirTarea}>

            </form>
            <p>
                <input type='text' id="anadirtarea" placeholder="Agrega tarea" />
                <button type='submit'></button>
            </p>
        </>
    )
}

export default AgregarTarea;