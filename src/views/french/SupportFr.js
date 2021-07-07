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

function SupportFr() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Technique de support et maintenance</h2>
                    <br />
                    <h5>
                    APR CONTROL SRL, vous proposez ses services professionnels d'assistance technique et de maintenance intégrale spécialisée qui garantissent le fonctionnement optimal de l'équipement et donc de maximiser la disponibilité du système. Les services offerts sont énumérés ci-dessous:
                    </h5>
                    <br />
                    <ul>
                        <li><h5> Support technique spécialisé permanent pour les systèmes SCADA </h5></li>
                        <li><h5> Maintenance préventive et corrective des systèmes SCADA </h5></li>
                        <li><h5> Maintenance préventive et corrective des panneaux de contrôle avec automatates programmables</h5></li>
                        <li><h5> 
                        Maintenance préventive et corrective Réseaux de stations hydrométriques, carte et hydrométéorologiques automatiques avec technologies de communication radiales, cellulaires et par satellite.
                          </h5></li>
                        <li><h5> Maintenance radio préventive et corrective des liaisons radio UHF </h5></li>
                        <li><h5> Maintenance préventive et corrective des stations terriennes de satellite Goes </h5></li>
                        <li><h5> 
                        Maintenance préventive et corrective des stations de surveillance et de contrôle par satellite Inmarsat avec technologie BGAN
                          </h5></li>
                        <li><h5> 
                        Calibración, configuración y puesta en marcha de sensores de nivel, caudal, aporación, temperatura, presión atmosférica, radiación solar, etc.
                          </h5></li>
                    </ul>
   
            </div>
        </Container>
    </div>
    </div>
    <FrenchFooterPage></FrenchFooterPage>

    </>
  );
}

export default SupportFr;
