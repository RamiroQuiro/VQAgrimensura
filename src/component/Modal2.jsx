import React from "react";
import "./Modal.css";
import Portal from "./Portal";

export default function Modal2(props) {


  return (
    <div className={`modal ${ props.active && 'modalOpen'} `}onClick={props.toggle}>
      <div className="windows" onclick={clickWindows}>
        <button className="buttonModal" onClick={props.toggle}>
          X
        </button>
        <div>{props.description}</div>
      </div>
    </div>
  );
}
