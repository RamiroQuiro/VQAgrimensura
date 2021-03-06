import React, {useState} from "react";
import { Link } from "react-scroll";
import logoDorito from "../images/dorito logo.png";
import facebook from "../images/002-facebook.png"; 
import instagram from "../images/001-instagram.png";
import linkedin from "../images/003-linkedin.png";
import "./Footer.css";

export default function Footer() {

  const [doritoState, setDoritoState]=useState(false)
  const d= document, w=window;

  function scrollToElement() {

    const pixelTop = w.scrollY;
    if (pixelTop < 4280) {
      setDoritoState(false);
      console.log("este es el doritoState", doritoState);

    } else {
      setDoritoState(true);
      console.log("este es pixeltop", pixelTop);
    }
  }
w.addEventListener('scroll',scrollToElement);

  return (
    <footer id="footer">
      <div className={doritoState ? "footer-container wrapper" : "footer-container"}>
        <ul>
          <li className="link">
            <Link to="main" smooth={true} duration={1000}>
              inicio
            </Link>
          </li>
          <li className="link">
            <Link to="servicios" smooth={true} duration={1000}>
              servicios
            </Link>
          </li>
          <li className="link">
            <Link to="section-swiper" smooth={true} duration={1000}>
              trabajos
            </Link>
          </li>
          <li className="link">
            <Link to="contact" smooth={true} duration={1000}>
              {" "}
              contacto
            </Link>
          </li>
        </ul>
        <div className="nameFooter">
          <p>
            <b> •• Santiago del Estero •• Argentina •• </b>
          </p>
          <h2>Victor Daniel Quiroga</h2>
          <p>
            <span>Ingeniero Agrimensor • Matricula N°9515</span>
          </p>
        </div>
      </div>
      <div className={doritoState? "footer-dorito active" : "footer-dorito"}>
        <div className="logoFooter">
          <img src={logoDorito} alt="" />
        </div>
        <div className="descriptionFooter">
          <span>
            Copyright ©2022 All rights reserved | Diseño y produccion by <a href="https://ramirochangomoreno.github.io/DoritoWebDesign." target="_blank"> <b>Dorito Web Design</b>
          </a></span>
          <ul className="redesFooter">
            <li><img src={facebook} alt="" /><a href="https://www.facebook.com/DoritoDesign" target="_blank"> facebook</a></li>
            <li><img src={instagram} alt="" /><a href="https://www.instagram.com/doritodisenio/" target="_blank">instagram</a></li>
            <li><img src={linkedin} alt="" /><a href="https://www.linkedin.com/in/ramiro-exequiel-quiroga/" target="_blank">linkedin</a></li>
          </ul>
        </div>
      </div>
  
    </footer>
  );
}
