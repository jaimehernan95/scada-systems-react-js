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
// nodejs library that concatenates strings
import classnames from "classnames";
// apr log
// import * as ReactBootStrap from "react-bootstrap";
// import * as  BootStrap from "reactstrap";


// reactstrap components
import {

  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function FrenchNavBar() {

  const [navbarColor, setNavbarColor] = React.useState("black");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 40 ||
        document.body.scrollTop < 40
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>

        <div className="navbar-translate">
          <h3 class="text-primary"><NavLink href="/french-page"><b>APR Control </b><img alt="logo" src={require("assets/img/flags/FR.gif")}/></NavLink>
          </h3>
            

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

              {/* About us */} {/* from here each DropdownMenu has been added div class="p-3 mb-2 to provide bg color  */}

           

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="white"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
                
              >Notre compagnie
              
              </DropdownToggle >
             
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info" >

                  <div class="p-3 mb-2 bg-info text-white"> 

                  <DropdownItem color="bg-dark" href="/welcome-page-fr" >Bienvenue</DropdownItem>
                  <DropdownItem href="/values-page-fr">Valeurs vision mission </DropdownItem>
                  <DropdownItem href="/experience-page-fr">Message du président</DropdownItem>
                  <DropdownItem href="/alliance-page-fr">Partenaires Commerciaux </DropdownItem>
                  <DropdownItem href="/about-page-fr">À propos d'APR Control </DropdownItem>

                  </div>
                  
                </DropdownMenu>

                {/* <ul class="navbar-nav"><li class="dropdown show nav-item"><a aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" href="#" id="dropdownMenuButton" role="button" class="dropdown-toggle nav-link"> Qui sommes-nous?</a><div tabindex="-1" role="menu" aria-labelledby="dropdownMenuButton" variant="success" aria-hid */}

            </UncontrolledDropdown>

            {/* Products */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              >Produits
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">

                <div class="p-3 mb-2 bg-success text-white"> 

                  <DropdownItem href="automatization-page-fr">Automatisation</DropdownItem>
                  <DropdownItem href="telemetry-page-fr">Télémétrie</DropdownItem>
                  <DropdownItem href="telecontrol-page-fr">Telecontrol</DropdownItem>
                  <DropdownItem href="scadaSystems-page-fr">Systèmes SCADA</DropdownItem>
                  <DropdownItem href="hydrometeorology-page-fr">Hydrométéorologie</DropdownItem>
                  
                  </div>

                </DropdownMenu>
            </UncontrolledDropdown>

            {/* Services */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              > Service
              </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                  
                <div class="p-3 mb-2 bg-primary text-white"> 
                  <DropdownItem href="engineering-page-fr">Ingénierie de la gestion de l'eau</DropdownItem>
                  <DropdownItem href="consulting-page-fr">Des Services de Consultation</DropdownItem>
                  <DropdownItem href="support-page-fr">Assistance Technique Et Maintenance</DropdownItem>
                  <DropdownItem href="flowRate-page-fr">Débit de l'Eau</DropdownItem>
                  <DropdownItem href="damWaterControl-page-fr">Opérations Du Barrage</DropdownItem>
                  <DropdownItem href="specializedEngineering-page-fr">Ingénierie spécialisée</DropdownItem>
                  </div> 

                </DropdownMenu>
            </UncontrolledDropdown>

            {/* Projects  */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              > Projets
              </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuButton" >

                <div class="p-3 mb-2 bg-warning text-dark"> 
                  <DropdownItem href="projects-page-fr">Système de télémétrie par satellite</DropdownItem>
                  <DropdownItem href="projects-page-fr">Télécontrôle Via Satellite</DropdownItem>
                  <DropdownItem href="projects-page-fr"> Sans fil UHF et à Micro-ondes</DropdownItem>
                  <DropdownItem href="projects-page-fr">Surveillance à Distance</DropdownItem>
                  <DropdownItem href="projects-page-fr">Implémentation Du Système SCADA</DropdownItem>
                  </div>

                </DropdownMenu>
            </UncontrolledDropdown>

             {/* Clients  */}


            <NavItem>
              <NavLink href ="clients-page-fr">
              Clients
              </NavLink>
            </NavItem>

            {/* Contact Us */}

             <NavItem>
              <NavLink href="/contactForm-page-fr" >
              Contactez-Nous
              </NavLink>
            </NavItem> 
            
               {/* Languages  */}

              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="white"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
              ><i class="fa fa-language" aria-hidden="true"></i>Langue
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-white text-dark"> 
                  <DropdownItem href="/index"><img alt="logo"src={require("assets/img/flags/ES.png")}/> Español</DropdownItem>
                  <DropdownItem href="/english-page"><img alt="logo" src={require("assets/img/flags/US.png")}/> English</DropdownItem>
                  </div>
                </DropdownMenu>
            </UncontrolledDropdown>

      
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default FrenchNavBar;
