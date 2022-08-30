import './App.css';
import Tareas from './Components/Tareas';
import { Header } from './Components/Header';
import Colaboradores from './Components/Colaboradores';
import listaInicial from './Components/listaInicial.json'
import { useState } from "react"
import { MainData } from './context/DataContext';

const App = () => {

  const [listaColaboradores, setListaColaboradores] = useState(listaInicial)

  return (
    <MainData>
      <div className="container">
        <Header arrMain={listaColaboradores} />
        <Tareas mainLista={listaColaboradores} setList={setListaColaboradores} />
        <Colaboradores lista={listaColaboradores} />
      </div>
    </MainData>
  );
}

export default App;
