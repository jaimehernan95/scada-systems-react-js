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
import WelcomePictures from 'components/WelcomePictures';

// Header and Footer
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';
import FrenchNavBar from 'components/Navbars/FrenchNavBar';


// reactstrap components
import {  Container } from "reactstrap";


// core components

function WelcomePageFr() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }} > 
            <FrenchNavBar />
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 align="center"><b>Nous sommes APR CONTROL</b></h2>
                    <br />
                    <h4 align="justify">
                    APR-Control offre le plus haut degré d'expérience dans la proposition, l'appel d'offres, la conception et la mise en œuvre de projets d'automatisation et de SCADA dans des secteurs tels que: électricité, eau et eaux usées, gaz et pétrole, environnement, industrie alimentaire, production d'énergie, fabrication, exploitation minière, métal-mécanique, énergies renouvelables, pêche.
                    </h4>
                    <h4 align="justify">
                    La priorité d'APR Control est de servir le client et de fournir des solutions techniquement solides et rentables. Plus de quinze ans témoignent de notre succès.
                    </h4>
                    <h4 align="justify">
                    En plus des dernières solutions d'automatisation et de SCADA, vous trouverez ici également des solutions de pointe pour des services d'ingénierie hautement spécialisés dans les systèmes VFD, les systèmes d'alimentation, les grandes alimentations résonantes et non résonnantes pour l'industrie du traitement thermique par induction, la simulation et l'analyse.
                    </h4>
                    <br />
                    <WelcomePictures></WelcomePictures>


            </div>
        </Container>
    </div>
    </div>
    <FrenchFooterPage></FrenchFooterPage>

    </>
  );
}

export default WelcomePageFr;
