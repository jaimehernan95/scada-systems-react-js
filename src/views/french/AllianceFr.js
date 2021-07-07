import React from 'react';
import 'assets/css/clients.css';

// Header and Footer
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';

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



function AllianceFr() {
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

   
   return (
   <>
     <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/ceo/perumin5.jpeg") + ")" }} > 
     
      <FrenchNavBar></FrenchNavBar>

      <br /> 

      <Container> 

      <div id="images">
              <div className="title">
                  <h2 align="center"><b>Partenaires Commerciaux</b></h2>
                      <br />
                      <h4 align="justify"> Nous avons de solides alliances technologiques avec des fabricants et des distributeurs de matériel et de logiciels de sociétés multinationales et locales bien connues, ce qui nous permet d'intégrer des solutions de haute complexité technologique avec des équipements très fiables pour les processus les plus critiques. Les entreprises les plus représentatives sont:
                      </h4>
                      <h4 align="justify"> 
                      Vaisala (enregistreur de données et instrumentation hydrométéorologique), Omron (PLC), Freewave Technologies (radiomodems industriels), Schneider Electric (équipement de contrôle et de communication), Claro (communication cellulaire GPRS / GSM / EDGE), Inmarsat (communication satellite en paquets bidirectionnels), Shenzhen Haccom (Radiomodems Zigbee, Mesh et courte portée), Phoenix Contact et Mean Well (alimentations)
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

      <FrenchFooterPage></FrenchFooterPage>
     
      
      
    </>
    );

}

export default AllianceFr;