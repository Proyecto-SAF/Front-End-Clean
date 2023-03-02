import React,{useEffect, useState } from "react";
import "../../components/Funcionales/App.css";
import axios from "axios";

// reactstrap components
import { Row, Col} from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import NoticiasPageHeader from "components/Headers/NoticiasPageHeader";

function HomePage() {
  
  React.useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/noticias");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <HomeNavbar />
      <NoticiasPageHeader />
      <br></br>
      <Row>
      
      <div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
        </div>
        {/* <Col md="4">
          <div className="typography-line">
            <div className="logo-container">
              <img
                alt="..."
                src={require("assets/img/LogoNoticia-3.jpg")}
              ></img>
            </div>
          </div>
        </Col>
        <br></br>
        <Col md="6">
          <div className="Text-Center">
            <h2>🗓CRONOGRAMA SEMANAL</h2>
            <h6>✅️JUEVES 10/11</h6>

            <p>
              📍 Av. Néstor Kirchner N°1.855 📍Av. Nestor Kirchner N° 5.595 📍
              Localidad TATANE ⛔️NO estaremos frente a la E.P.E.S N°30 (
              Jurisdicción N°5)
            </p>
            <h6>✅️VIERNES 11/11</h6>
            <p>📍 Localidad LAISHÍ</p>
            <h6>✅️SABADO 12/11</h6>
            <p>
              📍Av. Nestor Kirchner N° 1855 📍Av. Nestor Kirchner N° 5.595 📍Av.
              Soldado Formoseño frente a la E.P.E.S N °30 ( Jurisdicción N°5)
            </p>
          </div>
        </Col>
        <br></br>
        <Col md="4">
          <div className="typography-line">
            <div className="logo-container">
              <img alt="..." src={require("assets/img/LogoNoticia-2.jpg")}></img>
            </div>
          </div>
        </Col>
        <br></br>
        <Col md="6">
          <div className="Text-Center">
            <h2>NUTRIENDO HÁBITOS </h2>
            <h6>
              📌🏫Escuela N°501 del barrio Venezuela Con la presencia del
              Subsecretario de Defensa al Consumidor y Usuario Arq. Edgar Perez,
              en el día de hoy se llevó a cabo LA FERIA DE ALIMENTOS dando por
              finalizado la primera etapa de la propuesta de educacion
              alimentaria en el ámbito escolar NUTRIENDO HÁBITOS.
            </h6>
            <p>
              En este marco se desarrolló una exposición de ALIMENTOS en la
              escuela N°501 del barrio Venezuela, en el cual los niños y niñas
              del 5to grado mostraron lo aprendido durante este ciclo mediante
              juegos didácticos de cada clase.
            </p>
            <p>
              Agradecemos el acompañamiento de la Lic. en Nutrición Gabriela
              Zanin del Área Programa Escuelas de la Planta procesadora de
              Alimentos Nutrifor, teniendo en cuenta que desde el gobierno de la
              provincia a través de la Planta se realizan entrega de productos
              para los servicios nutricionales de los alumnos de toda la
              provincia.
            </p>
            <p>
              🔵Gracias al Director Pedro Avalos y a la Vice directora Aquino
              Dionisa por el grato recibimiento 🔵"No hay mejor espacio de
              enseñanza que el que brinda la escuela pública con sus políticas
              en materia de educación"
            </p>
          </div>
        </Col>
        <br></br>
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
        </Col> */}
          
      </Row>
      <DefaultFooter />
    </>
  );
}

export default HomePage;
