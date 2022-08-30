import '../ComponentsCSS/Header.css'
import { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { DataContext } from '../context/DataContext'


const Header = ({ arrMain }) => {

    const [busqueda, setBusqueda] = useState('')
    const [despliegueList, setDespliegueList] = useState(false)
    const { setCerrarColaborador, setDespliegue } = useContext(DataContext)

    const typing = e => {

        setDespliegueList(true)
        setBusqueda(e.target.value)
        if (e.target.value !== '') setCerrarColaborador(true)
    }

    const filtrada = () => {

        const string = busqueda.toLowerCase().replace(/ /g, '')
        const searching = arrMain.filter(element => element.nombre.toLowerCase().replace(/ /g, '').includes(string))
        if (busqueda === '') {

            return (arrMain.map(colaborador => <li key={colaborador.id}>
                <span className="item">Nombre: &nbsp; {colaborador.nombre} </span>
                <span className="item">Correo: &nbsp; {colaborador.email} </span>

            </li>));
        }
        else if (busqueda !== '' && searching.length === 0  ) {
           return <h3>NO HAY CONCIDENCIAS...</h3>
        }

        else {
            return (
                searching.map(colaborador => <li key={colaborador.id}>
                    <span className="item">Nombre: &nbsp; {colaborador.nombre} </span>
                    <span className="item">Correo: &nbsp; {colaborador.email} </span>
    
                </li>)
            );
        }

    }

    const cerrar = e => {
        setDespliegueList(false)
        setBusqueda('')
        setCerrarColaborador(false)
        setDespliegue(false)
    }

    return (
        <>
            <form className="header">
                <h2>Buscador de colaboradores</h2>
                <div className="inputSearchBox">
                    <input type="text" value={busqueda} onChange={typing}
                        placeholder="Inicia Busqueda" className="inputSearch"
                        required />
                    <BsSearch className="iconHeader" />
                </div>
            </form>
            <div className={despliegueList ? 'listaDesplegada2' : 'listaNoDesplegada'}>
                <ul>
                    <span className="hambur2" onClick={cerrar}></span>
                    {filtrada()}
                </ul>
            </div>
        </>


    );
}

export { Header };