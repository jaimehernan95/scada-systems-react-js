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

function FlowRateEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate1.jpeg") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Flow Mesuarement </h2>
                    <br />
                    <h4 align="justify">
                    APR CONTROL SRL offers a quality service in flow measurement (gauging) for public or private companies in the energy, mining, water and environment sectors that require determining the flow or flow that passes through a certain section of a river in an instant in units of volume in m3 / sec.
                    </h4>
                    <br />
                    <h4 align="justify">
                    Our hydrometry technicians have more than 20 years of experience conducting gauging in the important basins of Peru, such as the Mantaro and Marañón basins. Applying the wading method in shallow rivers, where the cross-section current has low velocities, not so strong that it can drag the gauging equipment (wading stick, windlass). Likewise, gauging by the Huaro Lane method for rivers of greater depth and where the current of the cross-section presents higher speeds.
                    </h4 >
                    <br/>
                    <h4 align="justify">
                    To carry out the speed measurement, we use a SEBA-F-784 current meter. Speed measurements will be taken simultaneously with depth measurements. After determining the depths in each section, the velocities at 0.2 h and 0.8 h from the bottom (bed) are measured, a criterion that is also used for depths greater than 0.6 meters. At depths less than or equal to 0.6 meters, the speed will be measured at 0.4 h from the bottom.
                    </h4>
                    <br />
                    <h4 align="justify">
                    Where the total flow rate of the river control section will be given by the partial sum of the areas x speed. Q = A1xV1 + A2xV2 + A3xV3 +. . . .
                    Q is the flow rate, A is the cross-sectional area at a point in the path of the flow and v is the velocity of the liquid at that point.
                    </h4>
                    <br />
                    <h4 align="justify">
                    Below are photographs of the hydrometric measurement campaigns (gauging) carried out at times of avenue for the Mantaro River basin from its source, located in Lake Junín at more than 4,000 masl (Upamayo Dam) to the Hydrographic station of They were located downstream from the Mantaro Hydroelectric Power Plant.
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
              <h4><b>Sum of flow rate of the river Q = A1 × V1 +  A2 × V2. . .</b></h4>

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
              <h4><b>Flow Measurement</b></h4>

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

              <h4><b>Hydrometric measurements, Mantaro River Basin - 4000 MAMSL (Upamayo Dam) - Junin, Peru </b></h4>

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

              <h4><b>Colcabamba Hydrographic Station - Junin Lake, Peru</b></h4>
            </Col>

          </Row>
        </Container>
      </div>{" "}
      <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default FlowRateEn;
