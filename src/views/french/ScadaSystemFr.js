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

// reactstrap components
import { Container } from "reactstrap";

import ScadaSystemPictures from 'components/ScadaSystemPictures';

// Header and Footer
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';

// core components

const ScadaSystemsFr = () => {

  return (
    <>
     <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />
            <div id="images">
                <Container>
                  <div className="title"  >
                  <h2 class="p-3 mb-2 bg-info text-white"> Systèmes SCADA pour l'eau et l'environnement </h2>
                      <br />
                      <h4>
                      APR CONTROL propose des solutions complètes de systèmes de contrôle de supervision et d'acquisition de données (SCADA) pour surveiller, contrôler et superviser en temps réel les différentes variables physiques via des capteurs de processus et / ou des transducteurs à distance avec une intervention humaine minimale.
                      </h4>
                      <br />
                      <h4>
                      Nous avons une expérience dans l'implantation, le développement, le démarrage et la maintenance des systèmes SCADA Oasys sur les plates-formes Unix et Windows pour les secteurs de l'eau, de l'environnement et de l'énergie.
                      </h4>
                      <br />
                      <h4>
                      Pour plus d'informations à ce sujet, veuillez nous contacter, nous nous ferons un plaisir de vous aider.
                        </h4>
                        </div>
                        <br />
                        <br />
                        <ScadaSystemPictures></ScadaSystemPictures>
                  </Container>
                </div>
      </div>
      <FrenchFooterPage></FrenchFooterPage>
    </>
    );
  }
export default ScadaSystemsFr;
