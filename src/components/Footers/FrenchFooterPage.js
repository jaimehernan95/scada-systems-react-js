import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FrenchFooterPage = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      
      {/* <MDBFooter color="blue" className="font-small pt-4 mt-4">  */}
      <div style={{ backgroundColor: "#245BCB" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            {/* <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
              Suivez-nous 
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0" href="https://twitter.com/arturoparra1?lang=en" target="_blank">
                <i className="fa fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic" href="https://twitter.com/arturoparra1?lang=en" target="_blank">
                <i className="fa fa-twitter white-text mr-lg-4"> </i>
              </a>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Notre compagnie</strong>
              
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
           <p>
            <a href="/french-page" >
            <img alt="logo"
                  src={require("assets/img/logoapr.png")}
                  style={{ width: "50%" }}
                />
                </a>
                </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Nos Offres</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="automatization-page-fr">Automatisation</a>  
            </p>
            <p>
              <a href="telemetry-page-fr">Télémétrie</a>
            </p>
            <p>
              <a href="telecontrol-page-fr">Telecontrol</a>
            </p>
            <p>
              <a href="scadaSystems-page-fr">Systèmes SCADA</a>
            </p>
            <p>
              <a href="hydrometeorology-page-fr">Hydrométéorologie</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>LIENS UTILES</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="/welcome-page-fr">Qui sommes-nous?</a>
            </p>
            <p>
              <a href="/contactForm-page-fr">Contactez Nous </a>
            </p>
            <p>
              <a href="/engineering-page-fr">Services</a>
            </p>
            <p>
              <a href="/projects-page-fr">Projets</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONTACTEZ-NOUS</strong>
            </h6>

            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
           
            <p>
              <i className="fa fa-home mr-3" /> <img alt="Peru flag"src={require("assets/img/flags/PE.png")}/><br></br> Av. Gral. Recavarren 103, Of. 403<br></br> Miraflores<br></br> Lima, Perú
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> contact@apr-control.com
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> ingenieria@apr-control.com
            </p>
            <p>
              <i className="fa fa-whatsapp mr-3" /> +51 923 239 709 
            </p>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: APR Control Tous droits réservés
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FrenchFooterPage;