import React from "react";
import "./Trabajos.css"


export default function Trabajos(props) {
  return (
  <div id="trabajos">
      
      <div className="trabajos-text">
          <h2>{props.title}</h2>
          <p>{props.descripcion}</p>
      </div>
      <div className="trabajos-image">
          <img src={props.src} alt="trabajos" />
      </div>
    </div>
  );
}
