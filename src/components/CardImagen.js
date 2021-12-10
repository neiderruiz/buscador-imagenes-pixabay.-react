import React from "react";

const CardImagen = ({ image, onClick, index }) => {
  const { previewURL, tags, likes, downloads, comments } = image;
  return (
    <div className="col-lg-3 p-1">
      <div className="card ">
        <div className="container-image-card">
          <img src={previewURL} className="card-img-top img-card" alt={tags} />
        </div>
        <div className="card-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">{comments} Commentarios</p>
          <p className="card-text">{downloads} Descargas</p>
          <button
            onClick={() => onClick(index)}
            rel="noopener noreferrer"
            className="img-card btn btn-block btn-outline-warning"
          >
            Ver imagen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardImagen;
