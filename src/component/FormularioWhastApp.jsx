import React from "react";


export default function FormularioWhastApp() {
  function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '3855353174';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let email = document.querySelector('#mnsj').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A*¿Cuáles son tus apellidos?*%0A' + apellidos + '%0A*¿Cuál es tu correo electrónico?*%0A' + email + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});


  return (
    <div id="container-formulario">
      <form id="formulario" className="formulario">
        <h1>Envío de formulario por WhatsApp</h1>
        <div className="box-input">
          <input name="nombre" id="nombre" type="text" required />
          <span data-placeholder="Escriba su Nombre"></span>
        </div>
        <div className="box-input">
          <input name="apellidos" id="apellidos" type="text" required />
          <span data-placeholder="Escriba sus Apellidos"></span>
        </div>
        <div className="box-input">
          <input name="mnsj" id="mnsj" type="email" required />
          <span data-placeholder="Escriba su Correo Electrónico"></span>
        </div>
        <button id="submit" type="submit" className="boton">
          <i className="fab fa-whatsapp"></i> Enviar WhatsApp
        </button>
      </form>
    </div>
  );
}
