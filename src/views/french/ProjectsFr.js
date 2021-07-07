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

import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';

// reactstrap components
import {  Container } from "reactstrap";
import { MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

// core components

function ProjectsFr() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/projectdone.jpeg") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br />  <br />
    

        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Projets</h2>
                    <br />
                    <h4>
                    La division Ingénierie et Projets offre des services complets depuis l'identification de projet, l'ingénierie conceptuelle, la faisabilité technique, l'ingénierie de base et détaillée, l'approvisionnement, la supervision, la construction, la pré-mise en service, la mise en service et la mise en service. Nous sommes organisés pour fournir des services spécialisés qui répondent aux attentes, leur donnant un haut niveau d'efficacité, générant de la valeur pour nos clients.
                    Notre entreprise est spécialisée dans la réalisation de projets de
                    </h4>
                    <br />
                    <ul>
                        <li><h4> Stations hydrométriques et météorologiques automatiques </h4>  </li>
                        <li><h4> Télémétrie radio, cellulaire et satellite et télécommande </h4>  </li>
                        <li><h4> Stations de mesure et de contrôle avec API </h4>  </li>
                        <li><h4> Conseil et développement de systèmes SCADA </h4>  </li>
                    </ul>
                    <h4> Parmi les principaux projets achevés, nous avons: </h4>
                    <br/>
            </div>
        </Container>
        </div>
        < br />
        
        <Container> 

            <MDBTable>
              <MDBTableHead color="p-4 mb-3 bg-dark text-white">
                <tr>
                    
                    <th>Compagnie</th>
                    {/* <th>Mois</th>
                    <th>An</th> */}
                    <th>Projet</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td>Octobre</td>
                  <td>2013</td> */}
                  <td>
                  Acquisition et installation de systèmes de communication par satellite (terminaux INMARSAT avec technologie BGAN) entre les stations de contrôle et le centre de contrôle SCADA. Barrage de Tablachaca.
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td>Mai</td>
                  <td>2013</td> */}
                  <td>Maintenance corrective des communications radiales et par satellite GOES sous-système amélioré - Tablachaca
                  </td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012 - 2013</td> */}
                  <td>Maintenance du système SCADA OASYS appelé système hydrométéorologique moderne</td>
                </tr>
               

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td> </td>
                  <td>2012 - 2013</td> */}
                  <td>
                  Modernisation du système hydrométéorologique SCADA - barrage de Tablachaca et intégration des stations de contrôle du sous-bassin de Hueghue, Yanacocha Palcán, Huacracocha SW Lake Junín et Huacracocha Huari.
                  </td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Acquisition et installation d'équipement pour la station hydrométrique de Casapatos</td>
                </tr>

                <tr>
                  
                  <td width="129"> Sedapal</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>
                  Intégration du réseau de l'API dans la communication MODBUS TCP des filtres de l'usine n ° 1 au SCADA Oasys des usines de La Atarjea.
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Entretien du réseau hydrométéorologique modernisé du bassin du fleuve Mantaro.</td>
                </tr>

                <tr>
                  
                  <td width="129">Sedapal</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td> 
                  Conseil: Revue de la partie automatisation du projet: Réhabilitation et amélioration des décanteurs de l'usine n ° 1 - La Atarjea.
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>
                  Mesures hydrométriques (jaugeage) au moment des avenues Stations hydrologiques Cuenca Mantaro River.
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>
                  Mesures de base (contrôle topographique, piézométrique et jaugeage) au moment de l'avenue du premier barrage de Huacracocha - Huari Cuenca Río Mantaro.
                  </td>
                </tr>
                
                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Jauges de la station hydrométrique améliorée du bassin de la rivière Mantaro.</td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>IInstallation de capteurs de niveau dans le sous-système Quillón de la station Huichicocha moderne - bassin de la rivière Mantaro.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Maintenance corrective Station Pluvio-Hydrométrique Pont Chulec (La Oroya), Bassin Río Mantaro.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Diagnostic du système hydrométéorologique SCADA du barrage de Tablachaca. </td>
                </tr>
                <tr>
                 
                  <td width="129">Edegel</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>"Programmation d'automates programmables pour la mise en œuvre de la communication via GOES des stations hydrotélémétriques de Yuracmayo, Huasca, Sacsa, Tunel d'entrée Trasandino et Milloc", pour le contrôle, l'exploitation et la maintenance des cinq stations hydrométéorologiques EDEGEL.</td>
                </tr>
                <tr>
                  
                  <td width="129">Sedapal.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td> Service de maintenance et d'optimisation des installations électriques des usines de La Atarjea.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td> Diagnostic et mise en service du système de communication radiale entre la station améliorée et le centre de contrôle de Tablachaca (système SCADA).</td>
                </tr>
                <tr>
                 
                  <td width="129">Edegel</td>
                  {/* <td></td> */}
                  {/* <td>2009</td> */}
                  <td> "Service de téléchargement historique des 5 stations télémétriques (Yuracmayo, tunnel transandin, Milloc, Huasca, Sacsa)", pour le contrôle, l'exploitation et la maintenance des réseaux hydrométéorologiques d'EDEGEL.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2009</td> */}
                  <td>Maintenance du logiciel SCADA du centre de contrôle hydrométéorologique de Tablachaca. </td>
                </tr>
                <tr>
                  
                  <td width="129">Telvent-Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td> Service d'appui à l'exploitation expérimentale du projet de modernisation du système hydrométéorologique et du système de contrôle des lagunes régulées du complexe hydroélectrique de Mantaro d'Electroperú.</td>
                </tr>



              </MDBTableBody>
            </MDBTable>
           
            </Container> 
      <FrenchFooterPage></FrenchFooterPage>
   

     </>

  );
}

export default ProjectsFr;


