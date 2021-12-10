import React, { Component } from "react";
// import "./App.css";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";
import { get } from "./services/api/http";

class App extends Component {
  state = {
    termino: "car",
    imagenes: [],
    pagina: 1,
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if (pagina === 1) return null;

    pagina--;

    this.setState(
      {
        pagina: pagina,
      },
      () => {
        this.consutarApi();
        this.scroll();
      }
    );
    return pagina;
  };
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState(
      {
        pagina: pagina,
      },
      () => {
        this.consutarApi();
        this.scroll();
      }
    );
    return pagina;
  };

  consutarApi = async () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const perPage = process.env.REACT_APP_PER_PAGE;
    const url = `?key=${process.env.REACT_APP_API_KEY}&q=${termino}&min_width=800&min_height=800&per_page=${perPage}&page=${pagina}&image_type=photo&pretty=true`;
    get(url).then((resultado) => {
      const hits = resultado.hits;
      delete resultado.hits;
      this.setState({ ...resultado, imagenes: hits });
    });
  };

  datosBusqueda = (termino) => {
    if (termino.length > 2) {
      this.setState(
        {
          termino: termino,
          pagina: 1,
        },
        () => {
          this.consutarApi();
        }
      );
    }
  };

  componentDidMount() {
    this.consutarApi();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador termino={this.datosBusqueda} />
          <div className="row">
            <div className="col-md-6">
              Termino de busqueda: <b>{this.state.termino}</b>
            </div>
            <div className="col-md-6">
              Resultados: <b>{this.state.total}</b>
            </div>
          </div>
        </div>
        {
          <Resultado
            imagenes={this.state.imagenes}
            paginaSiguiente={this.paginaSiguiente}
            paginaAnterior={this.paginaAnterior}
          />
        }
      </div>
    );
  }
}

export default App;
