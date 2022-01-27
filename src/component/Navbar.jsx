import React, {useState} from "react";
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
            <li><a href="#inicio" className='active'> inicio </a></li>
            <li><a href="#inicio"> servicios </a></li>
            <li><a href="#inicio"> trabajos </a></li>
            <li><a href="#inicio"> contacto </a></li>
        </ul>

</nav>
  );
}
