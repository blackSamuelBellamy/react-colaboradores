import './App.css';
import Tareas from './Components/Tareas';
import Header from './Components/Header';
import listaInicial from './Components/listaInicial.json'
import { useState } from "react"

const App = () =>  {
  const [listaColaboradores, setListaColaboradores] = useState(listaInicial)
  return (
    <div className="container">
      <Header arrMain={listaColaboradores} />
      <Tareas mainLista={listaColaboradores} setList={setListaColaboradores} /> 
    </div>
  );
}

export default App;
