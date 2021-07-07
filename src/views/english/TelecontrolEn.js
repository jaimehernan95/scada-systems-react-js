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
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';


// core components

function TelecontrolEn () {
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
     <EnglishNavBar></EnglishNavBar>
     <br /> 
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white" > Satellite Based and Remote Monitoring </h2>
                    <br />
                    <h4>
                    Today, companies increasingly require remote control in a safe, direct, and real-time manner of the operation of their processes and facilities whenever remote stations are widely dispersed geographically and without coverage of the cell phone network. The real-time satellite remote control solution allows obtaining data from various sensors and alarms on the state of the facilities.
                    </h4>
                    <br />
                    <h4 align="justify">
                    One of the advantages of the remote control is that engineers or plant managers can have effective control of their facilities and make the right decisions in real-time, saving the cost of moving technical personnel to remote stations.
                    APR CONTROL SRL has 10 years of experience developing radio and satellite remote control solutions for the most demanding requirements of our clients, correctly selecting the control, automation, and telecommunications equipment for optimal integration between the Remote Stations and the Control Center.
                    Typical applications in dams, pumping wells, Hydrometeorological stations, and remote station security systems.
                    </h4>
                    <br />
                    <h4 align="justify">
                    Opening/closing dams to regulate dams,
                    Enabling video surveillance system,
                    Valve opening and closing,
                    Start and stop of pumps and
                    Hydrometeorological stations.
                    </h4>
                    <br />
                    <h4>Other variants of the various remote control applications:</h4> 
            </div>

            <div className="title"  >
                <h2 class="p-3 mb-2 bg-success text-white">  Sistemas de telecontrol Celular  </h2>
                    <br />
                    <h4 align="justify">
                    This type of telemetry and cellular remote control solution uses the GPRS service provided by mobile phone companies. The communication system is through the Internet and each Remote Station transmits by this means periodically to the SCADA system server of the Control Center the information of the data from the sensors of the remote stations. This type of communication is applicable where there is coverage of the GSM / GPRS technology cell phone network.
                    </h4>
                    <h4 align="justify">
                    GPRS modems have recorded a fixed Internet IP address (Public IP) to which they will connect using the TCP / IP protocol. Once the communication channel between the remote station, the mobile service provider, and the SCADA System server (who will have the Fixed Public Internet IP associated) is established, the data exchange begins. Then, they are stored in a historical database, for later consultation and exploitation.
                    </h4>
              <br />
            </div>

            <div className="title"  >
                <h2 class="p-3 mb-2 bg-success text-white">  Remote Monitoring System  </h2>
                    <br />
                    <h4 align="justify">
                    In this type of solution the measurement and control stations are interrogated sequentially by the supervision and control station. The supervision and control station establishes automatic communication and at the request of the control center user to obtain data from the sensors or send a command to the measurement and control stations.
                    The SatSCADA Platform is an end to end satellite-based remote monitoring platform operating on the Inmarsat Satellite Network connected to the powerful SatSCADA Server.
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
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/satelital.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Telecontrol and satellite telemetry architecture</b></h4>
 
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
              <h4><b>Radial and Satellite remote control systems</b></h4>
 
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
              <h4><b>Radial and Satellite remote control systems</b></h4>

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
              <h4><b>UHF Radio Communication</b></h4>
             </Col>

          </Row>
        </Container>
      </div>{" "}
      <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default TelecontrolEn;
