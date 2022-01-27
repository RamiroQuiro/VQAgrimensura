import React from "react";
import "./Modal.css";
import Modal from "./Modal";

export default function Modales(props) {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal1</button>
      <Modal>
            <h3>Modal1</h3>
            <p>Hola</p>
      </Modal>
  
      <button>Modal2</button>
      <Modal>
            <h3>Modal1</h3>
            <p>Hola</p>
      </Modal>
    </div>
  
    );
}
