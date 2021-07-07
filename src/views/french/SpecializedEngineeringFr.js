import React from 'react';
import 'assets/css/clients.css';

// Header and Footer
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';



import {

  Container,

} from "reactstrap";



function SpecializedEngineeringFr() {
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
              <h2 align="center"><b>Ingénierie Spécialisée</b></h2>
                      <br />
                      <h4 align="justify"> 
                      Nous fournissons des services d'ingénierie hautement spécialisés dans les systèmes VFD, les systèmes d'alimentation, les grandes alimentations résonantes et non résonnantes pour l'industrie du traitement thermique par induction, de l'ingénierie de simulation et de l'analyse.
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

export default SpecializedEngineeringFr;


