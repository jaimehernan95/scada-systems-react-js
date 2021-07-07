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
import { Button, Container, Row, Col } from "reactstrap";



// core components

function ScadaSystemPictures () {
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
    
    <div id="images">
    
    
      <div className="section section-primary">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/scada/scada1.png")}
                  style={{ width: "90%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
             
              >
                Arquitectura general de sistemas SCADA.
              </Button>
            </Col>

            
      
            <Col className="text-center" md="6">
              <a >
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/scada/scada.png")}
                  style={{ width: "90%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
              
              >
                Arquitectura general de sistemas SCADA.
              </Button>
            </Col>

          </Row>
        </Container>
        </div>
        </div>
        </>
 
  );
}

export default ScadaSystemPictures;
