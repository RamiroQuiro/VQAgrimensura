import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div className="modal is-open">
      <div  className="modal-container">Modales</div>
      <button onClick={props.toggle}>X</button>
      {props.children}
    </div>
  
    );
}
