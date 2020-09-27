import React from 'react';

const CardImagen = (props) =>{
    const {previewURL,tags, likes,downloads,favorites,pageURL} = props.image;
    return(
        <div className="col-lg-3 p-1">
        <div className="card ">
            <img src={previewURL} className="card-img-top img-card" alt={tags}/>
            <div className="card-body">
                <p className="card-text">{likes} Me gusta</p>
                <p className="card-text">{favorites} Descargas</p>
                <p className="card-text">{downloads} Descargas</p>
                <a href={pageURL} target="_blank" rel="noopener noreferrer" className="btn btn-block btn-outline-warning">Ver imagen</a>
                </div>
        </div>
        </div>
        );
}

export default CardImagen