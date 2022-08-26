import '../ComponentsCSS/Header.css'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Header = ({ arrMain, arr}) => {

    const [busqueda, setBusqueda] = useState('')
    const haciendoBusqueda = e => setBusqueda(e.target.value)

    const buscandoColaborador = e => {

        e.preventDefault()

        if (busqueda.trim() !== '') {

            const enBusqueda = [...arrMain]
            const newArray = enBusqueda.map(arr => arr.nombre.replace(/ /g, ''))
            let busqueda1 = busqueda.replace(/ /g, '')
            const match = newArray.findIndex(index => index.toLowerCase() === busqueda1.toLowerCase())

            if (match !== -1) {

                const matching = busqueda1.toLowerCase()
                const match1 = newArray[match].toLowerCase()
                
                if (matching.trim() === match1.trim()) alert(`Existe la persona ${arrMain[match].nombre}`)
            } else {
                alert(`No hay coincidencias con: ${busqueda}`)
            }
            setBusqueda('')
        }
    }


    return (
         <form onSubmit={buscandoColaborador} className="header">
            <input type="text" value={busqueda} onChange={haciendoBusqueda}
                placeholder="Inicia Busqueda" className="inputSearch"
                required />
            <BsSearch className="iconHeader"
            />
            <button type="submit" className="headerButton">Buscar</button>
        </form>
       

    );
}

export default Header;