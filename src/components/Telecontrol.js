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
import { Container, Row, Col } from "reactstrap";

// Header and Footer
import FooterPage from 'components/FooterPage';
import IndexNavbar from 'components/Navbars/IndexNavbar';

// core components

function Telecontrol () {
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
   document.documentElement.classList.remove("nav-open");
   React.useEffect(() => {
     document.body.classList.add("landing-page");
     return function cleanup() {
       document.body.classList.remove("landing-page");
     };
   });

  return (
    <>
        <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/antena.jpg") + ")" }} > 
     <IndexNavbar></IndexNavbar>
     <br /> 
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white" align="center"><b>Telecontrol Satelital</b> </h2>
                    <br />
                    <h4 align="justify">En la actualidad las empresas requieren cada vez más controlar remotamente de manera segura, directa y en tiempo real el funcionamiento de sus procesos e instalaciones cada vez que las estaciones remotas se encuentran muy dispersas geográficamente y sin cobertura de la red de telefonía celular.
                    La solución de  telecontrol satelital en tiempo real permite obtener datos de diversos sensores y alarmas sobre el estado de las instalaciones.  
                    </h4>
                    <br />
                    <h4 align="justify">
                    Una de las ventajas que brinda el telecontrol es que  Ingenieros o responsables de las plantas pueden  tener el control eficaz  de sus instalaciones y tomar las decisiones correctas en tiempo real, ahorrando costos de desplazamiento de personal técnico a las estaciones remotas.
                    APR CONTROL S.R.L cuenta con 10 años de experiencia desarrollando soluciones de telecontrol radial y satelital de los requerimientos más exigentes de nuestros clientes, seleccionando de manera correcta los equipos de control, automatización y telecomunicaciones para la óptima integración entre las Estaciones Remotas y el Centro de Control.
                    Aplicaciones típicas en represas, pozos de bombeo, estaciones Hidrometeorológicas y sistemas de seguridad de estaciones remotas.
                    </h4>
                    <br />
                    <h4 align="justify">
                    Apertura/cierre de compuertas de regulación  de Represas,
                    Habilitación de sistema de video vigilancia,
                    Apertura y cierre de válvulas,
                    Arranque y parada de bombas y
                    Estaciones Hidrometeorológicas.
                    </h4>
                    <br />
                    <h4 align="justify">Otras variantes de las diversas aplicaciones de telecontrol:</h4> 
            </div>

            <div className="title"  >
                <h2 class="p-3 mb-2 bg-success text-white">  Sistemas de telecontrol Celular  </h2>
                    <br />
                    <h4 align="justify">Este tipo de solución de telemetría y telecontrol celular utiliza el servicio de GPRS que disponen las empresas de telefonía móvil. El sistema de comunicación es a través de Internet y cada Estación Remota transmite por ese medio en forma periódica al servidor del sistema SCADA del Centro de Control la información de los datos de los sensores de las estaciones remotas. Este tipo de comunicación es aplicable donde exista cobertura de la red de telefonía celular de tecnología GSM/GPRS.
                    Los módem GPRS tienen grabados una dirección IP de Internet fija (IP Pública) a la que se conectarán mediante el protocolo TCP/IP. Una vez establecido el canal de comunicación entre la estación remota, el proveedor del servicio móvil y el servidor del Sistema SCADA (quien tendrá asociada la IP Pública Fija de Internet), comienza el intercambio de datos. Luego, los mismos se almacenan en una base de datos historical, para su posterior consulta y explotación.
                    </h4>
              <br />
            </div>

            <div className="title"  >
                <h2 class="p-3 mb-2 bg-success text-white">  Sistemas de telecontrol Radial y Satelital  </h2>
                    <br />
                    <h4 align="justify">En este tipo de solución las estaciones de medición y control son interrogadas secuencialmente por la estación de supervisión y control.  A su vez la estación de supervisión y control establece comunicación automática y a petición del usuario del centro de control para obtener datos de los sensores o enviar un mando a las estaciones de medición y control.
                    </h4>
              <br />
            </div>

        </Container>
    </div>
    </div>
            {/* From here start the pictures */}
    
      <div className="section section-primary">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a>
                <img
                  alt="satelital"
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/satelital.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b> Arquitectura de Telecontrol y Telemetría satelital</b></h4>

            </Col>
            <Col className="text-center" md="6">
              <a>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/radial.png")}
             
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Sistemas de telecontrol Radial y Satelital </b></h4>
              
            </Col>

            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/gprs.png")}
                  style={{ width: "100%" }}
                />
              </a>

              <h4><b>Aquitectura de Comunicacion de Telemetria</b></h4>

            </Col>

            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/controlsat.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Comunicacion Radial UHF</b></h4>
            </Col>

          </Row>
        </Container>
      </div>{" "}
      <FooterPage></FooterPage>
    </>
  );
}

export default Telecontrol;
