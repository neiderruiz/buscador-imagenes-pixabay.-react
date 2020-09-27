import React, { Component } from 'react';

class Buscado extends Component {
    
    BusquedaRef = React.createRef();
    
    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.BusquedaRef.current.value;
        this.props.termino(termino)
    }

    render() {     
        return ( 
            <form onSubmit={this.obtenerDatos}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" ref={this.BusquedaRef}  className="form-control form-control-lg" placeholder="Busca tu imagen"/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit"  className="btn btn-outline-primary btn-block btn-lg" value="Buscar Imagen"/>
                </div>
            </div>
            </form>
         );
    }
}
 
export default Buscado;