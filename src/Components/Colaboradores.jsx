import '../ComponentsCSS/Colaboradores.css'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Colaboradores = ({ lista }) => {

    const { cerrarColaborador, setCerrarColaborador,
            despliegue, setDespliegue } = useContext(DataContext)

    const desplegando = e => {
        if (despliegue === true) return
        e.target.classList.add('listaDesplegada')
        e.target.classList.remove('listaColaboradores')
        setDespliegue(true)

    }

    const cerrar = e => {
        setDespliegue(false)
        setCerrarColaborador(false)
        e.target.parentNode.parentNode.classList.add('listaColaboradores')
        e.target.parentNode.parentNode.classList.remove('listaDesplegada')

    }

    return (

        <div onClick={desplegando} className= {cerrarColaborador ? "listaNoDesplegada":
        "listaColaboradores"}>

            {despliegue ?
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
export default Colaboradores;