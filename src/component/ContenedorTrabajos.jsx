import React from "react";
import Trabajos from "./Trabajos";
import Trabajosimgder from "./TrabajosImgder";
import aboutImage from "../images/agrimensor1.jpg"
import aboutImage2 from "../images/agrimensor2.jpg"
import aboutImage3 from "../images/agrimensor3.jpg"
import aboutImage4 from "../images/agrimensor4.jpg"



export default function ContenedorTrabajos(props) {
  return (
  <div id="container-trabajos">
     <Trabajos src={aboutImage} title="¿Porque contratar un agrimensor?" descripcion=" Gracias a la mensura y la verificación de la ubicación del lote en donde se va a edificar, por ejemplo, se está garantizando la seguridad jurídica y física del lugar donde se encuentra emplazada"/>
      <Trabajosimgder src={aboutImage2} title="¿Cuándo llamamos a un agrimensor?"  descripcion="Siempre que pensamos en construir, ya sea una casa unifamiliar o una vivienda colectiva, por lo general lo primero que se nos viene a la mente es la consulta y posterior contratación de un profesional de la construcción, llámese Técnico Constructor, Maestro Mayor de Obras, Arquitecto o Ingeniero Civil, y difícilmente llamamos a un profesional de la Agrimensura, esta situación se produce porque en un primer momento pensamos en el proyecto y no donde está emplazado. Esta realidad me ha llevado a pensar en donde estamos posicionados los Agrimensores, no solo en una transmisión de dominio, sino antes y durante la ejecución de una vivienda. "/>
     <Trabajos src={aboutImage3} title="¿Qué hace exactamente un agrimensor?" descripcion="El Profesional de la Agrimensura es quien resuelve la aplicación territorial del Derecho que corresponda, mediante la mensura.

El agrimensor es el que realiza actividades referidas a la ubicación, identificación, delimitación, mensura, aplicación territorial del derecho, medición, de la propiedad inmueble y de objetos territoriales; la ubicación, replanteo y control geométrico de obras; la certificación y registración del estado parcelario y la organización del catastros; la confección de cartografía; la ordenación, planificación y administración del territorio entre otras actividades."/>
      <Trabajosimgder src={aboutImage4} title="Evitar problemas vecinales"  descripcion=" En la vida cotidiana es muy común que existan problemas con nuestros vecinos debido a discrepancias en relación a los límites de cada una de las propiedades. Ya sea porque nosotros quisiéramos ampliar nuestra propiedad o si nuestro vecino hace lo propio, es fundamental contar con la ayuda de un agrimensor calificado que pueda mensurar los límites de las mismas. Desarticulando de está manera el conflicto vecinal."/>
    </div>
  );
}
