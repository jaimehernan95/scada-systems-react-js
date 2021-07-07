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
// import EnglishFooterPage from "components/Footers/EnglishFooterPage";
import WelcomePictures from "components/WelcomePictures";

// core components

function EnglishHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">

          <Container>
            
          <h3 className="presentation-subtitle text-center">
             SCADA systems and Automation Solutions 
          </h3>
          <br></br>
            
            <WelcomePictures></WelcomePictures>
          </Container>

        </div>
        
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        /> */}

        {/* <h4 className="category category-absolute">
           
             <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/logoapr.png")}
            />
        </h4> */}
        <h4 className="category category-absolute" > Instrumentation, Telemetry, Telecontrol, Networks of Automatic Hydrometeorological Stations, Satellite, Mobile and Radial</h4>

      </div>

      {/* <EnglishFooterPage></EnglishFooterPage> */}

    </>
  );
}

export default EnglishHeader;
