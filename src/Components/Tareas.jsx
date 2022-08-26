import { useState } from "react"
import '../ComponentsCSS/Tareas.css'
import { BsFillPersonFill } from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'


const Tareas = ({mainLista, setList}) => {

    
    const [nuevoColaborador, setNuevoColaborador] = useState('')
    const [nuevoCorreo, setNuevoCorreo] = useState('')
    const [nuevoID, setNuevoID] = useState(mainLista.length + 1)

    const nuevoNombreColaborador = e => setNuevoColaborador(e.target.value)
    const nuevoCorreoColaborador = e => setNuevoCorreo(e.target.value)

    const agregarColaborador = e => {

        e.preventDefault()

       if(nuevoColaborador !== '' && nuevoCorreo !== '') {
        const nuevoNombre = [...mainLista, {
            id: nuevoID,
            nombre: nuevoColaborador,
            email: nuevoCorreo
        }]
        setNuevoID(nuevoID + 1)
        setList(nuevoNombre)
        setNuevoColaborador('')
        setNuevoCorreo('')
       }
    }

  
    return (
        <>
            <form onSubmit={agregarColaborador} className="formTareas">
                <h2>Ingresa Colaborador/a</h2>
                <div className="inputBox">

                    <label htmlFor="nombre" >Nombre</label>
                    <input type="text" onChange={nuevoNombreColaborador}
                        value={nuevoColaborador} id="nombre"
                        placeholder="Escribe nombre"
                        className="inputForm"
                        required
                    />
                    <BsFillPersonFill className="iconsForm"/>


                </div>

                <div className="inputBox">

                    <label htmlFor="correo">Email</label>
                    <input type="email" onChange={nuevoCorreoColaborador}
                        value={nuevoCorreo} id="correo"
                        placeholder="Escribe Correo"
                        className="inputForm"
                        required
                    />
                    <FiMail className="iconsForm"/>
                    
                </div>

                <button type="submit">Agregar</button>
            </form>
        </>
    );
}

export default Tareas;