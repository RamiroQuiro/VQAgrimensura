import React from 'react';
import logo from "../images/logo.png";
import circulo from "../images/circuloAmarillo.png";
import videoBkg from "../images/videoBkg.mp4";
import imgHeader from "../images/img-header.png";
import Navbar from "./Navbar";


export default function Header(props) {
  return (
    <div id="main">
      <div className="headerVideo">
        <video muted autoPlay loop >
        <source src={videoBkg} type="video/mp4"/>
        <source src={videoBkg} type="video/ogg"/>
          <source src={videoBkg} type='video/mp4' />  
        </video>
      </div>
      <div className="headerOverlay"></div>
      <div className="bkg-header">
        <div className="img-header" >
          <img src={circulo} alt="circulo" />
          <img   src={imgHeader} alt="imgHeader" />
        </div>
      </div>
      <Navbar />
      <div className="name">
        <figcaption>
          <img src={logo} alt="Logo" />
        </figcaption>
        <h1>
          <span> • Victor Quiroga • </span> Agrimensura
        </h1>
        <p className="details">Ingeniero Agrimensor</p>
        <a href="#Inicio" className="cv-btn">
          Contacto
        </a>
      </div>
    </div>
  );
}

