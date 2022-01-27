const buttonSend = document.getElementById('send');
let numerodani = "+5493854852410";
/*const formularioWhastApp = document.getElementById('formulario');
let numero = "+5493855353174";
*/
buttonSend.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    let nombreApellido = document.getElementById('nombreApellido').value;
    let mail = document.getElementById('mail').value;
    let mensaje = document.getElementById('mensaje').value;
      
    window.open(
      `https://wa.me/${numerodani}?text=Hola,%20te%20escribo%20desde%20tu%20sitio%20Web,%20mi%20nombre%20es%20${nombreApellido},%20te%20escribo%20para%20consultarte%20lo%20siguente:%20${mensaje},%20mi%20mail%20de%20contacto%20${mail},muchas%20gracias%20por%20su%20atención`,
      `_blank`);
  }, 200);
});
