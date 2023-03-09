import React, { useState, useEffect, useRef } from "react";
import { AlertaModal } from "../../components/Funcionales/Alertas.js";

import {
  TabPane,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  FormGroup,
} from "reactstrap";

import * as yup from "yup";
let Noticias_Schema = yup.object().shape({
  fecha: yup.date().required("Campo requerido"),
  ubicacion: yup.string().required("Campo requerido"),
  titular: yup.string().required("Campo requerido"),
  subtitulo: yup.string().required("Campo requerido"),
  cuerpo: yup.string().required("Campo requerido"),
});

function NoticiaFooter() {
  const [fechaHoy, setFechahoy] = useState("");
  const [subExist, setSubExist] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const formRef = useRef(null);
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [titular, setTitular] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [img, setImg] = useState("");

  const [habilitado, setHabilitado] = useState(false);

  const inputFileRef = React.useRef();

  const obtenerFecha = () => {
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth() + 1; // los meses se indexan desde 0, así que debes sumar 1
    const anio = hoy.getFullYear();
    const fechaTexto = `${dia}-${mes}-${anio}`;
    setFechahoy(fechaTexto);
    setFecha(fechaTexto);
  };

  React.useEffect(() => {
    /*     document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; */
    obtenerFecha();
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

  const cambioSub = (e) => {
    setSubExist(e.target.value);
  };

  return (
    <>
      <TabPane tabId="pills2">
        <Col className="ml-auto mr-auto" md="5">
          <Row className="collections">
            <div className=" text-center">
              <h2 className="title">Noticias</h2>
              <h4 className="description">
                En este espacio podras publicar noticias relacionadas con el
                programa soverania alimentaria Formoseña.
              </h4>
              <br></br>
              <form ref={formRef} encType="multipart/form-data">
                <h6>Fecha de la publicación</h6>
                <InputGroup className={"input-lg"}>
                  <Input
                    style={{ textAlign: "center" }}
                    disabled
                    placeholder="Fecha"
                    type="text"
                    value={fechaHoy}
                    onChange={(e) => setFechahoy(e.target.value)}
                  ></Input>
                </InputGroup>
                <h6>Ubicación*</h6>
                <InputGroup className={"input-lg"}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons location_pin"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Barrio"
                    type="string"
                    onChange={(e) => {
                      setUbicacion(e.target.value);
                    }}
                  ></Input>
                </InputGroup>
                <h6>Titular*</h6>
                <InputGroup className={"input-lg"}>
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
                <h6>¿Posee subtítulo?*</h6>
                <FormGroup style={{ display: "flex", padding: "0px 80px" }}>
                  <Label for="radio1">
                    <Input
                      id="radio1"
                      type="radio"
                      value="1"
                      checked={subExist === "1" ? true : false}
                      onChange={cambioSub}
                    ></Input>
                    <span className="form-check-sign"></span>
                    Si
                  </Label>
                </FormGroup>
                <FormGroup style={{ display: "flex", padding: "0px 80px" }}>
                  <Label for="radio2">
                    <Input
                      id="subExist"
                      type="radio"
                      value="2"
                      checked={subExist === "2" ? true : false}
                      onChange={cambioSub}
                    ></Input>
                    <span className="form-check-sign"></span>
                    No
                  </Label>
                </FormGroup>
                {subExist === "1" ? (
                  <>
                    <h6>Subtítulo o Referencia*</h6>
                    <InputGroup className={"input-lg"}>
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
                  </>
                ) : subExist === "2" ? (
                  ""
                ) : (
                  ""
                )}
                <h6>Foto o imagen*</h6>
                <br></br>
                <Input
                  id="foto"
                  style={{ textAlign: "center" }}
                  name="img"
                  accept="image/*"
                  placeholder="Imagen"
                  type="file"
                  ref={inputFileRef}
                  onChange={handleImageChange}
                ></Input>
                <br></br>
                {imageSrc && (
                  <img
                    style={{ textAlign: "center" }}
                    src={imageSrc}
                    alt="Previsualización de imagen"
                    width="200"
                  />
                )}
                <br></br>
                <h6>Cuerpo*</h6>
                <div className="textarea-container">
                  <Input
                    style={{ textAlign: "center" }}
                    cols="80"
                    name="name"
                    placeholder="Máx. 500 caractéres"
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
    </>
  );
}

export default NoticiaFooter;
