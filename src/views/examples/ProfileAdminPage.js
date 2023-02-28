import React, { useState, useEffect, useRef } from "react";
import MapView from "components/Funcionales/MapView";
import { AlertaModal } from "../../components/Funcionales/Alertas.js";
// reactstrap components
import {
  Container,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import ProfileAdminHeader from "components/Headers/ProfileAdminHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import * as yup from "yup";
let Noticias_Schema = yup.object().shape({
  fecha: yup.string().required("Campo requerido"),
  ubicacion: yup.string().required("Campo requerido"),
  titular: yup.string().required("Campo requerido"),
  subtitulo: yup.string().required("Campo requerido"),
  cuerpo: yup.string().required("Campo requerido"),
});

function ProfileAdminPage() {
  const formRef = useRef(null);
  const [pills, setPills] = React.useState("2");
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [titular, setTitular] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");

  const [habilitado, setHabilitado] = useState(false);
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  useEffect(() => {
    Noticias_Schema.isValid({
      fecha,
      ubicacion,
      titular,
      subtitulo,
      cuerpo,
    }).then((valid) => {
      if (valid) {
        setHabilitado(true);
      } else {
        setHabilitado(false);
      }
    });
  }, [fecha, ubicacion, titular, subtitulo, cuerpo]);

  const resgistroNoticia = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fecha,
      ubicacion,
      titular,
      subtitulo,
      cuerpo,
    });

    console.log("el cuerpo es:", raw);

    const options = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const postData = await fetch("http://localhost:4000/crearNoticia", options);
    const res = postData.json();
    console.log(res);
    formRef.current.reset();

    AlertaModal({
      tituloModal: 'Se agrego correctamente la noticia',
      tipoModal: 'success',
      colorModal: 'green',
      tiempoModal: 2000
    })
  };

  return (
    <>
      <ProfileNavbar />
      <ProfileAdminHeader />
      <Container>
        <Col className="ml-auto mr-auto" md="4">
          <div className="nav-align-center">
            <h2 className="title text-center">Marca y Comunica</h2>
            <Nav
              className="nav-pills-info nav-pills-just-icons"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  className={pills === "3" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("3");
                  }}
                >
                  <i className="now-ui-icons location_map-big"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={pills === "2" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("2");
                  }}
                >
                  <i className="now-ui-icons education_paper"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Col>

        <TabContent className="gallery" activeTab={"pills" + pills}>
          <TabPane tabId="pills3">
            <Col className="ml-auto mr-auto" md="5">
              <h2 className="title">
                Marca en este mapa donde se realizara el Programa SAF
              </h2>
            </Col>
            <div className="ml-auto mr-auto" md="4">
              <MapView />
            </div>
          </TabPane>
          <TabPane tabId="pills2">
            <Col className="ml-auto mr-auto" md="5">
              <Row className="collections">
                <div className=" text-center">
                  <h2 className="title">Noticias!!</h2>
                  <p className="description">
                    En este espacio podras publicar noticias relacionadas con el
                    programa soverania alimentaria Formoseña.
                  </p>
                  <form ref={formRef}>
                    <InputGroup className={"input-lg input-group-focus"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_calendar-60"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Fecha"
                        type="date"
                        onChange={(e) => {
                          setFecha(e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"input-lg  input-group-focus"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Ubicacion"
                        type="string"
                        onChange={(e) => {
                          setUbicacion(e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"input-lg input-group-focus"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_bold"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Titulo"
                        type="string"
                        onChange={(e) => {
                          setTitular(e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                    <InputGroup className={"input-lg input-group-focus"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Subtitulo"
                        type="string"
                        onChange={(e) => {
                          setSubtitulo(e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                    <div className="textarea-container">
                      <Input
                        cols="80"
                        name="name"
                        placeholder="Noticia SAF"
                        rows="6"
                        type="textarea"
                        onChange={(e) => {
                          setCuerpo(e.target.value);
                        }}
                      ></Input>
                    </div>
                    <div className="send-button">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={resgistroNoticia}
                        size="lg"
                      >
                        PUBLICAR
                      </Button>
                    </div>
                  </form>
                </div>
              </Row>
            </Col>
          </TabPane>
        </TabContent>
      </Container>

      <DefaultFooter />
    </>
  );
}

export default ProfileAdminPage;
