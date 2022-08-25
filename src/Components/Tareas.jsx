import { useState } from "react"
import listaInicial from './listaInicial.json'
import '../ComponentsCSS/Tareas.css'

let busqueda1

const Tareas = () => {

    const [listaColaboradores, setListaColaboradores] = useState(listaInicial)
    const [nuevoColaborador, setNuevoColaborador] = useState('')
    const [nuevoCorreo, setNuevoCorreo] = useState('')
    const [nuevoID, setNuevoID] = useState(listaInicial.length + 1)
    const [busqueda, setBusqueda] = useState('')

    const nuevoNombreColaborador = e => setNuevoColaborador(e.target.value)
    const nuevoCorreoColaborador = e => setNuevoCorreo(e.target.value)
    const haciendoBusqueda = e => setBusqueda(e.target.value)

    const agregarColaborador = e => {

        e.preventDefault()
        const nuevoNombre = [...listaColaboradores, {
            id: nuevoID,
            nombre: nuevoColaborador,
            email: nuevoCorreo
        }]
        setNuevoID(nuevoID + 1)
        setListaColaboradores(nuevoNombre)
        setNuevoColaborador('')
        setNuevoCorreo('')
    }

    const buscandoColaborador = e => {

        if (busqueda.trim() !== '') {

            const enBusqueda = [...listaColaboradores]
            const newArray = enBusqueda.map(arr => arr.nombre.replace(/ /g, ''))
            busqueda1 = busqueda.replace(/ /g, '')
            const match = newArray.findIndex(index => index.toLowerCase() === busqueda1.toLowerCase())

            if (match !== -1) {

                const matching = busqueda1.toLowerCase()
                const match1 = newArray[match].toLowerCase()
                if (matching.trim() === match1.trim()) console.log('wena shoro', busqueda)
            } else {
                console.log('No hay coincidencias con: ', busqueda)
            }
            setBusqueda('')
        }
    }

    return (
        <>
            <form>
                <div className="inputBox">

                    <label for="nombre">Nombre</label>
                    <input type="text" onChange={nuevoNombreColaborador}
                        value={nuevoColaborador} id="nombre"
                        placeholder="Escribe nombre"
                    />

                </div>

                <div className="inputBox">

                    <label for="correo">Email</label>
                    <input type="email" onChange={nuevoCorreoColaborador}
                        value={nuevoCorreo} id="correo"
                        placeholder="Escribe Correo"
                    />

                </div>

                <button onClick={agregarColaborador}>Agregar</button>
            </form>

            {/* <ul>
                <input type="text" value={busqueda} onChange={haciendoBusqueda} />
                <button onClick={buscandoColaborador}>Buscar</button>
                {listaColaboradores.map(colaborador => <li key={colaborador.id}>
                    {colaborador.nombre}
                    {'  /  ' + colaborador.email}
                </li>)}
            </ul> */}
        </>
    );
}

export default Tareas;