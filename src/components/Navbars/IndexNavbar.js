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

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("bg-dark");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 60
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 70 ||
        document.body.scrollTop < 60
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
  
          <h3 class="text-primary"><NavLink href="/index"><b>APR Control </b><img alt="logo" src={require("assets/img/flags/ES2.gif")}/></NavLink>
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

              {/* About us */}

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
              > Empresa
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-info text-white"> 
                  <DropdownItem href="welcome-page">Bienvenida</DropdownItem>
                  <DropdownItem href="values-page">Misión Visión Valores </DropdownItem>
                  <DropdownItem href="experience-page">Mensaje del Presidente</DropdownItem>
                  <DropdownItem href="alliance-page">Alianzas Estratégicas</DropdownItem>
                  <DropdownItem href="about-page">Acerca de APR Control</DropdownItem>
                  </div>
                </DropdownMenu>
              
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
              > Productos
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-success text-white"> 
                  <DropdownItem href="automatization-page">Automatización</DropdownItem>
                  <DropdownItem href="telemetry-page">Telemetría</DropdownItem>
                  <DropdownItem href="telecontrol-page">Telecontrol</DropdownItem>
                  <DropdownItem href="scadaSystems-page">Sistemas SCADA</DropdownItem>
                  <DropdownItem href="hydrometeorology-page">Hidrometeorología</DropdownItem>
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
              > Servicios
              </DropdownToggle>
               
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-primary text-white">
                  <DropdownItem href="engineering-page">Ingeniería de Gestiones</DropdownItem>
                  <DropdownItem href="consulting-page">Consultoría</DropdownItem>
                  <DropdownItem href="support-page">Soporte Técnico y Mantenimiento</DropdownItem>
                  <DropdownItem href="flowRate-page">Servicio de Medición de Caudales</DropdownItem>
                  <DropdownItem href="damWaterControl-page">Control de Represas</DropdownItem>
                  <DropdownItem href="specializedEngineering-page">Ingeniería Especializada</DropdownItem>
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
              > Proyectos
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-warning text-dark"> 
                  <DropdownItem href="projects-page">Telemetría Satelital</DropdownItem>
                  <DropdownItem href="projects-page">Telecontrol Satelital</DropdownItem>
                  <DropdownItem href="projects-page">Radio Enlances UHF</DropdownItem>
                  <DropdownItem href="projects-page">Estacion de Mediciones</DropdownItem>
                  <DropdownItem href="projects-page">Desarrollo de Mediciones Scada</DropdownItem>
                  </div>
                </DropdownMenu>
               
            </UncontrolledDropdown>
              
              {/* Clients  */}
              
              <NavItem>
              <NavLink href ="clients-page">
              Clientes
              </NavLink>
            </NavItem>

            {/* Contact Us */}

            <NavItem>
              <NavLink href="/contactForm-page" >
                Contacto
              </NavLink>
            </NavItem>

            {/* Languages  */}

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
              > <i class="fa fa-globe" aria-hidden="true"></i>Lenguaje
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-white text-dark"> 
                  <DropdownItem href="/english-page"><img alt="logo" src={require("assets/img/flags/US.png")}/> English</DropdownItem>
                  <DropdownItem href="/french-page"><img alt="logo" src={require("assets/img/flags/FR.png")}/> Français</DropdownItem>
                  </div>
                </DropdownMenu>
               
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
