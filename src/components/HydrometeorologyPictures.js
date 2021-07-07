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
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
    

  {
    src: require("assets/img/hidro/hidro1.png"),
    altText: "Peru",
    caption: "Estacion Hidrometrica Con Comunicacion redundante Radial UHF y Satelital en tiempo real.",
  },
  {
    src: require("assets/img/hidro/hidro2.png"),
    altText: "Espana",
    caption: "Estacion Hidrometrica con sensores de nivel redundante (Piezorresistivo y Radar)"
  },
  {
    src: require("assets/img/hidro/hidro3.png"),
    altText: "Peru",
    caption: "Estación Hidrométrica y pluviométrica automática satelital"
  },
  {
    src: require("assets/img/hidro/hidro4.png"),
    altText: "Peru",
    caption: "Telemetria Via radio modem local y Telecontrol Satelota; NERA Inmarsat MINI M"
  },
  {
    src: require("assets/img/hidro/hidro5.png"),
    altText: "Espana",
    caption: "Estación Pluviométrica Automática Satelital"
  },
  {
    src: require("assets/img/hidro/hidro6.png"),
    altText: "Espana",
    caption: "Estación Hidrométrica Automática Satelital"
  },
  {
    src: require("assets/img/hidro/hidro7.png"),
    altText: "Espana",
    caption: "Sensor de Precipitación con adaptador de Nieve"
  },
  {
    src: require("assets/img/hidro/hidro8.png"),
    altText: "Espana",
    caption: "Sensor de Nivel de Evaporación, Tanque Tipo A"
  },
  {
    src: require("assets/img/hidro/hidro9.png"),
    altText: "Espana",
    caption: "Sensor de Nivel Piezorresistivo"
  },
  {
    src: require("assets/img/hidro/hidro10.png"),
    altText: "Espana",
    caption: "Sensor de Temperatura y Humedad Relativa"
  }


];

function HydrometeorologyEn () {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 900) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 1;
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
     <div className="section pt-o" id="carousel"> 
    
     

     <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                    </a>
                    </Carousel>
                        </Card>
                        </Col>
                    </Row>
                </Container>
      
        </div>
    </>
  );
}

export default HydrometeorologyEn;
