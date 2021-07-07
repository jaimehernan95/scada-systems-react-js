/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// Header and Footer
import FooterPage from 'components/FooterPage';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import HydrometeorologyPictures from 'components/HydrometeorologyPictures';

// reactstrap components


import {

  Container,

} from "reactstrap";


const Hydrometeorology = () => {

  return (
    <>
    
     <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/mountainperu.jpeg") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <Container>
              
              <div id="images">
                <div className="title"  >
                  <br />
                  
                  <h2 className="title" align="center"> Hidrometeorología</h2>
                    <br />
                    <h4 align="justify">La Hidrometeorología es la ciencia que estudia el ciclo del agua en la naturaleza. Abarca el estudio de las fases atmosférica (evaporación, condensación y precipitación) y terrestre (intercepción de la lluvia, infiltración y derramamiento superficial) del ciclo hidrológico y especialmente de sus interrelaciones. Comprende la observación, procesamiento y análisis del comportamiento de los elementos hídricos, fundamentalmente las descargas de los ríos y los volúmenes almacenados en embalses naturales y artificiales así como de los factores meteorológicos.
                    </h4>
                    <br />
                    <h4 align="justify"> El desarrollo de esta ciencia ayuda a la comprensión de los fenómenos hidrometeorológicos, así como el desarrollo de sistemas y herramientas hidrometeorológicas que vienen siendo cada día más utilizadas en la observación, predicción, modelización, prevención y alerta temprana, en las áreas de control de inundaciones y aplicaciones específicas para el control y gestión de embalses y ríos.Una estación meteorológica es una instalación destinada a medir y registrar regularmente diversas variables meteorológicas como:
                    </h4> 
                    <br />
                    <h4 align="justify">Precipitación, Velocidad y dirección del Viento, Temperatura del aire, Humedad Relativa del aire, Presión Atmosférica Radiación Solar y Evaporación
                    </h4>
                    <br />
                    <h4 align="justify">Estos datos se utilizan tanto para la elaboración de predicciones meteorológicas a partir de modelos numéricos como para estudios climáticos.  
                    Una estación hidrométrica es el lugar de observación en la cual se obtienen datos sobre el agua de ríos, lagos o embalses.
                    Una red de estaciones HIDROMETEOROLOGICAS está compuesta por un grupo de estaciones  meteorológicas y/o hidrométricas dispuestas de manera tal que permiten recolectar información de una zona de interés, como una cuenca hidrográfica, una ciudad, o un país. La ubicación de las estaciones se determina para cubrir criterios de representatividad de los datos, accesibilidad, seguridad, disponibilidad y entre otros criterios de acuerdo al alcance del proyecto.
                    </h4>
                    <br />
                    <h4 align="justify">APR CONTROL SRL cuenta con un Know-How de 10 años de experiencia en la implementación, instalación y montaje e integración de soluciones de redes de estaciones Hidrometeorológicas de acuerdo a normas y recomendaciones del Organización Meteorológica Mundial (OMM), desde los sensores, datalogger o PLCs, telemetría con tecnología radial, celular y satelital, almacenamiento y el software necesario para la administración, gestión y explotación de la información, así como su divulgación a través de HMI SCADA, servidores web, correo electrónico, etc. Contamos con experiencia en implementación integral de redes Hidrometeorológicas desde la etapa de estudio preliminar pasando por construcción de la infraestructura civil,  instalación y  puesta en marcha, hasta la operación y mantenimiento. 
                    </h4>

                    <br />
                    <h4 align="justify">A continuación mostramos una galería fotográfica de la red de 32 estaciones Hidrometeorológicas implementada por APR CONTROL SRL para Electroperu S.A, conformadas por estaciones meteorológicas, hidrométricas y pluviométricas  automáticas a lo largo de la cuenca del Mantaro desde la naciente de LAGO JUNIN hasta las proximidades aguas arriba de la Represa de Tablachaca.
                    </h4>
                    </div>
                    <HydrometeorologyPictures></HydrometeorologyPictures>
                </div>

                <div className="moving-clouds" style={{backgroundImage: "url(" + require("assets/img/clouds.png") + ")"}}/>
            </Container>
        </div>
        <FooterPage></FooterPage>
    </>
  );
}

export default Hydrometeorology;
