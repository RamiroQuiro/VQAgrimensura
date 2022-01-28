import React from "react";
import "./contacto.css";
import "./useWhatsApp.js";



export default function Contact() {

  return (
    <div id="contact">
      <h2>Tú consulta, no molesta</h2>
      
      <div className="contactos">
        <div className="redes">
          <h3>Informacion de Contacto</h3>
          <span>
            <i class="fi fi-rr-envelope"></i>
            <a href="http://">victordaniel@hotmail.com</a>
          </span>
          <span>
            <i class="fi fi-rr-briefcase"></i>
            <a href="http://">Victor Quiroga LiKedin</a>
          </span>
          <span>
            <i class="fi fi-rr-paper-plane"></i>
            <a href="https://www.facebook.com/danni.quiroga.54">
              Daniel Quiroga Agrimensura
            </a>
          </span>
          <span>
            <i class="fi fi-rr-call-history"></i>
            <a href="https://www.facebook.com/danni.quiroga.54">3855353174</a>
          </span>
        </div>
        <div className="contact-input">
          <h3>Envía tu consulta por WhatsApp</h3>
          <form className="formulario" id="formulario">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                required
                className="entrada"
                id="nombreApellido"
              />
            <input type="email" placeholder="nombre@mail.com" id="mail"required />
            <textarea placeholder="Escribe tu consulta"  id="mensaje"required/>
            <button id="send" type="submit">Enviar WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
}
