
import './App.css';
import Testimonio from "./componentes/Testimonio";
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
    <hi>Esto es lo que dicen nuestros alumnos sobre el curso de React</hi>
      <Testimonio
      nombre="Emma bostian"
      pais="Suecia"
      imagen="foto1"
      cargo="ingeniera de Sotware "
      empresa="spotify"
      testimonio="esto es una prueba que estoy haciendo en la practica de React "/>
      <Testimonio
      nombre="mario"
      pais="argentina"
      imagen="foto2"
      cargo="estudiante"
      empresa="cepict"
      testimonio="esto es una prueba que estoy haciendo en la practica de React "/>
      </div>
      
    </div>
  );
}

export default App;
