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
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';


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



function ValuesFr() {

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
    <FrenchNavBar></FrenchNavBar>
    {/* starts navigation ends */}

        <Container>
          <Row>
            <Col md="12">
              <div className="title">
                <h2 className="description" align="center"> <b>Notre compagnie</b></h2>
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
                        <h3 className="description">Mission</h3>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        <h3 className="description">Vision</h3>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        <h3 className="description">Valeurs</h3>
                      </NavLink>
                    </NavItem>

                  </Nav>
                </div>
              </div>

              <TabContent activeTab={activeTab} className="text-align">
                <TabPane tabId="1">
                  <h4 className="description" align="justify">
                  Notre objectif principal est de fournir des solutions compl??tes ?? haute valeur ajout??e en automatisation industrielle et syst??mes SCADA, t??l??m??trie, t??l??contr??le et hydrom??t??orologie pour am??liorer la productivit?? de nos clients les plus exigeants de mani??re s??re et fiable.
                  </h4>
                </TabPane>
                <TabPane tabId="2">
                  <h4 className="description" align="justify"> 
                  Devenir la soci??t?? leader qui fournit des solutions compl??tes pour l'automatisation industrielle, y compris le d??veloppement de nos propres produits en Am??rique latine, toujours avec l'excellent service qui est notre caract??ristique, la meilleure ??quipe humaine et la mise en ??uvre d'une technologie de pointe.
                  </h4>
                </TabPane>
                <TabPane tabId="3">
                  <ul className="description">
                      <li><h4>Honn??tet??</h4></li>
                      <li><h4>Responsibility</h4></li>
                      <li><h4>Teamwork</h4></li>
                      <li><h4>Engagement</h4></li>
                      <li><h4>Results-Oriented</h4></li>
                      <li><h4>Am??lioration continue</h4></li> 
   
                  </ul>
                </TabPane>

              </TabContent>
            </Col>
          </Row>
          
        </Container>
      </div>{" "}

      <FrenchFooterPage></FrenchFooterPage>
      
    </>
  );
}

export default ValuesFr;
