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
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';

// reactstrap components
import {  Container } from "reactstrap";

// core components

function ConsultingFr() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/scada.jpg") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />  <br />
            
            <div id="images">
                <Container>
                  <div className="title"  >
                      <h2 class="p-3 mb-2 bg-info text-white"> Services de consultation  </h2>
                          <br />
                          <h4>APR CONTROL SRL propose ses services de conseil depuis l'étude du profil du projet jusqu'à la préparation du dossier technique dans les domaines de:
                          </h4>
                          <br />
                          <ul>
                              <li><h4> Systèmes SCADA </h4></li>
                              <li><h4>Télémétrie et automatisation Telecontrol</h4></li>
                              <li><h4>Études de propagation radio ou ligne de visée (Pathloss)</h4></li>
                              <li><h4>Réseaux de stations hydrométriques, météorologiques et hydrométéorologiques automatiques avec technologies de communication radiales, cellulaires et par satellite.
                                </h4></li>
                              <li><h4>Systèmes photovoltaïques résidentiels (SFVD) et industriels.</h4></li>.
                          </ul>
        
                  </div>
              </Container>
          </div>
        </div>
        <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default ConsultingFr;
