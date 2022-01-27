import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer">
   
        <ul>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#inicio">servicios</a></li>
          <li><a href="#inicio">trabajos</a></li>
          <li><a href="#inicio">contacto</a></li>
        </ul>
        <div className="nameFooter">
            <p><b>••  Santiago del Estero   ••   Argentina   ••</b></p>
            <h2>Victor Daniel Quiroga</h2>
            <p><span>Ingeniero Agrimensor   •   Matricula N°9515</span></p>
        </div>
      
    </div>
  );
}
