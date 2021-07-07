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
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';


// reactstrap components

// reactstrap components
import {
    Container,
    Row,
    Col
  } from "reactstrap";

// core components

function ExperienceFr() {
  return (
    <>
         <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/bluebg.jpg") + ")" }} > 
            <FrenchNavBar></FrenchNavBar>
            <br /> 
            <div id="images">
                    
                    {/* pictures from the CEO */}
                    <Container className="tim-container">
                        <div id="images">
                            <Container>
                                <div class='title'> 
                                    <h2 align="center" >Un Message de notre PDG </h2>
                                    <h3 className="description" >Dr. Carlos D. Rodríguez Valdez</h3>
                                    </div>
                                    <Row>
                                        <Col className="mr-auto" md="4" sm="6">
                                            <img
                                            alt="Arturo Parra"
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/ceo/carlosCEO.jpg")}
                                            />
               
                                        </Col>
                                        <Col>
                                        <h4 className="description" align="justify">
                                        Chers amis, communauté de contrôle APR:
                                        </h4>
                                        <h4 className="description" align="justify">
                                        Alors que la situation avec la pandémie mondiale causée par le virus SRAS-CoV-2 continue d'évoluer, je tiens à vous faire savoir que nous avons pris des mesures proactives pour protéger notre personnel, nos partenaires et les communautés dans lesquelles nous vivons et travaillons. Nous avons une équipe dédiée à notre réponse pendant cette période difficile; et nous suivons les directives du Ministère de la Santé (MINSA), de l'Organisation Mondiale de la Santé et des localités où nous travaillons.
                                        </h4>
                                        <h4 className="description" align="justify">
                                        Après la fermeture intempestive de nos bureaux à la mi-mars; J'ai le plaisir de vous informer qu'à partir de cette date, tous nos bureaux fonctionnent. Cependant, j'ai voulu garder la plupart du personnel non essentiel en sécurité dans le confort de leur maison et travailler par des moyens virtuels. Bien que les voyages d'affaires et les événements majeurs aient été durement touchés, nous mettons activement en œuvre d'autres moyens pour faire avancer la mission de notre entreprise, même en ces temps incertains.   
                                        </h4>
                                        </Col>
                                    </Row>
                            </Container>
                        </div>
                        <br />
                        <h4 className="description" align="justify"> 
                        Nous passons à des plateformes virtuelles et numériques comme les webinaires. Je demande aux employés d'APR-Control de contacter le service d'assistance numérique du personnel pour plus de détails.
                        </h4>
                        <h4 className="description" align="justify">
                        C'est une période très difficile et incertaine pour nous tous, mais nous ne perdons pas de vue l'importance de notre travail. Nous restons déterminés à aider notre communauté et dévoués à notre mission de recherche d'un avenir prospère. Nous espérons que vous et les vôtres restez en bonne santé; et nous attendons avec impatience des temps meilleurs pour notre travail continu.
                        </h4>
                        <br />
                        <br />
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
                                    <h4 className="description" align="justify">Lima, le 18 octobre 2020</h4>
                    </Container>
                    <br />
                    {/* End pictures from the CEO */}
                </div>
            </div>
    <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default ExperienceFr;
