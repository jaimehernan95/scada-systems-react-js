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

function Telemetry () {
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
            style={{ backgroundImage: "url(" + require("assets/img/background/satellite.jpg") + ")" }} > 
     <IndexNavbar></IndexNavbar>
     <br />  
     
    

    <div id="images">
        <Container>
            <div className="title"  >
                <h2 className="description" align="center"><b>Telemetría</b> </h2>
                    <br />
                    <h4 align="justify"> La telemetría es una tecnología que permite la medición remota de magnitudes físicas y el posterior envío de la información generada en la medición hacia el centro de recepción y procesamiento de datos o sistema de alerta o sistemas SCADA, dependiendo de la aplicación de la implementación del proyecto.
                    </h4>
                      <br />
                      <h4 align="justify">
                      El envío de la información hacia el sistema SCADA o centro de recepción de datos, se realiza típicamente mediante la comunicación inalámbrica y/o  la comunicación alámbrica. 
                      Dependiendo de la tecnología disponible en el lugar, factibilidad de acceso a redes de telefonía fija o móvil, volumen de información a transportar, distancia del enlace y de los costos de operación y mantenimiento, etc.
                      </h4>
                      <br />
                      <h4 align="justify">
                      La red de telemetría se puede implementar con diferentes tecnologías y canales de comunicación, entre ellos tenemos: Línea telefónica, Enlaces Satelitales,
                Red celular (GSM/GPRS), Ethernet con protocolo TCP / IP, Radio Modem Espectro Disperso, Radio Modem Frecuencia Licenciada, Micro ondas, Fibra Óptica, Wifi, Zigbee y Wimax.
                    </h4>
              <br />
            </div>


            <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
            
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
                  src={require("assets/img/telemetry/celular3.jpg")}
                  style={{ width: "100%" }}
                />
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                
              >
                Aquitectura de Comunicacion de Telemetria
              </Button>
            </Col>
            <Col className="text-center" md="6">
              
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telemetry/radio.png")}
             
                  style={{ width: "100%" }}
                />
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                
              >
                Telemetria via Radio Modem Local y Telecontrol Satelital NERa Inmarsat Mini M
              </Button>
            </Col>

            <Col className="text-center" md="6">
              
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telemetry/celular.png")}
                  style={{ width: "100%" }}
                />
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                
              >
                Aquitectura de Comunicacion de Telemetria
              </Button>
            </Col>

            <Col className="text-center" md="6">
              
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telemetry/UHF.png")}
                  style={{ width: "100%" }}
                />
              
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                
              >
                Comunicacion Radial UHF
              </Button>
            </Col>

          </Row>
        </Container>
      </div>{" "}
     <FooterPage></FooterPage>
      
    </>
  );
}

export default Telemetry;
