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
import { Container } from "reactstrap";

// core components

function SpecializedEngineeringEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate2.jpeg") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 align="center"> <b>Specialized Engineering Services</b></h2>
                    <br />
                    <h4 align="justify">
                    We provide highly specialized engineering services in variable frequency drive systems, power systems, resonant and non-resonant large power supplies for the induction heating industry, engineering simulation, and engineering analysis.
                    </h4>
                    <br />
                   
            </div>

        </Container>
    </div>
    </div>
    <EnglishFooterPage></EnglishFooterPage>
    </>
  );
}

export default SpecializedEngineeringEn;
