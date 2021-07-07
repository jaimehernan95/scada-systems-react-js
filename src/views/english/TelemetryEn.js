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
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';

// core components

function TelemetryEn() {
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
     <EnglishNavBar></EnglishNavBar>
     <br />  
     
    

    <div id="images">
        <Container>
            <div className="title"  >
                <h2 className="description">Telemetry </h2>
                    <br />
                    <h4 align="justify"> Telemetry is a technology that allows the remote measurement of physical quantities and the subsequent sending of the information generated in the measurement to the data reception and processing center or alert system or SCADA systems, depending on the application of the project implementation. 
                    </h4>
                      <br />
                      <h4 align="justify">
                      Sending information to the SCADA system or data reception centre is typically carried out using wireless communication and/or wired communication.
                      Depending on the technology available in the place, feasibility of access to fixed or mobile telephone networks, the volume of information to transport, distance from the link and the costs of operation and maintenance, etc.
                      </h4>
                      <br />
                      <h4 align="justify">
                      The telemetry network can be implemented with different technologies and communication channels, among them we have a Telephone line, Satellite Links,
                      Cellular network (GSM / GPRS), Ethernet with TCP / IP protocol, Scattered Spectrum Radio Modem, Licensed Frequency Radio Modem, Microwave, Fiber Optic, Wifi, Zigbee and Wimax.
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
                Telemetry Communication architecture
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
                Telemetry via Local Radio Modem and NERa Inmarsat Mini M Satellite Telecontrol
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
                Telemetry Communication Architecture
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
                UHF Radio Communication
              </Button>
            </Col>

          </Row>
        </Container>
      </div>{" "}
     <EnglishFooterPage></EnglishFooterPage>
      
    </>
  );
}

export default TelemetryEn;
