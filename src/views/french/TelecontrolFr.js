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

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Header and Footer
import FrenchNavBar from 'components/Navbars/FrenchNavBar';
import FrenchFooterPage from 'components/Footers/FrenchFooterPage';


// core components

function TelecontrolFr () {
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
            style={{ backgroundImage: "url(" + require("assets/img/background/antena.jpg") + ")" }} > 
     <FrenchNavBar></FrenchNavBar>
     <br /> 
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 class="p-3 mb-2 bg-info text-white" > Surveillance par satellite et à distance </h2>
                    <br />
                    <h4>
                    Aujourd'hui, les entreprises ont de plus en plus besoin d'un contrôle à distance de manière sûre, directe et en temps réel pour le fonctionnement de leurs processus et installations chaque fois que les stations distantes sont largement dispersées géographiquement et sans couverture du réseau de téléphonie cellulaire. La solution de télécommande par satellite en temps réel permet d'obtenir des données de divers capteurs et alarmes sur l'état des installations.
                    </h4>
                    <br />
                    <h4>
                    L'un des avantages de la télécommande est que les ingénieurs ou les directeurs d'usine peuvent contrôler efficacement leurs installations et prendre les bonnes décisions en temps réel, ce qui réduit le coût du déplacement du personnel technique vers des stations distantes.
                    APR CONTROL SRL a 10 ans d'expérience dans le développement de solutions de télécommande radio et satellite pour les exigences les plus exigeantes de nos clients, en sélectionnant correctement l'équipement de contrôle, d'automatisation et de télécommunications pour une intégration optimale entre les stations distantes et le centre de contrôle.
                    Applications typiques dans les barrages, les puits de pompage, les stations hydrométéorologiques et les systèmes de sécurité des stations distantes.
                    </h4>
                    <br />
                    <h4>
                    Ouverture / fermeture des barrages pour réguler les barrages,
                    Activation du système de vidéosurveillance,
                    Ouverture et fermeture de la vanne,
                    Démarrage et arrêt des pompes et
                    Stations hydrométéorologiques.
                    </h4>
                    <br />
                    <h4>Autres variantes des différentes applications de télécommande:</h4> 
            </div>

            <div className="title"  >
                <h2 class="p-3 mb-2 bg-success text-white">  Sistemas de telecontrol Celular  </h2>
                    <br />
                    <h4>
                    Ce type de solution de télémétrie et de télécommande cellulaire utilise le service GPRS fourni par les sociétés de téléphonie mobile. Le système de communication se fait par Internet et chaque station distante transmet périodiquement par ce moyen au serveur du système SCADA du Centre de contrôle les informations des données des capteurs des stations distantes. Ce type de communication est applicable en cas de couverture du réseau de téléphonie mobile à technologie GSM / GPRS.
                    </h4>
                    <h4>
                    Les modems GPRS ont enregistré une adresse IP Internet fixe (IP publique) à laquelle ils se connecteront en utilisant le protocole TCP / IP. Une fois que le canal de communication entre la station distante, le fournisseur de services mobiles et le serveur du système SCADA (auquel sera associé l'adresse IP Internet public fixe) est établi, l'échange de données commence. Ensuite, ils sont stockés dans une base de données historique, pour consultation et exploitation ultérieures.
                    </h4>
              <br />
            </div>

            <div className="title"  >
                <h2 class="p-3 mb-2 bg-success text-white">  Système de surveillance à distance </h2>
                    <br />
                    <h4>
                    Dans ce type de solution, les stations de mesure et de contrôle sont interrogées séquentiellement par la station de supervision et de contrôle. La station de supervision et de contrôle établit une communication automatique et à la demande de l'utilisateur du centre de contrôle pour obtenir des données des capteurs ou envoyer une commande aux stations de mesure et de contrôle.
                    La plate-forme SatSCADA est une plate-forme de surveillance à distance par satellite de bout en bout opérant sur le réseau satellite Inmarsat connecté au puissant serveur SatSCADA.
                    </h4>
              <br />
            </div>

        </Container>
    </div>
    </div>
            {/* From here start the pictures */}
    
      <div className="section section-primary">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/satelital.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Architecture de téléconduite et de télémétrie par satellite</b></h4>

            </Col>
            <Col className="text-center" md="6">
              <a>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/radial.png")}
             
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Systèmes de télécommande radiale et satellite</b></h4>
 
            </Col>

            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/gprs.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Architecture de communication de télémétrie</b></h4>
            </Col>

            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/telecontrol/controlsat.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <h4><b>Communication radio UHF</b></h4>
            </Col>

          </Row>
        </Container>
      </div>{" "}
      <FrenchFooterPage></FrenchFooterPage>
    </>
  );
}

export default TelecontrolFr;
