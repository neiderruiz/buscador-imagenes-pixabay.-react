import React, { Component } from "react";
import CardImagen from "./CardImagen";
import Modal from "./Modal";
import Paginacion from "./Paginacion";

class Resultado extends Component {
  state = {
    image: {},
    openModal: false,
  };
  ShowImageModal = (id) => {
    const images = this.props.imagenes;
    images.map((image, index) => {
      if (index === id) {
        this.setState({
          openModal: true,
          image: image,
          next: index + 1,
          prev: index - 1,
        });
      }
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };

  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;
    if (imagenes.length === 0) return null;

    return (
      <React.Fragment>
        <Modal
          {...this.state}
          isOpen={this.state.openModal}
          onClose={() => this.closeModal()}
          changeImage={this.ShowImageModal}
        />

        <div className="row">
          {imagenes.map((img, index) => (
            <CardImagen
              index={index}
              key={img.id}
              image={img}
              onClick={this.ShowImageModal}
            />
          ))}
        </div>
        <div className="row justify-content-center">
          <Paginacion
            paginaSiguiente={this.props.paginaSiguiente}
            paginaAnterior={this.props.paginaAnterior}
            amount={this.props.amount}
          />
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <>{this.mostrarImagenes()}</>;
  }
}

export default Resultado;
