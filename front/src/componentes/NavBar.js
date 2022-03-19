import React from 'react';
import { Link } from "react-router-dom";
class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand barra" >
                <div className="nav navbar-nav">
                    <Link className="titulo" to={"/"}>Inventario <span className="sr-only"></span></Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;