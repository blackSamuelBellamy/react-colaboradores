import '../ComponentsCSS/Header.css'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Header = ({arrMain}) => {

    const [busqueda, setBusqueda] = useState('')
    const haciendoBusqueda = e => setBusqueda(e.target.value)

    const buscandoColaborador = e => {

        if (busqueda.trim() !== '') {

            const enBusqueda = [...{arrMain}]
            const newArray = enBusqueda.map(arr => arr.nombre.replace(/ /g, ''))
            let busqueda1 = busqueda.replace(/ /g, '')
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
        <div className="header">
            <input type="text" value={busqueda} onChange={haciendoBusqueda} 
            placeholder="Inicia Busqueda" className="inputSearch"/>
            <BsSearch className="iconHeader"/>
            <button onClick={buscandoColaborador}>Buscar</button>
        </div>
    );
}

export default Header;