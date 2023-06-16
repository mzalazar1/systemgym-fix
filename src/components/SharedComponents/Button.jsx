import React from "react";
import './Boton.module.css';

const Boton = ({ tipo, texto }) => {
    return (
        <button className={tipo}>{texto}</button>
    );
}

export default Boton;