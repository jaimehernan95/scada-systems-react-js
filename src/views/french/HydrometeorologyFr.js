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
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';
import FrenchNavBar from 'components/Navbars/FrenchNavBar';


// reactstrap components
import {  Container } from "reactstrap";


// core components

function HydrometeorologyFr () {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/mountainperu.jpeg") + ")" }} > 
     <FrenchNavBar></FrenchNavBar>

     <Container>
          <div id="images">
            <div className="title"  >
              <p></p>
            
            
                <h2 className="title" > Hydrométéorologie </h2>
                
                
                    <br />
                    <p>
                    L'hydrométéorologie est la science qui étudie le cycle de l'eau dans la nature. Il couvre l'étude des phases atmosphérique (évaporation, condensation et précipitation) et terrestre (interception de pluie, infiltration et déversement en surface) du cycle hydrologique et notamment de ses interrelations. Elle comprend l'observation, le traitement et l'analyse du comportement des éléments aquatiques, principalement les débits fluviaux et les volumes stockés dans des réservoirs naturels et artificiels, ainsi que les facteurs météorologiques.
                    </p>
                    <br />
                    <p> 
                    Le développement de cette science aide à comprendre les phénomènes hydrométéorologiques, ainsi que le développement de systèmes et d'outils hydrométéorologiques qui sont de plus en plus utilisés dans l'observation, la prévision, la modélisation, la prévention et l'alerte précoce dans les zones de contrôle des inondations. et des applications spécifiques pour le contrôle et la gestion des réservoirs et des rivières. Une station météorologique est une installation conçue pour mesurer et enregistrer régulièrement diverses variables météorologiques telles que:
                    </p> 
                    <br />
                    <p>
                    Précipitations, vitesse et direction du vent, température de l'air, humidité relative de l'air, rayonnement solaire et évaporation sous pression atmosphérique
                    </p>
                    <br />
                    <p>
                    Ces données sont utilisées à la fois pour préparer des prévisions météorologiques à partir de modèles numériques et pour des études climatiques.
                    Une station hydrométrique est le site d'observation où les données sur l'eau des rivières, des lacs ou des réservoirs sont obtenues. Un réseau de stations hydrométéorologiques est composé d'un groupe de stations météorologiques et / ou hydrométriques disposées de manière à permettre la collecte d'informations dans une zone d'intérêt, comme un bassin hydrographique, une ville ou un pays. L'emplacement des stations est déterminé pour répondre aux critères de représentativité des données, d'accessibilité, de sécurité, de disponibilité et entre autres critères en fonction de la portée du projet.
                    </p>
                    <br />
                    <p>
                    APR CONTROL SRL a un savoir-faire de 10 ans d'expérience dans la mise en œuvre, l'installation, l'assemblage et l'intégration de solutions pour les réseaux de stations hydrométéorologiques selon les normes et recommandations de l'Organisation météorologique mondiale (OMM), des capteurs, enregistreur de données o PLC, télémétrie avec technologie radio, cellulaire et satellite, stockage et les logiciels nécessaires pour l'administration, la gestion et l'exploitation des informations, ainsi que leur diffusion via HMI SCADA, serveurs Web, e-mail, etc. Nous avons une expérience dans la mise en œuvre complète des réseaux hydrométéorologiques de la phase d'étude préliminaire à la construction de l'infrastructure civile, l'installation et la mise en service, jusqu'à l'exploitation et la maintenance.
                    </p>

                    <br />
                    <p>
                    Ci-dessous, nous montrons une galerie photographique du réseau de 32 stations hydrométéorologiques mises en œuvre par APR CONTROL SRL pour Electroperu SA, composé de stations météorologiques, hydrométriques et pluviométriques automatiques le long du bassin de Mantaro depuis la source de LAGO JUNIN jusqu'à la proximité en amont de la Tablachaca Barrage.
                    </p>
                    </div>
                    <HydrometeorologyPictures></HydrometeorologyPictures>
                    </div>
            </Container>
        </div>
       
        <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default HydrometeorologyFr;
