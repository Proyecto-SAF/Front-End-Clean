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
import NoticiaFooter from "components/Funcionales/NoticiaFooter.js";

import * as yup from "yup";
let Noticias_Schema = yup.object().shape({
  fecha: yup.date().required("Campo requerido"),
  ubicacion: yup.string().required("Campo requerido"),
  titular: yup.string().required("Campo requerido"),
  subtitulo: yup.string().required("Campo requerido"),
  cuerpo: yup.string().required("Campo requerido"),
});

function ProfileAdminPage() {
  const [imageSrc, setImageSrc] = useState("");
  const formRef = useRef(null);
  const [pills, setPills] = React.useState("2");
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [titular, setTitular] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [img, setImg] = useState("");

  const [habilitado, setHabilitado] = useState(false);

  const inputFileRef = React.useRef();

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imagen = e.target.value;
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
    setImg(imagen);
  };

  useEffect(() => {
    Noticias_Schema.isValid({
      fecha,
      ubicacion,
      titular,
      subtitulo,
      cuerpo,
      img,
    }).then((valid) => {
      if (valid) {
        setHabilitado(true);
      } else {
        setHabilitado(false);
      }
    });
  }, [fecha, ubicacion, titular, subtitulo, cuerpo, img]);

  const resgistroNoticia = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fecha,
      ubicacion,
      titular,
      subtitulo,
      cuerpo,
      img,
    });

    const options = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const postData = await fetch("http://localhost:4000/crearNoticia", options);
    const res = postData.json();
    console.log(res);




    if (habilitado) {
      AlertaModal({
        tituloModal: "Se agregó correctamente la noticia",
        tipoModal: "success",
        colorModal: "green",
        tiempoModal: 2000,
      });
    } else {
      AlertaModal({
        tituloModal: "Hay un error en el formulario",
        tipoModal: "warning",
        colorModal: "red",
        tiempoModal: 2000,
      });
    }



    formRef.current.reset();
  };

  return (
    <>
      <ProfileNavbar />
      <ProfileAdminHeader />
      <Container>
        <Col className="ml-auto mr-auto" md="9">
          <div className="nav-align-center">
            <h2 className="title text-center">
              Este es tu menu para administrar las noticias SAF
            </h2>
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
            <Col className="ml-auto mr-auto" md="9">
              <h2 className="title">
                Marca en este mapa donde se realizara el Programa SAF
              </h2>
              <MapView  />
            </Col>
          </TabPane>
{/*           <TabPane tabId="pills2">
            <Col className="ml-auto mr-auto" md="5">
              <Row className="collections">
                <div className=" text-center">
                  <h2 className="title">Noticias!!</h2>
                  <h4 className="description">
                    En este espacio podras publicar noticias relacionadas con el
                    programa soverania alimentaria Formoseña.
                  </h4>
                  <form ref={formRef} encType="multipart/form-data">
                    <InputGroup className={"input-lg input-group-focus"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons media-1_album"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="img"
                        accept="image/*"
                        placeholder="Imagen"
                        type="file"
                        ref={inputFileRef}
                        onChange={handleImageChange}
                      ></Input>
                    </InputGroup>
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        alt="Previsualización de imagen"
                        width="200"
                      />
                    )}
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
          </TabPane> */}

          <NoticiaFooter/>




        </TabContent>
      </Container>

      <DefaultFooter />
    </>
  );
}

export default ProfileAdminPage;
