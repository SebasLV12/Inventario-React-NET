import React from 'react';
import './App.css';
import Listar from "./componentes/Listar";
import Crear from './componentes/Crear';
import Editar from './componentes/Editar';
import { Route, BrowserRouter as Router } from "react-router-dom";
import {Link} from "react-router-dom";
function App() {
  return (
    <div className='fondo'>
    <Router >
      <nav className="navbar navbar-expand barra" >
          <div className="nav navbar-nav">
              <Link className="tituloB" to={"/"}>Inventario <span className="sr-only"></span></Link>
          </div>
      </nav>
      <div className="container">
      <br></br>
      <Route exact path="/" component={Listar}></Route>
      <Route path="/crear" component={Crear}></Route>
      <Route path="/editar/:id" component={Editar}></Route>
    </div>
    </Router>
    </div>
  );
}

export default App;
