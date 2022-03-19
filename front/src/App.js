import React from 'react';
import './App.css';
import Listar from "./componentes/Listar";
import Crear from './componentes/Crear';
import Editar from './componentes/Editar';
import Eliminar from './componentes/Eliminar';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from './componentes/NavBar';
function App() {
  return (
    <div className='fondo'>
    <Router >
      <Navbar/>
      <div className="container">
      <br></br>
      <Route exact path="/" component={Listar}></Route>
      <Route path="/crear" component={Crear}></Route>
      <Route path="/editar/:id" component={Editar}></Route>
      <Route path="/eliminar/:id" component={Eliminar}></Route>
      </div>
    </Router>
    </div>
  );
}

export default App;
