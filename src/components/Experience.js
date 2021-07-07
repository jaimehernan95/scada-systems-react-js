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

// reactstrap components
import {
    Container,
    Row,
    Col
  } from "reactstrap";

// core components

function Experience() {
  return (
    <>
         <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }}
            > 
            <IndexNavbar></IndexNavbar>
            <br /> 
            <div id="images">
                    
                    {/* pictures from the CEO */}
                    <Container className="tim-container">
                        <div id="images">
                            <Container>
                                <div className="title">
                                    <h2 align="center"><b>Mensaje del CEO</b></h2>
                                    <h3 className="description" >Dr. Carlos D. Rodríguez Valdez</h3>
                                    </div>
                                    <Row>
                                        <Col className="mr-auto" md="4" sm="6">
                                            <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/ceo/carlosCEO.jpg")}
                                            />
               
                                        </Col>
                                        <Col>
                                        <h4 className="description">Estimados amigos, comunidad de APR-control:</h4>
                                        <h4 className="description" align="justify">A medida de que la situación con la pandemia global causada por el virus SARSCoV-2 continúa evolucionando, quiero comunicarles que hemos tomado medidas proactivas para proteger a nuestro personal, socios y las comunidades donde vivimos y trabajamos. Contamos con un equipo dedicado a nuestra respuesta durante este momento lleno de desafíos; y estamos siguiendo la orientación del Ministerio de Salud (MINSA), de la Organización Mundial de la Salud y de las localidades donde trabajamos.</h4>
                                        <h4 className="description" align="justify">
                                        Luego del cierre intempestivo de nuestras oficinas a mediados del mes de marzo; me satisface comunicarles que a partir de la fecha todas nuestras oficinas están operando. Sin embargo, he querido mantener a la mayoría de personal no esencial segura en la comodidad de su casa y trabajando a través de medios virtuales.
                                        </h4>
                                        </Col>
                                    </Row>
                            </Container>
                        </div>
                        <h4 className="description" align="justify">
                        Si bien los viajes de trabajo y los eventos importantes se han visto bastante afectados, estamos implementando activamente otras formas de hacer que la misión de nuestra empresa avance incluso en estos tiempos inciertos.
                        </h4>
                        <h4 className="description" align="justify"> 
                        Estamos cambiando a plataformas virtuales y digitales como seminarios web. A los empleados de APR-Control les solicito que se comuniquen con el servicio de ayuda digital para el personal para obtener más detalles. 
                        </h4>
                    
                        <h4 className="description" align="justify"> 
                        Éste es un momento muy difícil e incierto para todos, pero no perdemos de vista la importancia de nuestro trabajo. Seguimos comprometidos en ayudar a nuestra comunidad y dedicados a nuestra misión de buscar un futuro próspero. Esperamos que usted y los suyos se mantengan saludables; y esperamos mejores tiempos para nuestro trabajo continuo, juntos.
                        </h4>
                        <br></br>
                        <Row>
                                        <Col className="mr-auto" md="4" sm="6">
                                            <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/ceo/signature.jpg")}
                                            />
               
                                        </Col>
                                    </Row>
                                    <br />
                                    <h4 className="description"> Lima, 18 de octubre de 2020</h4>
                    </Container>
                    <br />
                    {/* End pictures from the CEO */}
                </div>
            </div>
    <FooterPage></FooterPage>
    </>
  );
}

export default Experience;
