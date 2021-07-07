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
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';

// core components

function TelemetryFr() {
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
     <FrenchNavBar></FrenchNavBar>
     <br />  
     
    

    <div id="images">
        <Container>
            <div className="title"  >
                <h2 className="description">Télémétrie </h2>
                    <br />
                    <h4> 
                    La télémétrie est une technologie qui permet la mesure à distance des grandeurs physiques et l'envoi ultérieur des informations générées dans la mesure au centre de réception et de traitement des données ou au système d'alerte ou aux systèmes SCADA, en fonction de l'application de la mise en œuvre du projet.
                    </h4>
                      <br />
                      <h4>
                      L'envoi d'informations au système SCADA ou au centre de réception de données s'effectue généralement par communication sans fil et / ou par câble.
                      En fonction de la technologie disponible sur place, de la faisabilité de l'accès aux réseaux téléphoniques fixes ou mobiles, du volume d'informations à transporter, de la distance de la liaison et des coûts d'exploitation et de maintenance, etc.
                      </h4>
                      <br />
                      <h4>
                      Le réseau de télémétrie peut être mis en œuvre avec différentes technologies et canaux de communication, parmi lesquels nous avons une ligne téléphonique, des liaisons par satellite,
                      Réseau cellulaire (GSM / GPRS), Ethernet avec protocole TCP / IP, modem radio à spectre dispersé, modem radio à fréquence sous licence, micro-ondes, fibre optique, Wifi, Zigbee et Wimax.
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
                Architecture de communication de télémétrie
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
                Télémétrie via modem radio local et télécontrôle par satellite NERa Inmarsat Mini M
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
                Architecture de communication de télémétrie
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
                Communication radio UHF
              </Button>
            </Col>

          </Row>
        </Container>
      </div>{" "}
     <FrenchFooterPage></FrenchFooterPage>
      
    </>
  );
}

export default TelemetryFr;
