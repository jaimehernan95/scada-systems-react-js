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
import FooterPage from 'components/FooterPage';
import IndexNavbar from 'components/Navbars/IndexNavbar';

// reactstrap components
import { Container} from "reactstrap";

// core components

function SpecializedEngineering() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/flowrate2.jpeg") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 align="center">Ingeniería Especializada</h2>
                
                    <br />
                    <h4 align="justify">Brindamos servicios de ingeniería altamente especializados en sistemas de variadores de
frecuencia, sistemas de potencia, grandes
fuentes de alimentación resonantes y no
resonantes para la industria del tratamiento
térmico por inducción, ingeniería de
simulación y análisis.
                    </h4>
                    <br />

            </div>

        </Container>
    </div>
    </div>
            {/* From here start the pictures */}
  
      <FooterPage></FooterPage>
    </>
  );
}

export default SpecializedEngineering;
