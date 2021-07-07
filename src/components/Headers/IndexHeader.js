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
/*eslint-disable*/
import React from "react";
import WelcomePictures from "components/WelcomePictures";


// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-success"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres4.jpeg") + ")"
        }}
      >
 
        {/* <div className="filter" /> */}
          <div className="content-center">
        
            <Container>
          
              {/* <h2 className="presentation-subtitle text-center">
              Soluciones Integrales en Automatizacion y Sistemas Scada 
                </h2>
                  <br />
                <p className="description text-center" >
                Instrumentacion, Telemetria, Telecontrol Redes de Estaciones Hidrometeorologicas Automaticas Satelitales, Moviles y Radiales
                </p> */}

            <div className="title"> 
              <h3 align="center"> <b>Soluciones Integrales en Automatizacion y Sistemas Scada</b></h3>
                      
          
                      
                      {/* <h4 align="center"> Instrumentacion, Telemetria, Telecontrol Redes de Estaciones Hidrometeorologicas Automaticas Satelitales, Moviles y Radiales
                      </h4> */}
            </div>
                </Container>
                <WelcomePictures></WelcomePictures>
          </div>
        
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        /> */}

        <br></br>

        <h4 className="category category-absolute">

        <b>Instrumentacion, Telemetria, Telecontrol Redes de Estaciones Hidrometeorologicas Automaticas Satelitales, Moviles y Radiales</b>
                 
            {/* <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/logo.png")}
            />  */}
        </h4>





      </div>
    </>
  );
}

export default IndexHeader;
