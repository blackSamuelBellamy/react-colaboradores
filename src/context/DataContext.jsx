import { createContext, useState } from "react";

export const DataContext = createContext()

export const MainData = ( { children } ) => {
    const [cerrarColaborador, setCerrarColaborador] = useState(false)
    const [despliegue, setDespliegue] = useState(false)
    return(
        <DataContext.Provider value = {{
            cerrarColaborador, 
            setCerrarColaborador,
            despliegue,
            setDespliegue
            }}>
            { children }
        </DataContext.Provider>
    );

}