import React from 'react';
import { Link } from "react-router-dom";
import api from '../servicios/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            inventarios: [],
            inventarioInicial: [],
            busquedad: [],
        }
    }
    cargarDatos() {
        fetch(api)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.setState({ datosCargados: true, inventarios: datosRespuesta, inventarioInicial: datosRespuesta })
            })
            .catch(console.log)
    }
    BorrarRegistro = (id) => {

        fetch(api + "/" + id,
            {
                method: 'DELETE'
            }
        )
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.cargarDatos();
            })
            .catch(console.log)

    }
    cambioValor = async (e) => {
        e.persist()
        await this.setState({ busquedad: e.target.value })
        this.filtrar();
    }
    filtrar = () => {
        var search = this.state.inventarioInicial.filter(item => {
            if (item.nombre.toString().includes(this.state.busquedad)) {
                return item;
            }
        });
        this.setState({ inventarios: search })
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
                    <div className='container mt-2'>
                        <div className="input-group mb-3">
                            <input type="text"  placeholder="Buscar por nombre" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                className="form-control inputBuscar"
                                value={busquedad}
                                onChange={this.cambioValor}
                            />
                            <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="encabezado">
                                    <th>Index</th>
                                    <th>C??d. Art</th>
                                    <th>Nombre</th>
                                    <th>Descripci??n</th>
                                    <th>Cantidad</th>
                                    <th>Acci??n</th>
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
                                                    <Link className="btn btn-warning" to={"/editar/" + inventario.id}><FontAwesomeIcon icon={faPen} />Editar</Link>
                                                    <Link className="btn btn-danger" to={"/eliminar/" + inventario.id}><FontAwesomeIcon icon={faTrash} />Eliminar</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">
                        <Link className="btn btn-success" to={"/crear"}>Agregar art??culo </Link>
                    </div>
                </div>)
        };
    }
}

export default Listar;