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
import { Container, Row, Col } from "reactstrap";

// core components

function DamWaterControlFr() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate2.jpeg") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-2 mb-2 bg-info text-white">Barrages et service de contrôle des crues</h2>
                    <br />
                    <h4>
                    APR CONTROL S.R.L offre un service de qualité dans les commandes hydrauliques des barrages de régulation pour les secteurs de l'énergie, des mines, de l'eau et de l'environnement. Nos professionnels ont une vaste expérience dans l'exécution de services de:
                    </h4>
                    <br />
                    <ul>
                        <li><h4>Contrôle topographique du nivellement et de l'alignement de précision dans les barrages de régulation.</h4></li>
                        <li><h4>Contrôle des piézomètres installés dans le barrage de régulation</h4></li>
                        <li><h4>Contrôle de la décharge triangulaire installée en aval des barrages réglementaires.</h4></li>
                    </ul>
                    <br />
                    <h4> Nous avons un équipement de mesure topographique étalonné et certifié à jour</h4> 
                    <br />
                    <h4>
                    Ci-dessous, des photographies des campagnes de contrôle technique et hydraulique menées sur les barrages situés dans le bassin supérieur de Mantaro.
                    </h4> 
            </div>

        </Container>
    </div>
    </div>
            {/* From here start the pictures */}
    
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a  >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/dumcontrol/control1.png")}
                  style={{ width: "100%" }}
                />
              </a>

              <h4><b>Surveillance piézométrique</b></h4>
            </Col>
            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/dumcontrol/control2.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Surveillance piézométrique</b></h4>
            </Col>
          </Row>
        </Container>
      </div>{" "}
      <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default DamWaterControlFr;
