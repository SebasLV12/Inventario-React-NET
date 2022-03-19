import React from "react";
import { Link } from "react-router-dom";
import api from '../servicios/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
class Eliminar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            inventario: [],
        }
    }
    cambioValor = (e) => {

        const state = this.state.inventario;
        state[e.target.name] = e.target.value;
        this.setState({ inventario: state });

    }
    BorrarRegistro = (e) => {

        const { id, codigo, nombre, descripcion, cantidad } = this.state.inventario;

        var datosEnviar = {
            id: id,
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            cantidad: cantidad
        }

        fetch(api + "/" + id, {
            method: 'DELETE'
        }
        )
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.props.history.push("/");
            })
            .catch(console.log)
    }
    componentDidMount() {
        fetch(api + "/" + this.props.match.params.id)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.setState({
                    datosCargados: true,
                    inventario: datosRespuesta
                })
            })
            .catch(console.log)
    }
    render() {
        const { datosCargados, inventario } = this.state
        if (!datosCargados) { return (<div>Cargando...</div>); }
        else {
            return (
                <div className="card">
                    <div className="card-header">
                        <h2>Elminar Articulo</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.enviarDatos}>

                            <div className="form-group">
                                <label>Indice:</label>
                                <input type="text" readOnly className="form-control" value={inventario.id} onChange={this.cambioValor} name="id" id="id" aria-describedby="helpId" placeholder="" />

                            </div>
                            <div className="form-group mt-3">
                                <label >Nombre: </label>
                                <input type="text" readOnly name="nombre" value={inventario.nombre} onChange={this.cambioValor} id="nombre" className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group mt-3">
                                <label>Código: </label>
                                <input type="text" readOnly name="codigo" value={inventario.codigo} onChange={this.cambioValor} id="codigo" className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group mt-3">
                                <label>Descripción: </label>
                                <input type="text" readOnly name="descripcion" value={inventario.descripcion} onChange={this.cambioValor} id="descripcion" className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>

                            <div className="form-group mt-3">
                                <label>Cantidad: </label>
                                <input type="text" readOnly name="cantidad" id="cantidad" onChange={this.cambioValor} value={inventario.cantidad} className="form-control" placeholder="" aria-describedby="helpId" />

                            </div>
                            <p className="mt-2">¿Estas seguro de que deseas borrar este artículo?</p>
                            <div className="btn-group " role="group" aria-label="">

                                <button type="button" className="btn btn-danger" onClick={() => this.BorrarRegistro(inventario.id)}>
                                    <FontAwesomeIcon icon={faTrash} /> Borrar
                                </button>
                                <Link to={"/"} type="submit" className="btn btn-primary">Cancelar</Link>
                            </div>

                        </form>
                    </div>

                </div>);
        }
    }
}

export default Eliminar;