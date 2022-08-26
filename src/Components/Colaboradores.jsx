import '../ComponentsCSS/Colaboradores.css'
import { useState} from 'react'

const Colabores = () => {

    const [despliegue, setDespliegue] = useState(false)

    const changingState = () => setDespliegue(true)
    return (

        <div className="listaColaboradores" onClick = {changingState} >
           {despliegue ? <p>wena</p>: <p>mala</p>}
        </div>
    );
}

export default Colabores;