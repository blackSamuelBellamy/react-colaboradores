import '../ComponentsCSS/Colaboradores.css'
import { useState } from 'react'


const Colabores = ({ lista }) => {

    const [despliegue, setDespliegue] = useState(false)
    const desplegando = e => {
        if(despliegue === true) return
        e.target.classList.add('listaDesplegada')
        e.target.classList.remove('listaColaboradores')
        setDespliegue(true)
        
    }

    const cerrar = e => {
        setDespliegue(false)
        e.target.parentNode.parentNode.classList.add('listaColaboradores')
        e.target.parentNode.parentNode.classList.remove('listaDesplegada')
    } 

    return (

        <div className="listaColaboradores" onClick={desplegando} >
            {
                despliegue ? 
                    <ul>
                        <span className="hambur" onClick={cerrar}></span>
                        {lista.map(colaborador => <li key={colaborador.id}>
                            <span className="item">Nombre: &nbsp; {colaborador.nombre} </span>
                            <span className="item">Correo: &nbsp; {colaborador.email} </span>

                        </li>)}
                    </ul> : ''
            }
        </div>
    );
}

export default Colabores;