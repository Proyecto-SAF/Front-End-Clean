import React from "react";
import "../../components/Funcionales/App.css";
import MapUsu from "components/Funcionales/MapUsu";

// reactstrap components
import { Row, Col, Button, Alert, Container } from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexHeader from "components/Headers/IndexHeader";

function HomePage() {
  const [alert3] = React.useState(true);
  React.useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <HomeNavbar />
      <IndexHeader />
      <br></br>
      <Row>
        <div id="Map" className="text-center">
          <Alert color="info" isOpen={alert3}>
            <h2>
              Haz click en el punto mas cercano y veras en que momento se
              realizara el programa soberanía alimentaria formoseña.
            </h2>
          </Alert>
          <MapUsu />
          <br></br>
          <Alert color="info" isOpen={alert3}>
            <Container>
              <h2>Noticias del Programa SAF</h2>
            </Container>
          </Alert>
          <br></br>
        </div>

        <Col md="4">
          <div className="typography-line">
            <div className="logo-container">
              <img alt="..." src={require("assets/img/LogoNoticia.jpg")}></img>
            </div>
          </div>
        </Col>
        <br></br>

        <Col md="6">
          <div className="Text-Center">
            <h2>Exitosa Feria Fresca y Soberanía Alimentaria</h2>
            <h6>
              Organizada por la Dirección de Financiamiento y Desarrollo Local
              de la Municipalidad de la Ciudad, en la jornada del jueves 11 se
              realizó la comercialización de bolsones saludables y pescados de
              mar y mariscos en los stands ubicados en la intersección de las
              calles San Martín y Corrientes.
            </h6>
            <p>
              Desde tempranas horas se acercaron los vecinos de distintos
              barrios a recorrer los puestos y aprovechar las ofertas de
              bolsones saludables y los combos del programa Soberanía
              Alimentaria que, a precios promocionales, comercializó una
              exquisita variedad de pescados de mar y mariscos. Matías Castro,
              responsable del camión de Soberanía Alimentaria, apuntó: “tuvimos
              muy buenas ventas y este viernes vamos a estar instalados en el
              Mercado Frutihortícola. La gente respondíó de manera excelente y
              la incorporación de las tarjetas de crédito y débito como medio de
              pago nos ayuda mucho. Además, quiero agradecer el apoyo y el
              acompañamiento que nos brindó la Municipalidad de la Ciudad con la
              venta de bolsones saludables y la feria de emprendedores.”
            </p>
            <p>
              Por su parte, Sandra Laguna, colaboradora de la Dirección de
              Financiamiento y Desarrollo Local, indicó “estuvimos con la feria
              de emprendedores y la venta de bolsones saludables, acompañando al
              camión de pescado argentino. Esta es una actividad muy positiva
              porque permite que la gente conozca los distintos emprendimientos
              que llevamos adelante, observando la calidad y los precios
              accesibles de las mercaderías que se ofrecen”.
            </p>
            <p>
              A su turno, la señora Gladys Prieto, emprendedora del barrio Juan
              Manuel de Rosas, dijo que “buscamos que las amas de casa ahorren
              tiempo y gas en la cocción sana de los alimentos, a través de los
              excelentes y saludables productos que ofrecemos. Esta iniciativa
              es muy buena, porque no se ven todos los días las promociones de
              pescados de mar, mariscos, frutas y verduras y, además, desde este
              espacio generamos una interacción permanente con las vecinas y
              estamos muy agradecidas con el municipio por darnos la posibilidad
              de hacernos conocer y poder comercializar nuestros productos”.
            </p>
          </div>
          <Col className="ml-auto mr-auto" md="9">
            <Button
              className="btn-round"
              color="info"
              href="/verNoticias"
              size="lg"
            >
              Mas noticias!!!
            </Button>
          </Col>
        </Col>
      </Row>
      <DefaultFooter />
    </>
  );
}

export default HomePage;
