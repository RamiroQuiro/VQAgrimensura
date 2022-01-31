import React, {useState} from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import "./navbar.css";


export default function Navbar(props) {

    const [nav,setnav]=useState(false)

    const changeBackground = ()=>{

        if(window.scrollY >=50){
            setnav(true);
            console.log(setnav,nav)
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground)

  return (
  <nav className={nav ? 'nav active' : 'nav'}>
        <a href="#inicio" className="logo">
            <img src={logo} alt="logo" />
        </a>
        <input type="checkbox" className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li className="link"><Link to='main' smooth={true} duration={1000}>Inicio</Link></li>
            <li className="link"><Link to='servicios'smooth={true} duration={1000}>servicios</Link></li>
            <li className="link"><Link to='section-swiper'smooth={true} duration={1000}>trabajos</Link></li>
            <li className="link"><Link to='contact'smooth={true} duration={1000}>contacto</Link></li>
        </ul>

</nav>
  );
}
