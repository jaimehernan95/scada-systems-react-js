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

import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';

// reactstrap components
import {  Container } from "reactstrap";
import { MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

// core components

function ProjectsEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/projectdone.jpeg") + ")" }} > 
            <EnglishNavBar></EnglishNavBar>
            <br />  <br />
    

        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Projects</h2>
                    <br />
                    <h4>
                    The Engineering and Projects division offers comprehensive services from project identification, conceptual engineering, technical feasibility, basic and detailed engineering, procurement, supervision, construction, pre-commissioning, commissioning, and commissioning. We are organized to provide specialized services that meet expectations, giving them a high level of efficiency, generating value for our clients. Our company is a specialist in the execution of projects of
                    </h4>
                    <br />
                    <ul>
                        <li><h4>Automatic Hydrometric and Meteorological Stations</h4>  </li>
                        <li><h4>Radio, cellular and satellite telemetry and remote control</h4>  </li>
                        <li><h4>Measurement and control stations with PLCs</h4>  </li>
                        <li><h4>Consulting and Development of SCADA Systems</h4>  </li>
                    </ul>
                    <h4> Among the main projects complated we have:</h4>
                    <br/>
            </div>
        </Container>
        </div>
        < br />
        
        <Container> 

            <MDBTable>
              <MDBTableHead color="p-4 mb-3 bg-dark text-white">
                <tr> 
                    <th>Company</th>
                    {/* <th>Month</th>
                    <th>Year</th> */}
                    <th>Project</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                
                  <td width="129">Electroperú S.A.</td>
                  {/* <td>October</td>
                  <td>2013</td> */}
                  <td>
                  Acquisition and Installation of Satellite Communication systems (INMARSAT Terminals with BGAN technology) between the control stations and the SCADA Control Center. Tablachaca Dam.
                  </td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td>May</td>
                  <td>2013</td> */}
                  <td>Corrective Maintenance of Radial and Satellite Communication GOES Improved Subsystem - Tablachaca
                  </td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td>
                  <td>2012 - 2013</td> */}
                  <td>Maintenance of the SCADA OASYS System called Modern Hydrometeorological System
                  </td>
                </tr>
               

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td> </td>
                  <td>2012 - 2013</td> */}
                  <td>
                  Modernization of the SCADA Hydrometeorological System - Tablachaca Dam and Integration of Hueghue, Yanacocha Palcán, Huacracocha SW Lake Junín and Huacracocha Huari sub-basin Control Stations.
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Acquisition and Installation of Equipment for the Casapatos Hydrometric Station

                  </td>
                </tr>

                <tr>
                 
                  <td width="129"> Sedapal</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>
                  Integration of the PLC’s network in MODBUS TCP communication from the Filters of Plant No. 1 to the SCADA Oasys of the La Atarjea Plants.
                  </td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Maintenance of the Modernized Hydrometeorological Network of the Mantaro River Basin. 
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Sedapal</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td> 
                  Consulting: Review of the automation part of the project: Rehabilitation and improvement of the decanters of the plant No. 1 - La Atarjea.
                  </td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>
                  Hydrometric Measurements (Gauging) at the Time of Avenues Hydrological Stations Cuenca Mantaro River.
                  </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>
                  Basic Measurements (Topographic, Piezometric Control and Gauging) at the Time of Avenue of the First Filling Huacracocha Dam - Huari Cuenca Río Mantaro.
                  </td>
                </tr>
                
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Gauges of the Improved River Mantaro Basin Hydrometric Station.</td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Installation of Level Sensors in the Modern Huichicocha Station Quillón Subsystem - Mantaro River Basin.</td>
                </tr>

                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Corrective Maintenance Pluvio-Hydrometric Station Chulec Bridge (La Oroya), Río Mantaro Basin.</td>
                </tr>
                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Diagnosis of the SCADA Hydrometeorological System of the Tablachaca Dam. </td>
                </tr>
                <tr>
                  
                  <td width="129">Edegel</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>"Programming of PLCs for the Implementation of Communication via GOES of the Hydrotelemetric Stations of Yuracmayo, Huasca, Sacsa, Entrance Tunel Trasandino, and Milloc", for the control, operation and maintenance of the five EDEGEL Hydrometeorological stations. </td>
                </tr>
                <tr>
                  
                  <td width="129">Sedapal.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>Maintenance and Optimization Service of the Electrical Installations of the La Atarjea Plants.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>Diagnosis and Commissioning of the radial Communication System between the Improved Station and the Tablachaca Control Center (SCADA System).</td>
                </tr>
                <tr>
                 
                  <td width="129">Edegel</td>
                  {/* <td></td> */}
                  {/* <td>2009</td> */}
                  <td>"Historical Download Service of the 5 Telemetric Stations (Yuracmayo, Trans-Andean tunnel, Milloc, Huasca, Sacsa)", for the control, operation and maintenance of EDEGEL's Hydrometeorological networks.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2009</td> */}
                  <td>Maintenance of SCADA Software of the Tablachaca Hydrometeorological Control Center.</td>
                </tr>
                <tr>
                  
                  <td width="129">Telvent-Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>Support Service for the Experimental Operation of the Hydrometeorological System Modernization Project and the Control System of Regulated Lagoons of the Mantaro Hydroelectric Complex of Electroperú.</td>
                </tr>



              </MDBTableBody>
            </MDBTable>
           
            </Container> 
      <EnglishFooterPage></EnglishFooterPage>
   

     </>

  );
}

export default ProjectsEn;


