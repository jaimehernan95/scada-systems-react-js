import React from 'react';
import '../assets/css/clients.css';

// header and footer
import FooterPage from 'components/FooterPage';
import IndexNavbar from 'components/Navbars/IndexNavbar';

import {

  Container

} from "reactstrap";



function About() {
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
            style={{ backgroundImage: "url(" + require("assets/img/background/office.jpg") + ")" }} > 
     
      <IndexNavbar></IndexNavbar>

      <br /> <br />

      <Container> 

      <div id="images">
              <div className="title">
                  <h2 align="center"> <b>Acerca de APR Control</b></h2>
                      <br />
                      <h4 align="justify">  APR Control fue establecida en 2004 por el M.Sc. Arturo Parra Quispe, para satisfacer la creciente demanda de automatización industrial en Perú, convirtiéndose en el primer presidente de nuestra empresa.
                      </h4>
                      <br></br>

                        
                         <center> 
                        <img alt="Arturo Parra" className="img-rounded img-responsive" src={require("assets/img/ceo/arturo.jpeg")}
                        />
                        </center>
                         
                         <h5 align="center"> <b>M.Sc. Arturo Parra Quispe</b></h5>
                      
                      <h4 align="justify">
                      En 2010, el Dr. Carlos Rodríguez Valdez se incorporó a la empresa como consultor externo mientras desarrollaba su actividad profesional principal en Estados Unidos. Con la idea en mente de ampliar los servicios y brindar un impulso financiero para conseguir más negocios, el Dr. Carlos Rodríguez Valdez se convierte en copropietario y CEO de nuestra empresa en 2016. Hoy, APR Control es un actor clave en el mercado peruano de automatización industrial. 
                      </h4>
                      <br></br>
           
                </div>
            </div>
            <br />
           
        
      </Container>
        </div>

      <FooterPage></FooterPage>
     
      
      
    </>
    );

}

export default About;