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
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';

// reactstrap components
import {  Container } from "reactstrap";


// core components

function SupportEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Technical Support and Maintenance </h2>
                    <br />
                    <h4>
                    APR CONTROL SRL, offers its professional services of technical support and specialized integral maintenance that will allow you to guarantee the optimal operation of the equipment and therefore maximize the availability of the system. The services offered are listed below:
                    </h4>
                    <br />
                    <ul>
                        <li><h4> Permanent specialized technical support for SCADA Systems </h4></li>
                        <li><h4> Preventive and corrective maintenance of SCADA Systems </h4></li>
                        <li><h4> Preventive and corrective maintenance of control panels with PLCs</h4></li>
                        <li><h4> 
                        Preventive and corrective maintenance Automatic Hydrometric, Meteorological and Hydrometeorological station networks with radial, cellular and satellite communication technologies.
                          </h4></li>
                        <li><h4> Preventive and corrective maintenance of UHF Radio Links </h4></li>
                        <li><h4> Preventive and corrective maintenance of Goes Satellite Earth Stations</h4></li>
                        <li><h4> 
                        Preventive and corrective maintenance of Inmarsat Satellite Supervision and Control Stations with BGAN technology 
                          </h4></li>
                        <li><h4> Calibración, configuración y puesta en marcha de sensores de nivel, caudal, evaporación, temperatura, presión atmosférica, radiación solar, etc.
                          </h4></li>
                    </ul>
   
            </div>
        </Container>
    </div>
    </div>
    <EnglishFooterPage></EnglishFooterPage>

    </>
  );
}

export default SupportEn;
