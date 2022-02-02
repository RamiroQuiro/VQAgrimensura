import React, {useState} from "react";
import "./contacto.css";




export default function Contact() {

  const numerodani = "+5493854852410";
const [nombreApellido,setNombre]=useState("");
const [mail,setMail]=useState("");
const [mensaje,setMensaje]=useState("");
const mensajeWhatsApp= `https://wa.me/${numerodani}?text=Hola,%20te%20escribo%20desde%20tu%20sitio%20Web,%20mi%20nombre%20es%20${nombreApellido},%20te%20escribo%20para%20consultarte%20lo%20siguente:%20${mensaje},%20mi%20mail%20de%20contacto%20${mail},muchas%20gracias%20por%20su%20atención`;


const enviarForm = (e) => {
  e.preventDefault();
  setTimeout(() =>{
    window.open(mensajeWhatsApp,`_blank`);

  },200)
}

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
                value={nombreApellido}
                onChange={(e)=>setNombre(e.target.value)}
                required
                className="entrada"
                id="nombreApellido"
              />
            <input type="email" placeholder="nombre@mail.com" id="mail"required 
            value={mail}
            onChange={(e)=>setMail(e.target.value)}/>
            <textarea placeholder="Escribe tu consulta"  id="mensaje"required
             value={mensaje}
             onChange={(e)=>setMensaje(e.target.value)}/>
            <button id="send"  onClick={enviarForm}>Enviar WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
}
