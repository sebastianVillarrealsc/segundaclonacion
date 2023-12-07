import React from "react";

function Testimonios(){
    return(
    
<div className="contenedor-testimonio">
    <img className="imagen-testimonio"
    src={require("../imagenes/foto3.png")}
    alt="fotografia"/>
    <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">ingeniera de software en spotify</p>
        <p className="texto-testimonio">esto es una prueba de react basada en un curso de freCodeCamp es diferente a lo que nos mostro Marcelo , la diferencia mayor esta en la inicializacion y en la manera de hacer correr el proyecto ,voy a tratar de preguntar cual es la mas adecuada me parece que seria la de la carrera </p>
    </div>
</div>
    );
}
export default Testimonios;