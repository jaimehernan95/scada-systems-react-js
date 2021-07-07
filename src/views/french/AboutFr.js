import React from 'react';
import 'assets/css/clients.css';

// Header and Footer
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';


import {

  Container,

} from "reactstrap";



function AboutFr() {
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
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }} > 
     
      <FrenchNavBar></FrenchNavBar>

      <br /> 

      <Container> 

      <div id="images">
              <div className="title">
              <h2 align="center"> <b>À propos d'APR Control</b></h2>
                      <br />
                      <h4 align="justify"> 
                      APR Control a été créé en 2004 par Arturo Parra Quispe, M.Sc.,pour satisfaire la demande croissante d'automatisation industrielle au Pérou, devenant ainsi le premier PDG de notre société. En 2010, le Dr Carlos Rodríguez Valdez a rejoint l'entreprise en tant que consultant externe tout en développant sa principale activité professionnelle aux Etats-Unis. 
                      </h4>
                      <br></br>
                        <center > 
                        <img alt="Arturo Parra" className="img-rounded img-responsive" src={require("assets/img/ceo/arturo3.jpg")}
                        />
                        </center>

                        <h5 align="center"> <b>M.Sc. Arturo Parra Quispe</b></h5>
                        

                      <h4 align="justify">
                      Avec l'idée d'étendre ses services et de fournir un coup de pouce financier pour accroître ses activités, le Dr Carlos Rodríguez Valdez devient copropriétaire et PDG de notre société en 2016. Aujourd'hui, APR Control est un acteur clé sur le marché péruvien de l'automatisation industrielle .
                      </h4>
                </div>
            </div>
            <br />
           
            
      </Container>
        </div>

      <FrenchFooterPage></FrenchFooterPage>
     
      
      
    </>
    );

}

export default AboutFr;


