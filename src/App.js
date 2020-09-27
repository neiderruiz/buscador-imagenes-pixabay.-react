import React, { Component } from 'react';
import './App.css';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class  App extends Component {

  state = {
    termino: 'car',
    imagenes: [],
    pagina: ''
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start')
  }

  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    
    if(pagina === 1) return null;

    pagina--;

    this.setState({
      pagina: pagina
    },()=>{
      this.consutarApi()
      this.scroll();
    });
    
  }
  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    pagina++;
    this.setState({
      pagina: pagina
    },()=>{
      this.consutarApi()
      this.scroll();
    });
    

  }

    consutarApi = async()=>{
      const termino = this.state.termino;
      const pagina = this.state.pagina;
      const url = `https://pixabay.com/api/?key=18471271-03aee137e0067d562727ae01e&q=${termino}&min_width=800&min_height=800&per_page=32&page=${pagina}&image_type=photo&pretty=true`;
      fetch(url)
        .then(datos => datos.json())
        .then(resultado => this.setState({ imagenes: resultado.hits}))
      
    }

  datosBusqueda = (termino) =>{

    if(termino.length > 2){
      this.setState({
        termino: termino,
        pagina: 1
      },()=>{this.consutarApi()})  
    }
    
  }
  render(){
  return (
    <div className="container">
      <div className="jumbotron">
      <p className="lead text-center">Buscador de imagenes</p>
      <Buscador termino={this.datosBusqueda}/>
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
