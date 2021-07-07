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

function EnglishNavBar() {

  const [navbarColor, setNavbarColor] = React.useState("navbar-primary");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
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
          
          {/* <NavbarBrand
            data-placement="bottom"
            href="/english-page"
            title="APR Control SRL"
          >   <p> APR Control SRL </p>
          </NavbarBrand> */}

          <h3 class="text-primary">
            <NavLink href="/english-page"><b>APR Control </b>
            <img alt="uk flag" src={require("assets/img/flags/GB.gif")}/>
            </NavLink>
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
              >Our Company
              </DropdownToggle>
            
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-info text-white">
                  <DropdownItem href="/welcome-page-en">Welcome</DropdownItem>
                  <DropdownItem href="/values-page-en">Mission Vision Values </DropdownItem>
                  <DropdownItem href="/experience-page-en">Message from our CEO</DropdownItem>
                  <DropdownItem href="/alliance-page-en">Business Partners</DropdownItem>
                  <DropdownItem href="/about-page-en">About APR Control</DropdownItem>
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
              > Products
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-success text-white"> 
                  <DropdownItem href="automatization-page-en">Automation</DropdownItem>
                  <DropdownItem href="telemetry-page-en">Telemetry</DropdownItem>
                  <DropdownItem href="telecontrol-page-en">Telecontrol</DropdownItem>
                  <DropdownItem href="scadaSystems-page-en">SCADA systems</DropdownItem>
                  <DropdownItem href="hydrometeorology-page-en">Hydrometeorology</DropdownItem>
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
              > Services
              </DropdownToggle>
             
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-primary text-white"> 
                  <DropdownItem href="engineering-page-en">Water Management Engineering</DropdownItem>
                  <DropdownItem href="consulting-page-en">Consulting</DropdownItem>
                  <DropdownItem href="support-page-en">Technical Support and Maintenance</DropdownItem>
                  <DropdownItem href="flowRate-page-en">Flow Measurement </DropdownItem>
                  <DropdownItem href="damWaterControl-page-en">Dam Operations</DropdownItem>
                  <DropdownItem href="specializedEngineering-page-en">Specialized Engineering Services</DropdownItem>
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
              >Projects
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-warning text-dark"> 
                  <DropdownItem href="projects-page-en">Satellite Telemetry</DropdownItem>
                  <DropdownItem href="projects-page-en">Satellite Telecontrol</DropdownItem>
                  <DropdownItem href="projects-page-en">Microwave Wireless UHF</DropdownItem>
                  <DropdownItem href="projects-page-en">Remote Monitoring</DropdownItem>
                  <DropdownItem href="projects-page-en">SCADA System Implementation</DropdownItem>
                  </div>
                </DropdownMenu>
                
            </UncontrolledDropdown>

             {/* Clients  */}


            <NavItem>
              <NavLink href ="clients-page-en">
              Our Clients
              </NavLink>
            </NavItem>

            {/* Contact Us */}

            <NavItem>
              <NavLink href="/contactForm-page-en" >
                Contact
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <NavLink href="/english-page" >
              <img src={require("assets/img/flags/GB.gif")}/> 
              </NavLink>
            </NavItem> */}

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
              > <i class="fa fa-globe" aria-hidden="true"></i> Language
              </DropdownToggle>
              
                <DropdownMenu aria-labelledby="dropdownMenuButton" className="dropdown-info">
                <div class="p-3 mb-2 bg-white text-dark"> 
                  <DropdownItem href="/index"><img alt="logo" src={require("assets/img/flags/ES.png")}/> Español</DropdownItem>
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

export default EnglishNavBar;
