import React, { useEffect, useState } from "react";
import { Image, Transformation } from "cloudinary-react";

import {
  Badge,
  Container,
  Row,
  Button,
  Col,
  Nav,
  NavItem,
  NavLink,
  Card,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

function CatalogoPage() {
  

  const baseUrl = "https://node-saf-api.onrender.com";

  const fetchSinToken = (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === "GET") {
      return fetch(url);
    } else {
      return fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  };

  const [data, setData] = useState([]);
  const [punto, setPunto] = useState([]);

  const cargarProductos = async (punto) => {
    const resp = await fetchSinToken(
      punto
        ? `api/v1/productos?desde=0&limite=100&punto=${punto}`
        : `api/v1/productos?desde=0&limite=100`
    );

    const { productos, categorias, destinos } = await resp.json();

    if (resp.ok) {
      setData(productos);
      setPunto(destinos);
    }
  };
  useEffect(() => {
    cargarProductos();
  }, []);
  console.log(data);
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/productos-FOND.jpg") + ")",
          }}
        ></div>
        <ExamplesNavbar />
        <Container>
          <div color="info" className=" d-flex align-items-center justify-content-center">
            <h1>Ferias Habilitadas</h1>
          </div>
          <Nav className="justify-content" role="tablist" tabs>
            {!punto? (
                <div className="vacio">
                  <p>Nada por aquí... 📋</p>
                </div>
              ):(punto.map(item=>(<NavItem>
                <NavLink className="active mb-3" key={item.uid} onClick={()=>{cargarProductos(item.uid)}}>
                  <i className="now-ui-icons location_pin"></i>
                  {`${item.nombre}`}
                </NavLink>
              </NavItem>)))}
          </Nav>
          <div id="images" >
            <Badge color="info" className="text-center">
              <h3>Productos disponibles</h3>
            </Badge>
            <Row className="text-center ml-auto mr-auto" lg="6" md="8">
              {!data.length ? (
                <div className="vacio">
                  <p>Cargando...</p>
                  <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
  </div>
</div>
                </div>
              ) : (
                data.map((producto) => (
                  <Col lg="2" >
                    <Card key={producto.id} color="info">
                      <h6>{producto.nombre}</h6>
                      <Image cloudName="dawjd5cx8" publicId={producto.img}>
                        <Transformation
                          height="120"
                          width="120"
                          aspectRatio="1.5"
                          crop="fill"
                        />
                      </Image>
                      <p>  {producto.descripcion}</p>
                      <p>Precio: $ {producto.precio}</p>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </div>
          
        </Container>
      </div>

      <DefaultFooter />
    </>
  );
}

export default CatalogoPage;
