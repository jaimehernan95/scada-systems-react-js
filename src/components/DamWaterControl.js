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

function DamWaterControl() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate2.jpeg") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-2 mb-2 bg-info text-white"> Servicio de Controles Hidráulicos de Represas </h2>
                    <br />
                    <h4>APR CONTROL S.R.L ofrece un servicio de calidad en los controles hidráulicos de Presas de regulación para el sector de energía, minería, agua y medio ambiente.
                        Nuestros profesionales cuentan con amplia experiencia en la ejecución de servicios de:
                    </h4>
                    <br />
                    <ul>
                        <li><h4>Control  topográfico de nivelación y alineamiento de precisión en Presas de regulación.</h4></li>
                        <li><h4>Control de piezómetros instalados en la Presa de Regulación</h4></li>
                        <li><h4>Control del vertedor triangular instalado aguas abajo de las Presas de Regulación.</h4></li>
                    </ul>
                    <br />
                    <h4> Contamos con equipos de medición topográfica debidamente calibrados con certificados vigentes. </h4> 
                    <br />
                    <h4>A Continuación se muestran fotografías de las campañas de controles técnicos e hidráulicos realizados en represas ubicadas en la cuenca alta del Mantaro. 
                    </h4> 
            </div>

        </Container>
        <div className="moving-clouds" style={{backgroundImage: "url(" + require("assets/img/clouds.png") + ")"}}/>
    </div>
    </div>
            {/* From here start the pictures */}
    
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/dumcontrol/control1.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Control de Piezómetro</b></h4>
 
            </Col>
            <Col className="text-center" md="6">
              <a>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/dumcontrol/control2.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Control de Asentamiento</b></h4>

            </Col>

          </Row>
        </Container>
      </div>{" "}
      <FooterPage></FooterPage>
    </>
  );
}

export default DamWaterControl;
