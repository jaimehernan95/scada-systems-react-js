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
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';

// core components

function AutomatizationFr() {
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
     <FrenchNavBar></FrenchNavBar>
     <br />
      <Container className="tim-container">
        
        
        
        <div id="images">
          <Container>
            <div className="title"  >
              <h2 class="p-3 mb-2 bg-info text-white"> Automatisation des syst??mes de contr??le - Syst??mes de contr??le industriels</h2>
              <br />
              <h4> Dans un monde de plus en plus automatis??, les entreprises publiques et priv??es doivent automatiser leurs processus pour augmenter leur productivit?? en r??duisant les co??ts, en optimisant les processus, en maximisant les b??n??fices, en r??duisant les d??lais de production et de livraison, la production de masse et, g??n??ralement, d'atteindre une production plus efficace et plus comp??titive.
              </h4>
              <h4>
              Notre ??quipe d'ing??nieurs en automatisation poss??de le savoir-faire de 10 ans d'exp??rience dans la fourniture de diverses solutions d'automatisation et l'int??gration d'automates des soci??t??s Omron, Schneider Electric et Siemens dans les processus industriels les plus critiques dans les domaines de l'eau, de l'??nergie, des mines et de l'environnement.
              </h4>
              <br />
            </div>
            
            <Row>
              <Col md="3" sm="6">
                <h4 className="description">Programmable Logic Controller</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto1.jpeg")}
                />
                  <p className="text-center">??quipement</p>
                
              </Col>

              <Col md="3" sm="6">
                <h4 className="description">Programmable Logic Controller</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto2.jpg")}
                />
                  <p className="text-center">??quipement</p>
                
              </Col>
              

              <Col md="3" sm="6">
                <h4 className="description">Contr??le ?? distance de l'automate</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto3.png")}
                />
                  <p className="text-center">??quipement</p>
                
              </Col>

              <Col md="3" sm="6">
                <h4 className="description">VDFs et PLCs</h4>
                <img
                  alt="VDFs and PLCs"
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto4.jpg")}
                />
                  <p className="text-center">??quipement</p>
                
              </Col>
            </Row>
          </Container>
        </div>
        
      </Container>
      
      </div>
      <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default AutomatizationFr;
