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

//header and footer
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import FooterPage from 'components/FooterPage';

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components



function Values() {

 const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

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
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }} >

    
    {/* starts navigation bar */}
    <IndexNavbar></IndexNavbar>
    {/* starts navigation ends */}

        <Container>
          <Row>
            <Col md="12">
              <div className="title">
                <h2 className="description" align="center"> <b>Nuestra Empresa </b> </h2>
                {/* <h2 className="description"> <div className="p-3 mb-2 bg-info text-white"> Nuestra Empresa </div></h2> */}
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        <h3 className="description"><b>Misión</b></h3>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        <h3 className="description"><b>Visión</b></h3>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        <h3 className="description"><b>Valores</b></h3>
                      </NavLink>
                    </NavItem>

                  </Nav>
                </div>
              </div>

              <TabContent activeTab={activeTab} className="text-align">
                <TabPane tabId="1">
                  <h4 className="description" align="justify">
                  Nuestro principal objetivo es brindar soluciones integrales de alto valor agregado en Automatización Industrial y Sistemas SCADA, Telemetría, Telecontrol e Hidrometeorología para mejorar la productividad de nuestros clientes más exigentes de manera segura y confiable.
                  </h4>
                  <h4 className="description" align="justify">
                  Contamos con desarrollar, supervisar y ejecutar Proyectos de Ingeniería que contribuyan al desarrollo de la Industria nacional. Contamos con personal calificado y con amplia experiencia en soluciones para la industria, utilizando tecnología de punta para lograr la máxima eficiencia, buscando la satisfacción de nuestros clientes.
                  </h4>
                </TabPane>
                <TabPane tabId="2">
                  <h4 className="description" align="justify">
                  Convertirnos en la empresa líder que brinde soluciones completas para la automatización industrial, incluyendo el desarrollo de productos propios en América Latina, siempre con el excelente servicio que es nuestra característica, el mejor equipo humano y con la implementación de tecnología de punta.
                  </h4>
                </TabPane>
                <TabPane tabId="3">
                  <ul className="description">
                      <li><h4>Honestidad</h4></li>
                      <li><h4>Responsabilidad</h4></li>
                      <li><h4>Trabajo en Equipo</h4></li>
                      <li><h4>Compromiso</h4></li>
                      <li><h4>Orientado a Resultados</h4></li>
                      <li><h4>Mejora Continua</h4></li>    
                  </ul>
                </TabPane>

              </TabContent>
            </Col>
          </Row>
          
        </Container>
      </div>{" "}

      <FooterPage></FooterPage>
      
    </>
  );
}

export default Values;
