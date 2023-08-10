import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logo from './img/freecodecamp-logo.png'
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0)

  const manejar_Clic = () => {
    setNumClics(numClics + 1)
  }
  const reiniciarContador = ()=>{
    setNumClics(0)
  }


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logo}
          alt='logo'/>
      </div>
      <div className='contenedor'>
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        esCLick={true}
        manejarClic={manejar_Clic}/>
        <Boton 
        texto={'Reiniciar'}
        esCLick={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
