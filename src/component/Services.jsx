import React from "react";
import ServicesBox from "./ServicesBox";
import mensura from "../images/mensura.png"
import amojonamiento from "../images/amojonamiento.png"
import subdivision from "../images/subdivision.png"
import feature_1_2 from "../images/proyecto-loteo.png"
import feature_1 from "../images/estado parcelario.png"
import usucapion from "../images/usucapion.png"


const servicios=[
  {
    id: 1,
    title:"Mensura",
    description:"La palabra mensura puede atribuirse a la operación topográfica y técnico-legal por la que se obtiene la definición de un bien inmueble, en cuanto a sus atributos de dimensionado, orientación, ubicación  y mejoras incorporadas , surgidos éstos datos de medición directa, y compatibilizados con los derechos reales ejercidos sobre él.",
    image: mensura,
  },
  {
    id: 2,
    title:"Amojonamiento",
    description:"Análisis de título de propiedad, verificación de datos catastrales y correspondiente colocación de mojones, en predios urbanos, suburbanos y rurales, individuales, o bien, en predios surgentes de unificaciones con redistribución parcelaria, fraccionamiento o loteo.",
    image: amojonamiento,
  },
  {
    id: 3,
    title:"Subdivision de propiedades horizontales",
    description:"Es el plano obligatorio que debe presentar el Abogado al inicio del Juicio de usucapión. Puede tratarse de parcelas urbanas, de Unidades en Propiedad Horizontal, parcelas rurales o bienes privados del Estado..",
    image: subdivision,
  },
  {
    id: 4,
    title:"Usucapión",
    description:"Relevamiento, confección de planos y registro ante los organismos que correspondan. Análisis de título de propiedad, verificación de datos catastrales y correspondiente colocación de mojones, en predios urbanos, suburbanos y rurales, individuales, o bien, en predios surgentes de unificaciones con redistribución parcelaria, fraccionamiento o loteo.",
    image: usucapion,
  },
  {
    id: 5,
    title:`Proyecto  de Loteos`,
    description:"Mensura, estudio y proyecto, confección, registro y aprobación de planos de loteos, para urbanizaciones, clubes de campo, etc.",
    image: feature_1_2,
  },
  {
    id: 6,
    title:"Estado Parcelario",
    description:"Parcelario para actualización del estado de hecho del inmueble, urbano o rural, con relación al título de propiedad o la posesión ejercida, desde el punto de vista físico, económico y jurídico..",
    image: feature_1,
  }
]

export default function Services() {
  


  return (
    <div id="servicios">
      <h2>• SERVICIOS •</h2>
      <div className="a-container">
        {
          servicios.map(services =>(
            <ServicesBox src={services.image} title={services.title} description={services.description} id={services.id} />
          ))
        }
      </div>
    </div>
  );
}
