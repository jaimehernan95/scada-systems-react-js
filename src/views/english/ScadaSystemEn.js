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

// reactstrap components
import { Container } from "reactstrap";

import ScadaSystemPictures from 'components/ScadaSystemPictures';

// Header and Footer
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';

// core components

const ScadaSystemsEn = () => {

  return (
    <>
     <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />
            <div id="images">
                <Container>
                  <div className="title"  >
                  <h2 class="p-3 mb-2 bg-info text-white"> SCADA Systems for Water and Environment </h2>
                      <br />
                      <h4 align="justify">
                      APR CONTROL offers comprehensive Supervisory Control And Data Acquisition (SCADA) Systems solutions to monitor, control, and supervise in real-time the various physical variables through process sensors and/or transducers remotely with minimal human intervention.
                      </h4>
                      <br />
                      <h4 align="justify">
                      We have experience in implantation, development, start-up, and maintenance of SCADA Oasys systems on Unix and Windows platforms for the sectors of Water, Environment, and Energy.
                      </h4>
                      <br />
                      <h4 align="justify">
                      For more information in this regard, please contact us, we will gladly assist you.
                        </h4>
                        </div>
                        <br />
                        <br />
                        <ScadaSystemPictures></ScadaSystemPictures>
                  </Container>
                </div>
      </div>
      <EnglishFooterPage></EnglishFooterPage>
    </>
    );
  }
export default ScadaSystemsEn;
