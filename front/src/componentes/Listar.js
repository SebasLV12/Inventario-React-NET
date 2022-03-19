import React from 'react';
import { Link } from "react-router-dom";
import api from '../servicios/api';
import './Listar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen,faTrash,faSearch} from '@fortawesome/free-solid-svg-icons';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            inventarios: [],
            inventarioInicial:[],
            busquedad:[],
        }
    }
    cargarDatos() {
        fetch(api)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                    console.log(datosRespuesta)
                    this.setState({ datosCargados: true, inventarios: datosRespuesta, inventarioInicial: datosRespuesta })
            })
            .catch(console.log)
    }
    BorrarRegistro = (id) => {
        console.log(id);
        fetch(api + "/" + id, {
            method: 'DELETE'
        }
        )
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                this.cargarDatos();
            })
            .catch(console.log)

    }
    cambioValor=async (e)=>{
        
        e.persist()
        await this.setState({busquedad: e.target.value})
        console.log(this.state.busquedad)
        this.filtrar();
    }
    filtrar=()=>{
        var search=this.state.inventarioInicial.filter(item=>{
            if(item.nombre.toString().includes(this.state.busquedad)){
                return item;
            }
        });
        this.setState({inventarios:search})
    }
    componentDidMount() {
        this.cargarDatos();
    }
    render() {
        const { datosCargados, inventarios, busquedad } = this.state

        if (!datosCargados) { return (<div>Cargando...</div>); }
        else {
            return (
                <div className="box">
                    <div className='container'>
                        <input 
                        className="form-control inputBuscar"
                        value={busquedad}
                        onChange={this.cambioValor}
                        
                        />
                        <button className="btn btn-success">
                        <FontAwesomeIcon icon={faSearch}/>    
                        </button>
                    </div>
                    <div className="container mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="encabezado"> 
                                <th>Index</th>
                                <th>Cód. Art</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventarios.map(
                                (inventario) => (
                                    <tr key={inventario.id}>
                                        <td>{inventario.id}</td>
                                        <td>{inventario.codigo}</td>
                                        <td>{inventario.nombre}</td>
                                        <td>{inventario.descripcion}</td>
                                        <td>{inventario.cantidad}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/editar/" + inventario.id}><FontAwesomeIcon icon={faPen}/>  Editar</Link>
                                                <button type="button" className="btn btn-danger" onClick={() => this.BorrarRegistro(inventario.id)}>
                                                <FontAwesomeIcon icon={faTrash}/> Borrar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    </div>
                    <div className="card-footer text-muted">
                        <Link className="btn btn-success" to={"/crear"}>Agregar artículo </Link>
                    </div>
                </div>)
        };
    }
}

export default Listar;