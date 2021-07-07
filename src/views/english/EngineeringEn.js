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

import { Container} from "reactstrap";

// core components

function EngineeringEn() {
  return (
    <>
         <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Engineering services </h2>
                    <br />
                    <h4 align="justify">
                    APR CONTROL SRL offers its comprehensive engineering services from basic engineering, detail engineering, equipment supply, installation, configuration, programming and commissioning of the project in the areas of:
                    </h4>
                    <br />
                    <ul> 
                        <li><h4>Automatic Hydrometric and Meteorological Stations</h4></li>
                        <li><h4>Automation of Industrial Processes and SCADA Systems</h4></li>
                        <li><h4>Telecontrol and Telemetry</h4></li>
                        <li><h4>Radio propagation studies or Line of Sight (Pathloss)</h4></li>
                        <li><h4>Residential photovoltaic systems (SFVD) and Industrial</h4></li>
                    </ul>
   
            </div>
        </Container>
    </div>
    
    </div>
    <EnglishFooterPage></EnglishFooterPage>

    </>
  );
}

export default EngineeringEn;
