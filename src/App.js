import './App.css';
import Boton from './componentes/boton';
import logo from './img/freecodecamp-logo.png'

function App() {
  const manejar_Clic = () => {
    console.log("clic")
  }
  const reiniciarContador = ()=>{
    console.log("reiniciar")
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
