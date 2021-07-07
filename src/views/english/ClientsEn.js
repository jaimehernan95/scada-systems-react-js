import React from 'react';
import 'assets/css/clients.css';

import sedapal from 'assets/img/logoPartners/sedapal.jpeg';
import electroperu from 'assets/img/logoPartners/electroperu.png';
import schneiderperu from 'assets/img/logoPartners/schneiderperu.jpeg';
import edegelperu from 'assets/img/logoPartners/edegelperu.png';

// Header and Footer
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';

import {

  Container,

} from "reactstrap";


const ClientsEn = () => {
  
  return (
      <>
      <div className="section section-image section-login"
      style={{ backgroundImage: "url(" + require("assets/img/antoine-barres5.jpg") + ")" }} > 

      <EnglishNavBar></EnglishNavBar>
      <br />

      <Container>
          <div id="images">
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white"> Clients</h2>
                    <br />
                    <h4>Among the main clients we have:
                    </h4>
               </div>
           </div>

        <section className="clients" id="clients">
          <div className="container">

            <div className="row">
                <div className="col-md-3 col-sm-6">
                  <a href="http://www.sedapal.com.pe" >
                    {/* <img className="img-fluid d-block mx-auto" src={sedapal} alt="Sedapal"/> */}
                    <img className="img-fluid" src={sedapal} alt="Sedapal"/>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="http://www.electroperu.com.pe" >
                    <img className="img-fluid" src={electroperu} alt="Electroperu"/>
                  </a>

                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="https://www.se.com/pe" >
                    <img className="img-fluid" src={schneiderperu} alt="Schneider"/>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="https://www.enel.pe/" >
                    <img className="img-fluid d-block mx-auto" src={edegelperu} alt="Edegel"/>
                  </a>
                  </div>
              </div>
          </div>
     
        </section>
        </Container>
        </div>
        <EnglishFooterPage></EnglishFooterPage>
      
    </>
    );

}

export default ClientsEn;