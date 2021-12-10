import React from "react";

const Paginacion = ({ paginaAnterior, paginaSiguiente }) => {
  const [before, setBefore] = React.useState(false);
  return (
    <div className="py-3">
      <button
        type="button"
        disabled={before ? false : true}
        onClick={() => setBefore(paginaAnterior())}
        className="btn btn-info mr-1"
      >
        &larr; Anterior
      </button>
      <button
        type="button"
        onClick={() => setBefore(paginaSiguiente())}
        className="btn btn-info mr-1"
      >
        Siguiente &rarr;
      </button>
    </div>
  );
};

export default Paginacion;
