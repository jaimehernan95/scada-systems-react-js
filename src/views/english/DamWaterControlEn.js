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
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function DamWaterControlEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate2.jpeg") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-2 mb-2 bg-info text-white"> Dams and Flood Control Service</h2>
                    <br />
                    <h4 align="justify">
                    APR CONTROL S.R.L offers a quality service in the hydraulic controls of regulation dams for the energy, mining, water, and environmental sectors. Our professionals have extensive experience in the execution of services of:
                    </h4>
                    <br />
                    <ul>
                        <li><h4>Topographic control of leveling and precision alignment in regulation dams.</h4></li>
                        <li><h4>Control of piezometers installed in the Regulation Dam</h4></li>
                        <li><h4>Control of the triangular landfill installed downstream of the Regulation Dams.</h4></li>
                    </ul>
                    <br />
                    <h4> We have calibrated topographic measurement equipment that is certified up to date </h4> 
                    <br />
                    <h4>
                    Below are photographs of the technical and hydraulic control campaigns carried out on dams located in the upper Mantaro basin.
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
              <h4><b>Piezometer Monitoring</b></h4>

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
              <h4><b>Rockfill Dam Settlements Control</b></h4>

            </Col>

            
             

          </Row>
        </Container>
      </div>{" "}
      <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default DamWaterControlEn;
