import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alert from './components/Alert'
import { BaseColaboradores } from './assets/BaseColaboradores'
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  //mostrar un listado de colaboradores
  const [listaDeColaboradores, setListaDeColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({error:'', mensaje: '', color: ''});
  const [buscar, setBuscar] = useState("");

  // agregar colaboradores nuevos al listado
  const agregarColaborador = (nuevoColaborador) => {
      const colaboradorConID = {
        ...nuevoColaborador,
        id: Date.now()
      };

      setListaDeColaboradores([...listaDeColaboradores,colaboradorConID]);


  }

  //agregar una barra que nos permita buscar algun colaborador por x campo
  const manejeElCambio = (evento) => {
    setBuscar(evento.target.value.trim());
  }

  const listaDeColaboradoresFiltrada = listaDeColaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(buscar.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(buscar.toLowerCase())
      
    ) {
      return true;
    }

    return false;
  })

  //eliminar un colaborador del listado

  // CREATE READ UPDATE DELETE
  return (
    <>
      <Buscador buscar={buscar} manejeElCambio={manejeElCambio}/>
      <Listado listaDeColaboradores={listaDeColaboradoresFiltrada}/>
      <Formulario listoParaAgregar={agregarColaborador} setAlert={setAlert}/>
      {alert.mensaje && <Alert color= {alert.color}>{alert.mensaje}</Alert>}
    </>
  )
}

export default App
