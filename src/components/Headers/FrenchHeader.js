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

// reactstrap components
import { Container } from "reactstrap";
import WelcomePictures from "components/WelcomePictures";

// core components

function FrenchHeader() {
  return (
    <>
    <div
      className="page-header section-dark"
      style={{ 
        backgroundImage:
          "url(" + require("assets/img/antoine-barres2.jpg") + ")"
      }}
    >
      <div className="filter" />

          
           <div className="content-center">
            <Container>
            <h2 className="description text-center">
                    <b>Systèmes SCADA et solutions d'automatisation </b>
                  </h2>
                  <h3 className="description text-center">
                  <b>Contactez-Nous</b> 
                  </h3>
                  <h3 className="description text-center">contact@apr-control.com
                  </h3>
                  <h3 className="description text-center"><i className="fa fa-whatsapp"></i> +51 923 239 709
                  </h3>
                  <br></br>

              {/* <div className="title"  > */}
                {/* <p className="description text-center" > Instrumentation, Télémétrie, Télécontrôle, Réseaux de Stations Hydrométéorologiques Automatiques, Satellite, Mobile et Radial
                </p> */}
                  
                  
                   {/* </div>   */}
                   {/* <WelcomePictures></WelcomePictures> */}
              </Container>
           </div>

       
        <h4 className="category category-absolute">
        Instrumentation, Télémétrie, Télécontrôle, Réseaux de Stations Hydrométéorologiques Automatiques, Satellite, Mobile et Radial
           
             {/* <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/logoapr.png")}
            /> */}
        </h4>
            <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
           
   
    </div>

    </>
  );
}

export default FrenchHeader;
