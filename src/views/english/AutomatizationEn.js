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

function AutomatizationEn() {
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
            style={{ backgroundImage: "url(" + require("assets/img/ceo/antena.jpeg") + ")" }} > 
     <EnglishNavBar></EnglishNavBar>
     <br />
      <Container className="tim-container">
        
        
        
        <div id="images">
          <Container>
            <div className="title"  >
              <h2 class="p-3 mb-2 bg-info text-white"> Control System Automation - Industrial Control Systems‎</h2>
              <br />
              <h4 align="justify"> In an increasingly automated world, public and private companies need to automate their processes to increase their productivity by reducing costs, optimizing processes, maximizing profit, reducing production and delivery times, mass production, and generally achieve more efficient and competitive production.

              Our team of automation engineers has the knock how of 10 years of experience providing various automation solutions and integrating PLCs from the firms Omron, Schneider Electric, and Siemens in the most critical industrial processes in the water, energy, mining, and environment.
              </h4>
              <br />
            </div>
            
            <Row>
              <Col md="3" sm="6">
                <h4 className="description">Programmable logic controller</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto1.jpeg")}
                />
                  <p className="text-center">Equipment</p>
                
              </Col>

              <Col md="3" sm="6">
                <h4 className="description">Programmable logic controller</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto2.jpg")}
                />
                  <p className="text-center">Equipment</p>
                
              </Col>
              

              <Col md="3" sm="6">
                <h4 className="description">Remote Control of PLC</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto3.png")}
                />
                  <p className="text-center">Equipment</p>
                
              </Col>

              <Col md="3" sm="6">
                <h4 className="description">VDFs and PLCs</h4>
                <img
                  alt="VDFs and PLCs"
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto4.jpg")}
                />
                  <p className="text-center">Equipment</p>
                
              </Col>
            </Row>
          </Container>
        </div>
        
      </Container>
      
      </div>
      <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default AutomatizationEn;
