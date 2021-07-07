import React from 'react';
import 'assets/css/clients.css';

// Header and Footer
import EnglishNavBar from 'components/Navbars/EnglishNavBar';
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';



import {

  Container

} from "reactstrap";



function AllianceEn() {
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
            style={{ backgroundImage: "url(" + require("assets/img/ceo/perumin5.jpeg") + ")" }} > 
     
      <EnglishNavBar></EnglishNavBar>

      <br /><br /> <br /> 

      <Container> 

      <div id="images" >
              <div className="title">
                  <h2 align="center"> <b>About APR Control</b></h2>
                      <br />
                      <h4 align="justify"> 
                        APR Control was established in 2004 by Arturo Parra Quispe, M.Sc., to satisfy the growing demand for industrial automation in Peru, becoming the first CEO of our company. In 2010, Dr. Carlos Rodríguez Valdez joined the company as an external consultant while developing its main professional activity in The US. 
                      </h4>
                      <br></br>

                    
                        <center > 
                        <img alt="Arturo Parra" className="img-rounded img-responsive" src={require("assets/img/ceo/arturo2.jpg")}
                        />
                        </center>
                      
                        <h5 align="center"> <b>M.Sc. Arturo Parra Quispe</b></h5>
                                            
                      <h4 align="justify">
                      With the idea in mind of expanding services and providing a financial boost to procure more business, Dr. Carlos Rodríguez Valdez becomes co-owner and CEO of our company in 2016. Today, APR Control is a key player in the Peruvian market for industrial automation.
                      </h4>
                      <br></br>
                    
                </div>
            </div>
            <br />
           
            
    
      </Container>
        </div>

      <EnglishFooterPage></EnglishFooterPage>
     
      
      
    </>
    );

}

export default AllianceEn;
