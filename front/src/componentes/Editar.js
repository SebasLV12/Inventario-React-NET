import React from "react";
import { Link } from "react-router-dom";
import api from '../servicios/api';
class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            datosCargados: false,
            inventario:[],
            errores:[]
         }
    }
    verificarError(elemento) {
        return this.state.errores.indexOf(elemento) !== -1;
    }
    cambioValor=(e)=>{
        const state=this.state.inventario;
        state[e.target.name]=e.target.value;
        this.setState({inventario:state});
    }
    enviarDatos=(e)=>{
        e.preventDefault();
        const{id,codigo,nombre,descripcion,cantidad}=this.state.inventario;
        var errores = [];
        if (!codigo) errores.push("error_nombre");
        if (!nombre) errores.push("error_codigo");
        if (!descripcion) errores.push("error_descripcion");
        if (!cantidad) errores.push("error_cantidad");

        this.setState({ errores: errores });
        if (errores.length > 0) return false;
        var datosEnviar={
            id:id,
            codigo:codigo,
            nombre:nombre,
            descripcion:descripcion,
            cantidad:cantidad
        }

        fetch(api+"/"+id, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(datosEnviar)
            
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.props.history.push("/");
            })
            .catch(console.log)
    }
    componentDidMount(){
        fetch(api+"/"+this.props.match.params.id)
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {

            this.setState({
                 datosCargados: true,
                 inventario:datosRespuesta
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
                <h2>Modificar Articulo</h2>
            </div>
            <div className="card-body">
            <form onSubmit={this.enviarDatos}>
                
                <div className="form-group">
                  <label>Indice:</label>
                  <input type="text" readOnly className="form-control" value={inventario.id} onChange={this.cambioValor} name="id" id="id" aria-describedby="helpId" placeholder=""/>

                </div>
                      <div className="form-group mt-3">
                        <label >Nombre: </label>
                        <input type="text" name="nombre" value={inventario.nombre} onChange={this.cambioValor} id="nombre" className={((this.verificarError("error_nombre")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId"/>
                       
                      </div>
                      
                      <div className="form-group mt-3">
                        <label>Código: </label>
                        <input type="text" name="codigo" value={inventario.codigo} onChange={this.cambioValor} id="codigo" className={((this.verificarError("error_codigo")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId"/>
                       
                      </div>

                      <div className="form-group mt-3">
                        <label>Descripción: </label>
                        <input type="text" name="descripcion" value={inventario.descripcion} onChange={this.cambioValor} id="descripcion" className={((this.verificarError("error_descripcion")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId"/>
                        
                      </div>
                      
                      <div className="form-group mt-3">
                        <label>Cantidad: </label>
                        <input type="text" name="cantidad" id="cantidad" onChange={this.cambioValor} value={inventario.cantidad} className={((this.verificarError("error_cantidad")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId"/>
                        
                      </div>

                        <div className="btn-group mt-3" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar</button>
                            <Link to={"/"} type="submit" className="btn btn-primary">Cancelar</Link>
                        </div>
                      
                  </form>
            </div>
            
        </div>);
        }
    }
}
 
export default Editar;