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

function Automatization() {
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
            style={{ backgroundImage: "url(" + require("assets/img/background/gradiente.jpg") + ")" }} > 
     <IndexNavbar></IndexNavbar>
     <br />  <br />
      <Container className="tim-container">
        
        
        
        <div id="images">
          <Container>
            <div className="title"  >
              <h2 className="description" align="center"><b>Automatización y Control de Procesos Industriales</b></h2>
              <br />
              <h4 align="justify">En un mundo cada vez más tecnificado, las empresas públicas y privadas tienen la necesidad de automatizar sus procesos para incrementar su productividad mediante reducción de costos, optimización de procesos, maximización de ganancia, reducción de tiempos de producción y entrega, producción en masa, y lograr en general una producción más eficiente y competitiva.
              </h4>
              <h4 align="justify"> 
              Nuestro equipo de Ingenieros de automatización cuenta con el knock how de 10 años de experiencia brindando diversas soluciones en automatización e integrando PLCs de las firmas Omron, Schneider Electric y Siemens en los procesos industriales más críticos de los sectores de agua, energía, minería y medio ambiente.
              </h4>
              <br />
            </div>
            
            <Row>
              <Col md="3" sm="6">
                <h4 className="description">Controlador lógico </h4>
                <br />
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto1.jpeg")}
                />
                  
                
              </Col>

              <Col md="3" sm="6">
                <h4 className="description">Controlador lógico </h4>
                <br />
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto2.jpg")}
                />
                  
                
              </Col>
              

              <Col md="3" sm="6">
                <h4 className="description">Control remoto</h4>
                <br />
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto3.png")}
                />
                 
                
              </Col>

              <Col md="3" sm="6">
                <h4 className="description">VDFs and PLCs</h4>
                <br />
                <img
                  alt="VDFs and PLCs"
                  className="img-rounded img-responsive"
                  src={require("assets/img/automatization/auto4.jpg")}
                />
                 
                
              </Col>

              
            </Row>
          </Container>
        </div>
        
      </Container>
      
      </div>
      <FooterPage></FooterPage>
    </>
  );
}

export default Automatization;
