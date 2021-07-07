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

function ConsultingEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/scada.jpg") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
            
            <div id="images">
                <Container>
                  <div className="title"  >
                      <h2 class="p-3 mb-2 bg-info text-white"> Consulting </h2>
                          <br />
                          <h4>APR CONTROL SRL offers its consulting services from the study of the project profile to the preparation of the technical file in the areas of:
                          </h4>
                          <br />
                          <ul>
                              <li><h4> SCADA systems </h4></li>
                              <li><h4>Telemetry and Telecontrol automation</h4></li>
                              <li><h4>Radio propagation studies or Line of Sight (Pathloss)</h4></li>
                              <li><h4>Automatic Hydrometric, Meteorological and Hydrometeorological Station Networks with radial, cellular and satellite communication technologies.
                                </h4></li>
                              <li><h4>Residential Photovoltaic Systems (SFVD) and Industrial.</h4></li>.
                          </ul>
        
                  </div>
              </Container>
          </div>
        </div>
        <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default ConsultingEn;
