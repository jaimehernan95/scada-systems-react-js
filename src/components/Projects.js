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
import {  Container } from "reactstrap";
import { MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

// core components

function Projects() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/projectdone.jpeg") + ")" }} > 
            <IndexNavbar></IndexNavbar>
            <br />  <br />
    

        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Proyectos Ejecutados </h2>
                    <br />
                    <h4 align="justify">La división de Ingeniería y proyectos ofrece servicios integrales desde la identificación del proyecto, ingeniería conceptual, factibilidad técnica, ingeniería básica y de detalle, procura, supervisión, construcción, precomisionamiento, comisionamiento y puesta en marcha. Estamos organizados para brindar servicios especializados que cubran expectativas, otorgándoles un alto nivel de eficiencia, generando valor para nuestros clientes.
                        Nuestra empresa es especialista en la ejecución de proyectos de:
                    </h4>
                    <br />
                    <ul>
                        <li><h4>Estaciones Hidrométricas y Meteorológicas Automáticas</h4>  </li>
                        <li><h4>Telemetría y telecontrol  radial, celular y satelital</h4>  </li>
                        <li><h4>Estaciones de Medición y control con PLCs</h4>  </li>
                        <li><h4>Consultoría y Desarrollo de Sistemas SCADA</h4>  </li>
                    </ul>
                    <h4> Entre los principales proyectos ejecutados tenemos:</h4>
                    <br/>
            </div>
        </Container>
        </div>
        < br />
        
        <Container> 

            <MDBTable>
              <MDBTableHead color="p-4 mb-3 bg-dark text-white">
                <tr>
                    
                    <th>Compañía</th>
                    {/* <th>Mes</th> */}
                    {/* <th>Año</th> */}
                    <th>Título Del Proyecto</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td>Octubre</td> */}
                  {/* <td>2013</td> */}
                  <td>Adquisición e Instalación de sistemas de Comunicación Satelital (Terminales INMARSAT con tecnología  BGAN) entre las estaciones de control y el Centro de Control SCADA. Presa Tablachaca.</td>
                
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td>Mayo</td>
                  // <td>2013</td> */}
                  <td>Mantenimiento Correctivo de Comunicación Radial y Satelital GOES Subsistema Mejorada – Tablachaca</td>
                  
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td>
                  // <td>2012 - 2013</td> */}
                  <td>Mantenimiento del Sistema SCADA OASYS denominado Sistema Hidrometeorológico Moderno </td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012 - 2013</td> */}
                  <td>Mantenimiento del Sistema SCADA OASYS denominado Sistema Hidrometeorológico Moderno </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012 - 2013</td> */}
                  <td>Modernización del Sistema SCADA Hidrometeorológico - Presa Tablachaca e Integración de Estaciones de Control Hueghue, Yanacocha Palcán, Huacracocha SW Lago Junín y Huacracocha subcuenca Huari. </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Adquisición e Instalación de Equipos de la Estación Hidrométrica Casapatos</td>
                </tr>

                <tr>
                  
                  <td width="129"> Sedapal</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Integración de la red de PLC’s en comunicación MODBUS TCP de los Filtros de la Planta Nro 1 al SCADA Oasys de las Plantas de La Atarjea. </td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2012</td> */}
                  <td>Mantenimiento Red Hidrometeorológica Modernizada de la Cuenca de Rio Mantaro. </td>
                </tr>

                <tr>
                  
                  <td width="129">Sedapal</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Consultoría: Revisión de la parte de automatización del proyecto: Rehabilitación y mejoramiento de los decantadores de la planta Nro 1 - La Atarjea.</td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Mediciones Hidrométricas (Aforos) en la Época de Avenidas Estaciones Hidrológicas Cuenca Río Mantaro.</td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Mediciones Básicas (Control Topográfico, Piezométrico y Aforos) en Época de Avenida del Primer Llenado Presa Huacracocha – Huari Cuenca Río Mantaro.</td>
                </tr>
                
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Aforos de la Estación Hidrométrica la Mejorada Cuenca Río Mantaro.</td>
                </tr>

                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Instalación de Sensores de Nivel en la Estación Moderna Huichicocha Subsistema Quillón – Cuenca río Mantaro.</td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Mantenimiento Correctivo Estación Pluvio-Hidrométrica Puente Chulec (La Oroya), Cuenca Río Mantaro. </td>
                </tr>
                <tr>
                  
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2011</td> */}
                  <td>Diagnóstico del Sistema SCADA Hidrometeorológico de la Represa Tablachaca. </td>
                </tr>
                <tr>
                  
                  <td width="129">Edegel</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>“Programación de PLC’s para la Implementación de la Comunicación vía GOES de las Estaciones Hidrotelemétricas de Yuracmayo, Huasca, Sacsa, Entrada Tunel Trasandino y Milloc”, para el control, operación y mantenimiento de las cinco estaciones Hidrometeorológicas de EDEGEL. </td>
                </tr>
                <tr>
                  
                  <td width="129">Sedapal.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>Servicio de Mantenimiento y Optimización de las Instalaciones Eléctricas de las Plantas La Atarjea.</td>
                </tr>
                <tr>
                 
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>Diagnóstico y Puesta en Funcionamiento del Sistema de Comunicación radial entre la Estación Mejorada y el Centro de Control de Tablachaca (Sistema SCADA).</td>
                </tr>
                <tr>
                 
                  <td width="129">Edegel</td>
                  {/* <td></td> */}
                  {/* <td>2009</td> */}
                  <td>“Servicio de Descarga de Históricos de las 5 Estaciones Telemétricas (Yuracmayo, túnel trasandino, Milloc, Huasca, Sacsa)”, para el control, operación y mantenimiento de las redes Hidrometeorológicas de EDEGEL.</td>
                </tr>
                <tr>
                
                  <td width="129">Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2009</td> */}
                  <td>Mantenimiento de Software SCADA del Centro de Control Hidrometeorológico Tablachaca. </td>
                </tr>
                <tr>
                  
                  <td width="129">Telvent-Electroperú S.A.</td>
                  {/* <td></td> */}
                  {/* <td>2010</td> */}
                  <td>Servicio de Apoyo para la Operación Experimental del Proyecto de Modernización del Sistema Hidrometeorológico y del Sistema de Control de las Lagunas Reguladas del Complejo Hidroeléctrico Mantaro de Electroperú</td>
                </tr>



              </MDBTableBody>
            </MDBTable>
           
            </Container> 
      <FooterPage></FooterPage>
   

     </>

  );
}

export default Projects;


