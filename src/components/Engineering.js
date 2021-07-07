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

import { Container} from "reactstrap";

// core components

function Engineering() {
  return (
    <>
         <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white" align="center"> <b>Servicios de Ingeniería</b> </h2>
                    <br />
                    <h4 align="justify">APR CONTROL SRL, ofrece sus servicios integrales de ingeniería desde la ingeniería básica, ingeniería de detalle, suministro de equipamiento, instalación, configuración, programación y puesta en marcha del proyecto en las áreas de:
                    </h4>
                    <br />
                    <ul> 
                        <li><h4>Estaciones Hidrométricas y Meteorológicas Automáticas</h4></li>
                        <li><h4>Automatización de Procesos Industriales y Sistemas SCADA</h4></li>
                        <li><h4>Telecontrol y Telemetría</h4></li>
                        <li><h4>Estudios de Radio propagación o Línea de Vista (Pathloss)</h4></li>
                        <li><h4>Sistemas fotovoltaicos Domiciliarios (SFVD) e Industriales</h4></li>
                    </ul>
   
            </div>
        </Container>
    </div>
    
    </div>
    <FooterPage></FooterPage>

    </>
  );
}

export default Engineering;
