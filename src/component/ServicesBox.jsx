import React from "react";
import "./ServicesBox.css";
import PropTypes from "prop-types";

export default function ServicesBox({
  toggle,
  src,
  title,
  description,
  id,
}) {
  return (
    <div className="cardServices" onClick={toggle}>
      <input
        type="checkbox"
        className="card-btn"
        name="1"
        id={`checkobx:${id}`}
      />
      <div className="a-box">
        <span className="overlayCard"></span>
        <div className="a-b-img">
          <img src={src} alt="Services" />
        </div>
        <div className="a-b-text">
          <h3>{title}</h3>
          <p className="description">{description}</p>
        </div>
        <label className="card-btn-label" for={`checkobx:${id}`}>
                    
        </label>
      </div>
    </div>
  );
}

ServicesBox.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
