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
import { Container, Row, Col } from "reactstrap";

// core components

function FlowRate() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate1.jpeg") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Servicio de Medición de Caudales (AFOROS) </h2>
                    <br />
                    <h4>APR CONTROL S.R.L ofrece un servicio de calidad en la medición de caudales (aforos) para las empresas públicas o privadas del sector de energía, minería, agua y medio ambiente que requieran determinar el flujo o caudal que pasa por una determinada sección de un río en un instante cualquiera en unidades de volumen en m3/seg.
                    </h4>
                    <br />
                    <h4> Nuestros técnicos hidrometrías cuentan con más de 20 años de experiencia realizando aforos en las cuencas importantes de Perú, como la cuenca del Mantaro y del Marañón.
                        Aplicando el método de vadeo en ríos poco profundas, donde la corriente de la sección transversal presenta velocidades bajas, no tan fuertes que pueda arrastrar al equipo de aforo (vara de vadeo, molinete). Asimismo la realización de aforos por el método de  carril huaro para ríos de mayor profundidad y donde la corriente de la sección transversal presenta mayores velocidades.
                    </h4>
                    <br/>
                    <h4>
                    Para realizar la medición de velocidad utilizamos un correntómetro SEBA-F-784. Las mediciones de velocidad se tomarán simultáneamente con las medidas de profundidad. Luego de determinar las profundidades en cada sección, se miden las velocidades a 0.2 h y 0.8 h desde el fondo (lecho), criterio que es igualmente utilizado para profundidades mayores a 0.6 metros.  A profundidades menores o iguales a 0.6 metros, la velocidad se medirá a 0.4 h desde el fondo. 
                    </h4>
                    <br />
                    <h4>
                    Donde el caudal total de la sección de control del rio estará dado por la sumatoria parcial delas áreas x velocidad. Q= A1 V1 + A2. V2 + A3. V3 + . . . .
                    </h4>
                    <br />
                    <h4>
                    A Continuación se muestran fotografías de las campañas de mediciones hidrométricas (aforos) realizadas en épocas de avenida para la cuenca del rio Mantaro desde la naciente del mismo, ubicado en el lago Junín a más de 4000 msnm (Represa Upamayo) hasta la estación Hidrográfica de Colcabanba aguas abajo de la Central hidroeléctrica del Mantaro.
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

              <h4><b>sumatoria parcial delas áreas x velocidad. Q = A1 V1 + A2. V2 + A3. V3 + . . .</b></h4>
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
              <h4><b>Medición de Caudales</b></h4>

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
              <h4><b>Mediciones hidrométricas, Cuenca del rio Mantaro - 4000 msnm (Represa Upamayo)- Junin, Peru</b></h4>
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

              <h4><b>Estación Hidrográfica de Colcabanba - Lago Junin, Peru</b></h4>

            </Col>

          </Row>
        </Container>
      </div>{" "}
      <FooterPage></FooterPage>
    </>
  );
}

export default FlowRate;
