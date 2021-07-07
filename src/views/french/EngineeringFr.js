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
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';


// reactstrap components

import { Container} from "reactstrap";

// core components

function EngineeringFr() {
  return (
    <>
         <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Services d'Ingénierie </h2>
                    <br />
                    <h4>
                    APR CONTROL SRL offre ses services d'ingénierie complets de l'ingénierie de base, l'ingénierie de détail, la fourniture d'équipements, l'installation, la configuration, la programmation et la mise en service du projet dans les domaines de:
                    </h4>
                    <br />
                    <ul> 
                        <li><h4>Stations hydrométriques et météorologiques automatiques</h4></li>
                        <li><h4>Automation of Industrial Processes and SCADA Systems</h4></li>
                        <li><h4>Télécontrôle et télémétrie</h4></li>
                        <li><h4>Études de propagation radio ou ligne de visée (Pathloss)</h4></li>
                        <li><h4>Systèmes photovoltaïques résidentiels (SFVD) et industriels</h4></li>
                    </ul>
   
            </div>
        </Container>
    </div>
    
    </div>
    <FrenchFooterPage></FrenchFooterPage>

    </>
  );
}

export default EngineeringFr;
