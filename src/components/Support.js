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

// reactstrap components
import {  Container } from "reactstrap";


// core components

function Support() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Soporte Técnico y Mantenimiento </h2>
                    <br />
                    <h4>APR CONTROL SRL, ofrece sus servicios profesionales de soporte técnico y mantenimiento integral especializado que le permitirá garantizar el funcionamiento óptimo de los equipos y por ende maximizar la disponibilidad del sistema. A continuación se citan los servicios ofrecidos:
                    </h4>
                    <br />
                    <ul>
                        <li><h4> Soporte técnico especializado permanente de Sistemas SCADA</h4></li>
                        <li><h4> Mantenimiento preventivo y correctivo de Sistemas SCADA</h4></li>
                        <li><h4> Mantenimiento preventivo y correctivo de tableros de control con PLCs</h4></li>
                        <li><h4> Mantenimiento preventivo y correctivo Redes de estaciones Hidrométricas, Meteorológicas e Hidrometeorológicas automáticas con tecnologías de comunicaciones radial, celular y satelital.</h4></li>
                        <li><h4> Mantenimiento preventivo y correctivo de Enlaces de radio UHF</h4></li>
                        <li><h4> Mantenimiento preventivo y correctivo de Estaciones terrenas Satelitales Goes</h4></li>
                        <li><h4> Mantenimiento preventivo y correctivo de Estaciones de Supervisión y Control satelital  Inmarsat con tecnología BGAN</h4></li>
                        <li><h4> Calibración, configuración y puesta en marcha de sensores de nivel, caudal, evaporación, temperatura, presión atmosférica, radiación solar, etc.</h4></li>
                    </ul>
   
            </div>
        </Container>
    </div>
    </div>
    <FooterPage></FooterPage>

    </>
  );
}

export default Support;
