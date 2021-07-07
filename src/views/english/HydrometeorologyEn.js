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
import HydrometeorologyPictures from 'components/HydrometeorologyPictures';

// Header and Footer
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';
import EnglishNavBar from 'components/Navbars/EnglishNavBar';


// reactstrap components
import {  Container } from "reactstrap";


// core components

function HydrometeorologyEn () {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/mountainperu.jpeg") + ")" }} > 
     <EnglishNavBar></EnglishNavBar>

     <Container>
          <div id="images">
            <div className="title"  >
              
            
            
                <h2 className="title" align="center"> Hydrometeorology</h2>
                
                
                    <br />
                    <h4 align="justify">
                    Hydrometeorology is the science that studies the water cycle in nature. It covers the study of the atmospheric (evaporation, condensation, and precipitation) and terrestrial (interception of rain, infiltration, and surface spillage) phases of the hydrological cycle and especially of its interrelationships. It includes the observation, processing, and analysis of the behavior of water elements, mainly river discharges and the volumes stored in natural and artificial reservoirs, as well as meteorological factors.
                    </h4>
                    <br />
                    <h4 align="justify"> 
                    The development of this science helps the understanding of hydrometeorological phenomena, as well as the development of hydrometeorological systems and tools that are increasingly being used in observation, prediction, modeling, prevention, and early warning in flood control areas. and specific applications for the control and management of reservoirs and rivers. A meteorological station is a facility designed to regularly measure and record various meteorological variables such as:
                    </h4>
                    <br />
                    <h4 align="justify">
                      Precipitation, Wind speed, and direction, Air temperature, Relative humidity of the Air, Atmospheric Pressure Solar Radiation and Evaporation
                    </h4>
                    <br />
                    <h4 align="justify">
                    These data are used both for preparing meteorological predictions from numerical models and for climate studies.
                    A hydrometric station is the observation site where data on river, lake, or reservoir water is obtained. A network of Hydrometeorological stations is made up of a group of meteorological and/or hydrometric stations arranged in such a way that they allow information to be collected from an area of interest, such as a hydrographic basin, a city, or a country. The location of the stations is determined to meet the criteria of data representativeness, accessibility, security, availability and among other criteria according to the scope of the project.
                    </h4>
                    <br />
                    <h4 align="justify">
                    APR CONTROL SRL has a Know-How of 10 years of experience in the implementation, installation, and assembly and integration of solutions for networks of Hydrometeorological stations according to standards and recommendations of the World Meteorological Organization (WMO), from the sensors, datalogger o PLCs, telemetry with radio, cellular and satellite technology, storage and the necessary software for the administration, management and exploitation of the information, as well as its dissemination through HMI SCADA, web servers, email, etc. We have experience in the comprehensive implementation of Hydrometeorological networks from the preliminary study stage through the construction of civil infrastructure, installation, and commissioning, to operation and maintenance.
                    </h4>

                    <br />
                    <h4 align="justify">
                    Below we show a photographic gallery of the network of 32 Hydrometeorological stations implemented by APR CONTROL SRL for Electroperu SA, made up of automatic meteorological, hydrometric, and Pluviometric station along the Mantaro basin from the source of LAGO JUNIN to the upstream proximity of the Tablachaca Dam.
                    </h4>
                    </div>
                    <HydrometeorologyPictures></HydrometeorologyPictures>
                    </div>
            </Container>
        </div>
       
        <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default HydrometeorologyEn;
