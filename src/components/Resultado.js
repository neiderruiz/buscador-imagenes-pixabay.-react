import React, { Component } from 'react';
import CardImagen from './CardImagen';
import Paginacion from './Paginacion';

class Resultado extends Component {
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0) return null
        
        return(
            <React.Fragment>
                <div className="row">
                {
                    imagenes.map(img => <CardImagen key={img.id} image={img} />)
                }
                </div>
                <div className="row justify-content-center">
                <Paginacion
                paginaSiguiente={this.props.paginaSiguiente} 
                paginaAnterior={this.props.paginaAnterior} 
                />
                </div>
            </React.Fragment>
        )

    }

    render(){
        return (
            <>
            {this.mostrarImagenes()}
            </>
        );
    }
}


export default Resultado;