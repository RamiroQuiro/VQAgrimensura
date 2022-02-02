import React, {useState} from "react";

const buttonSend = document.getElementById("send");
const numerodani = "+5493854852410";
const numero = "+5493855353174";
const nombreApellido = document.getElementById("nombreApellido");
const mail = document.getElementById("mail");
const mensaje = document.getElementById("mensaje");

const enviar = (e) => {
  e.preventDefault();
  setTimeout(() => {
    alert(mensaje)
    window.open(
      `https://wa.me/${numerodani}?text=Hola,%20te%20escribo%20desde%20tu%20sitio%20Web,%20mi%20nombre%20es%20${nombreApellido},%20te%20escribo%20para%20consultarte%20lo%20siguente:%20${mensaje},%20mi%20mail%20de%20contacto%20${mail},muchas%20gracias%20por%20su%20atención`,
      `_blank`
    );
  }, 200);
}




