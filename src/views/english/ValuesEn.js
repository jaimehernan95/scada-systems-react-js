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



function ValuesEn() {

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
            style={{ backgroundImage: "url(" + require("assets/img/background/bluegb2.jpg") + ")" }} >

    
    {/* starts navigation bar */}
    <EnglishNavBar></EnglishNavBar>
    {/* starts navigation ends */}

        <Container>
          <Row>
            <Col md="12">
              <div className="title">
                <h2 align="center"><b>Our Company</b> </h2>
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
                        <h3 className="description"><b>Mission</b></h3>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        <h3 className="description"><b>Vision</b></h3>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        <h3 className="description"><b>Values</b></h3>
                      </NavLink>
                    </NavItem>

                  </Nav>
                </div>
              </div>

              <TabContent activeTab={activeTab} className="text-align">
                <TabPane tabId="1">
                  <h4 className="description" align="justify">
                  Our main objective is to supply comprehensive solutions with high added value in Industrial Automation and SCADA Systems, Telemetry, Telecontrol, and Hydrometeorology. To improve the productivity of our most demanding clients safely and reliably.
                  </h4>
                  <h4 className="description" align="justify">
                  Developing, supervising, and executing Engineering Projects that contribute to the development of the national Industry. We have qualified personnel with extensive experience in applications of industrial-type solutions, using cutting-edge technology to achieve maximum efficiency, seeking the satisfaction of our clients.
                  </h4>
                </TabPane>
                <TabPane tabId="2">
                  <h4 className="description" > Devenez la société leader qui fournit la solution complète pour l'automatisation industrielle, y compris le développement de produits en interne en Amérique latine, toujours avec l'excellent service qui est notre caractéristique, la meilleure équipe humaine, et avec la mise en œuvre d'une technologie de pointe.</h4>
                </TabPane>
                <TabPane tabId="3">
                  <ul className="description" >
                      <li><h4>Honesty</h4></li>
                      <li><h4>Responsibility</h4></li>
                      <li><h4>Teamwork</h4></li>
                      <li><h4>Commitment</h4></li>
                      <li><h4>Results-Oriented</h4></li>
                      <li><h4>Continuous improvement</h4></li> 
   
                  </ul>
                </TabPane>

              </TabContent>
            </Col>
          </Row>
          
        </Container>
      </div>{" "}

      <EnglishFooterPage></EnglishFooterPage>
      
    </>
  );
}

export default ValuesEn;
