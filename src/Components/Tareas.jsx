import { useState } from "react"
import '../ComponentsCSS/Tareas.css'
import { BsFillPersonFill } from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'


const Tareas = ({mainLista, setList}) => {

    
    const [nuevoColaborador, setNuevoColaborador] = useState('')
    const [nuevoCorreo, setNuevoCorreo] = useState('')
    const [nuevoID, setNuevoID] = useState({mainLista}.length + 1)

    const nuevoNombreColaborador = e => setNuevoColaborador(e.target.value)
    const nuevoCorreoColaborador = e => setNuevoCorreo(e.target.value)

    const agregarColaborador = e => {

        e.preventDefault()
        const nuevoNombre = [...{mainLista}, {
            id: nuevoID,
            nombre: nuevoColaborador,
            email: nuevoCorreo
        }]
        setNuevoID(nuevoID + 1)
        setList(nuevoNombre)
        setNuevoColaborador('')
        setNuevoCorreo('')
    }

  
    return (
        <>
            <form>
                <h2>Ingresa Colaborador/a</h2>
                <div className="inputBox">

                    <label for="nombre" >Nombre</label>
                    <input type="text" onChange={nuevoNombreColaborador}
                        value={nuevoColaborador} id="nombre"
                        placeholder="Escribe nombre"
                        className="inputForm"
                    />
                    <BsFillPersonFill className="iconsForm"/>


                </div>

                <div className="inputBox">

                    <label for="correo">Email</label>
                    <input type="email" onChange={nuevoCorreoColaborador}
                        value={nuevoCorreo} id="correo"
                        placeholder="Escribe Correo"
                        className="inputForm"
                    />
                    <FiMail className="iconsForm"/>
                    
                </div>

                <button onClick={agregarColaborador}>Agregar</button>
            </form>

            {/* <ul>
                
                {listaColaboradores.map(colaborador => <li key={colaborador.id}>
                    {colaborador.nombre}
                    {'  /  ' + colaborador.email}
                </li>)}
            </ul> */}
        </>
    );
}

export default Tareas;