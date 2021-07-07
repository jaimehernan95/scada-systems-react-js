import React from 'react';
import '../assets/css/clients.css';

// header and footer
import FooterPage from 'components/FooterPage';
import IndexNavbar from 'components/Navbars/IndexNavbar';

import vaisalalogo from 'assets/img/logoPartners/vaisala.jpg';
import omron from 'assets/img/logoPartners/omron.png';
import freewave from 'assets/img/logoPartners/freewave.jpg';
import goesr from 'assets/img/logoPartners/goesr.png';
import zigbee from 'assets/img/logoPartners/zigbee.png';
import phoneix from 'assets/img/logoPartners/phoneix.jpg';
import meanwell from 'assets/img/logoPartners/meanwell.png';
import claro from 'assets/img/logoPartners/claro.png';
import inmarsat from 'assets/img/logoPartners/inmarsat.png';
import schneiderperu from 'assets/img/logoPartners/schneiderperu.jpeg';

import {

  Container,

} from "reactstrap";



function Alliance() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
   document.documentElement.classList.remove("nav-open");
   React.useEffect(() => {
     document.body.classList.add("landing-page");
     return function cleanup() {
       document.body.classList.remove("landing-page");
     };
   });
   
   return (
   <>
     <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }} > 
     
      <IndexNavbar></IndexNavbar>

      <br /> <br />

      <Container> 

      <div id="images">
              <div className="title">
                  <h2 align="center"> <b>Alianzas Tecnológicas</b></h2>
                      <br />
                      <h4 align="justify">Contamos con alianzas tecnológicas sólidas con fabricantes y distribuidores de hardware y software de reconocidas firmas multinacionales, que nos permiten integrar soluciones de alta complejidad tecnológica con equipos de alta confiabilidad para los procesos más críticos.
                      </h4>
                      <h4 align="justify">Citamos las firmas más representativas:
            Vaisala (Datalogger y instrumentación Hidrometeorológica), Omron (PLCs), Freewave Technologies (Radiomodems industrial),Schneider Electric (Equipos de Control y de Comunicaciones), Claro (Comunicación celular GPRS/GSM/EDGE), Inmarsat (Comunicación Satelital por paquetes bidireccional) ,Shenzhen Haccom (Zigbee, Mesh y Radiomodems de corto alcance), Phoenix Contact y Mean Well (Fuentes de Alimentación)
                      </h4>
                </div>
            </div>
            <br />
           
            
    <section className="clients" id="clients">
        <div className="container">

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="https://www.vaisala.com" >
                {/* <img className="img-fluid d-block mx-auto" src={sedapal} alt="Sedapal"/> */}
                <img className="img-fluid" src={vaisalalogo} alt="vaisala"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.omron.com/" >
                <img className="img-fluid" src={omron} alt="omron"/>
              </a>
              </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.se.com/pe" >
                <img className="img-fluid" src={schneiderperu} alt="Schneider"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.freewave.com" >
                <img className="img-fluid d-block mx-auto" src={freewave} alt="freewave"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.inmarsat.com" >
                <img className="img-fluid" src={inmarsat} alt="inmarsat"/>
              </a>
              </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.goes-r.gov" >
                <img className="img-fluid" src={goesr} alt="goes-r"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://zigbeealliance.org" >
                <img className="img-fluid d-block mx-auto" src={zigbee} alt="zigbee"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.phoenixcontact.com/" >
                <img className="img-fluid" src={phoneix} alt="phoneix"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.meanwell.com" >
                <img className="img-fluid d-block mx-auto" src={meanwell} alt="meanwell"/>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="https://www.claro.com.pe" >
                <img className="img-fluid d-block mx-auto" src={claro} alt="claro"/>
              </a>
            </div>


          </div>
        </div>
      

       
      </section>
      </Container>
        </div>

      <FooterPage></FooterPage>
     
      
      
    </>
    );

}

export default Alliance;