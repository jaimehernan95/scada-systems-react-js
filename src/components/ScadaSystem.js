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
import { Button, Container, Row, Col } from "reactstrap";

// Header and Footer
import FooterPage from 'components/FooterPage';
import IndexNavbar from 'components/Navbars/IndexNavbar';

// core components

function ScadaSystems () {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
     <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
     <IndexNavbar></IndexNavbar>
     <br /> 

    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white" align="center"> <b>Sistemas SCADA para Agua y Medio Ambiente</b> </h2>
                    <br />
                    <h4 align="justify">APR CONTROL ofrece soluciones integrales de Sistemas de Supervisory Control And Data Acquisition (SCADA) para monitorear, controlar y supervisar en tiempo real  las diversas variables físicas a través de los sensores y/o transductores del proceso en forma remota con la mínima intervención humana.
                        Contamos con experiencia en implantación, desarrollo, puesta en marcha y mantenimiento de sistemas SCADA Oasys en las plataformas de Unix y Windows para los sectores de:
                        Agua
                        Medio Ambiente
                        Energía
                    </h4>
                    <br />
                    <h4 align="justify"> Para mayor información al respecto, favor de contactarse con nosotros, gustosamente les atenderemos.</h4> 
            </div>

        </Container>
    </div>
    </div>
            {/* From here start the pictures */}
    
      <div className="section section-primary">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/scada/scada1.png")}
                  style={{ width: "100%" }}
                />
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
             
              >
                Arquitectura general de sistemas SCADA.
              </Button>
            </Col>

            
      
            <Col className="text-center" md="6">
              
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/scada/scada.png")}
                  style={{ width: "100%" }}
                />
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
              
              >
                Arquitectura general de sistemas SCADA.
              </Button>
            </Col>

          </Row>
        </Container>
      </div>{" "}
      <FooterPage></FooterPage>
    </>
  );
}

export default ScadaSystems;
