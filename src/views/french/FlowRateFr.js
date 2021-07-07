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

function FlowRateFr() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate1.jpeg") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Débit</h2>
                    <br />
                    <h4>
                    APR CONTROL SRL offre un service de qualité dans la mesure de débit (jaugeage) pour les entreprises publiques ou privées des secteurs de l'énergie, des mines, de l'eau et de l'environnement qui nécessitent de déterminer le débit ou le débit qui traverse une certaine section d'une rivière en un instant en unités de volume en m3 / sec.
                    </h4>
                    <br />
                    <h4>
                    APR CONTROL SRL offre un service de qualité dans la mesure de débit (jaugeage) pour les entreprises publiques ou privées des secteurs de l'énergie, des mines, de l'eau et de l'environnement qui nécessitent de déterminer le débit ou le débit qui traverse une certaine section d'une rivière en un instant en unités de volume en m3 / sec.
                    </h4>
                    <br/>
                    <h4>
                    Pour effectuer la mesure de vitesse, nous utilisons un compteur de courant SEBA-F-784. Les mesures de vitesse seront prises simultanément avec les mesures de profondeur. Après avoir déterminé les profondeurs dans chaque section, les vitesses à 0,2 h et 0,8 h du fond (lit) sont mesurées, un critère qui est également utilisé pour des profondeurs supérieures à 0,6 mètre. À des profondeurs inférieures ou égales à 0,6 mètre, la vitesse sera mesurée à 0,4 h du fond.
                    </h4>
                    <br />
                    <h4>
                    Où le débit total de la section de contrôle de la rivière sera donné par la somme partielle des zones x vitesse. Q = A1xV1 + A2xV2 + A3xV3 +. . . .
                    Q est le débit, A est l'aire de la section transversale en un point du trajet de l'écoulement et v est la vitesse du liquide à ce point.
                    </h4>
                    <br />
                    <h4>
                    Ci-dessous, des photographies des campagnes de mesures hydrométriques (jaugeage) effectuées à certains moments de l'avenue du bassin de la rivière Mantaro depuis sa source, située dans le lac Junín à plus de 4000 m d'altitude (barrage d'Upamayo) jusqu'à la station hydrographique de Elles étaient situées en aval de la Centrale hydroélectrique de Mantaro.
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
              <a href="examples/landing.html" >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/aforo/currentdiagram.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Somme du débit de la rivière Q = A1 × V1 + A2 × V2. . .</b></h4>

            </Col>

            
      
            <Col className="text-center" md="6">
              <a href="examples/landing.html" >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/aforo/cctv.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Débit</b></h4>

 
            </Col>

            <Col className="text-center" md="6">
              <a href="examples/landing.html" >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/aforo/aforo1.jpg")}
                  style={{ width: "100%" }}
                />
              </a>

              <h4><b>Mesures hydrométriques, bassin de la rivière Mantaro - 4000 MAMSL (barrage d'Upamayo) - Junin, Pérou</b></h4>

            </Col>

            <Col className="text-center" md="6">
              <a href="examples/landing.html" >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/aforo/aforo2.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Station hydrographique de Colcabamba - Lac Junin, Pérou</b></h4>
            </Col>

          </Row>
        </Container>
      </div>{" "}
      <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default FlowRateFr;
