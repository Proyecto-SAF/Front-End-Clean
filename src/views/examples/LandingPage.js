import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ContactoFooter from "components/Funcionales/ContactoFooter";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Que es el programa SAF</h2>
                <h5 className="description">
                  El programa SAF o soberania alimentaria formoseña es un
                  programa iniciado por nuestra provincia para poder fomentar la
                  venta de materia prima de la zona producida por productores
                  locales a las personas eliminando los intermadiarios y
                  acercando a los conprovincianos los productos frescos y
                  naturales.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Diez localidades visitadas, más 40.500 kilos de alimentos
                      comercializados y más de 3400 kilómetros recorridos con
                      logística que permite conservar los alimentos frescos"{" "}
                      <br></br>
                      <br></br>
                      <small>-Leandro, Gimenez</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")",
                    }}
                  ></div>
                  <h3>
                    Soberanía Alimentaria Formoseña busca garantizar el acceso a
                    los alimentos a un precio justo
                  </h3>
                  <p>
                    Este Programa fue impulsado por el Gobierno provincial, a
                    través de la Subsecretaría de Defensa al Consumidor y
                    Usuario en 2020, con el objetivo principal de fortalecer las
                    cadenas de producción local, disponiendo de un esquema de
                    comercialización móvil de alimentos en el territorio
                    provincial. La finalidad se basó en que los productos
                    lleguen a la mesa de los formoseños a precios justos,
                    acortando la cadena de comercialización en beneficio del
                    bolsillo de los consumidores, eliminando las
                    intermediaciones distorsivas y la falta de abastecimiento de
                    alimentos a precios acordados desde el productor o
                    comercializador local directo al consumidor.
                  </p>
                  <p>
                    A la fecha, esta acción del Gobierno cumplió el objetivo de
                    que más de 40.500 kilos de alimentos llegaran a la mesa de
                    numerosas familias formoseñas a precios justos y accesibles,
                    así materializando la justicia social y la soberanía
                    alimentaria desde el Modelo Formoseño, ya que los productos
                    alimenticios de consumo masivo se pusieron a disposición
                    en10 localidades en un trabajo conjunto y coordinado con
                    cada Municipio.
                  </p>
                  <p>
                    Un elemento estratégico en este esquema de comercialización
                    está dado por la incorporación del camión térmico de
                    Soberanía Alimentaria Formoseña que lleva más de 3400
                    kilómetros recorridos en el territorio provincial, buscando
                    a las localidades de origen de los productores paipperos las
                    verduras, hortalizas y frutas que, junto a otros alimentos
                    frescos que forman parte de la propuesta alimentaria, viajan
                    refrigerados sin perder su calidad y mejorando su
                    conservación hasta el momento mismo de exhibirlos a la venta
                    en cada localidad. Esta manera práctica de reducir costos de
                    fletes que muchas veces impactan negativamente en el precio
                    final del producto continuará hasta haber visitado cada
                    rincón de la provincia.
                  </p>
                </Col>
                <Col md="5">
                <br></br>
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/prosuctos.jpg") + ")",
                    }}
                  ></div>
                  <h3>Los productos</h3>
                  <p>
                    Los productos disponibles se incorporan en base a la demanda
                    de dichos alimentos. En ese sentido, entre la variedad se
                    encuentran cortes cárnicos de la categoría novillo, por
                    medio de la participación de la red de carnicerías “Los
                    Nenecos”; verduras, hortalizas y frutas gracias al consorcio
                    “El Paippero de Riacho” y lácteos de la distribuidora
                    “Cubo”, con productos de “La Verónica”. También hay arroz
                    0000 marca Mitaí, arroz Mitaí Premium 00000, arroz AF 00000,
                    azúcar Mitaí de producción formoseña, comercializado en el
                    Parque Industrial; harina de maíz en dos variedades de
                    Molinos Villafañe y las garrafas de GLP de 10 kilogramos, a
                    través de la empresa provincial REFSA Gas. Asimismo se
                    incorporaron stands de degustación de platos nutricionales.
                  </p>
                  
                </Col>
                <div className="separator separator-primary"></div>
                <br></br>
                
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pago.webp") + ")",
                    }}
                  ></div>
                  <h3>Herramientas de pago</h3>
                  <p>
                    La accesibilidad a los alimentos está garantizada no sólo
                    por el precio y la calidad, sino también por medio de un
                    acuerdo con el Banco Formosa. De esta manera, los
                    consumidores pueden abonar sus compras de verduras,
                    hortalizas y frutas, cortes cárnicos, arroz y azúcar con la
                    Tarjeta Alimentar y con la tarjeta Chigüé del Banco Formosa
                    hasta en tres pagos sin interés, además de otras tarjetas
                    que recibe la comercialización.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
       
        <ContactoFooter />
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
