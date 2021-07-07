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
import WelcomePictures from 'components/WelcomePictures';


// reactstrap components
import {  Container } from "reactstrap";


// core components

function WelcomePage() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="text-white text-center"> <b>Bienvenido a APR CONTROL</b></h2>
                    <br />
                    <h4 align="justify">APR-Control ofrece el más alto grado de experiencia en la propuesta, licitación, diseño e implementación de proyectos de automatización y SCADA en sectores tales como: Electricidad, agua y aguas residuales, gas y petróleo, medio ambiente, industria alimentaria, generación de energía, manufactura, minería, metal-mecánica, energías renovables, pesca.
                    </h4>
                    <h4 align="justify">
                    La prioridad de APR Control es servir al cliente y brindar soluciones técnicamente sólidas y rentables. Más de quince años son testimonio de nuestro éxito. Además de las soluciones más novedosas en automatización y SCADA, aquí también encontrará soluciones de vanguardia para servicios de ingeniería altamente especializados en sistemas de variadores de frecuencia, sistemas de potencia, grandes fuentes de alimentación resonantes y no resonantes para la industria del tratamiento térmico por inducción, simulación y análisis.
                    </h4>
                    <br />
                    
                    <WelcomePictures></WelcomePictures>


            </div>
        </Container>
    </div>
    </div>
    <FooterPage></FooterPage>

    </>
  );
}

export default WelcomePage;
