import React, {useState, useEffect, useRef} from "react";
import { useHistory } from "react-router-dom";
import { AlertaModal } from "../../components/Funcionales/Alertas.js";

import {
  Label, FormGroup, Input,
  InputGroup, InputGroupAddon,
  InputGroupText, Container,
  Col, Button, Alert
} from "reactstrap";
import * as yup from 'yup';
let ContactoSchema = yup.object().shape({
  nombreCompleto: yup.string().required("Campo requerido"),
  correo: yup.string().email("Correo electronico invalido").required("Campo requerido"),
  documento: yup.string().required("Campo requerido"),
  mensaje: yup.string().required("Campo requerido")

})

function ContactoFooter() {
  const formRef = useRef(null);
  const [mensaje, setMensaje] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [documento, setDocumento] = useState('');
  const [correo, setCorreo] = useState('');
  const [dniArgentino, setDNIArgentino] = useState(0)
  const [firstFocus] = useState(false);
  const [lastFocus] = useState(false);
  const [ModMensaje, setModMensaje] = useState(0);
  const [habilitado, setHabilitado] = useState(false);
  const [resgistrado, setResgistrado] = useState(null);

 useEffect(()=>{
    ContactoSchema.isValid({nombreCompleto, correo, documento, mensaje})
    .then(
      (valid) => {
        if(valid){
          setHabilitado(true)
        }else{
          setHabilitado(false)
        }
      }
    )
  },[nombreCompleto, correo, documento,mensaje])

  const history = useHistory()
  const resgistroContacto = async () => {
    let myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

    const raw = JSON.stringify({
      nombreCompleto,
      correo,
      documento,
      mensaje
    
  
  
  
})

console.log("el cuerpo es:", raw)

const options = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
}


const postData = await fetch("http://localhost:4000/contacto", options)
const res = postData.json()
console.log(res)
setResgistrado(true)
formRef.current.reset();

AlertaModal({
  tituloModal: 'Se agrego correctamente tu reclamo',
  tipoModal: 'success',
  colorModal: 'green',
  tiempoModal: 2000
})
  }

  
  useEffect(() => {
    if(resgistrado){
      history.push("/landing-page")
    }
  },[resgistrado])




  const cambioMensaje = e => {
    setModMensaje(e.target.value);
  }

  const cambioDni = e => {
    setDNIArgentino(e.target.value);
  }
  return (
    <>
      <div className="section section-contact-us text-center">
        <Container>
          <h2 className="title">Contáctenos</h2>
          <p className="description">Para comunicarte con la Subsecretaría de Defensa al Consumidor complete el siguiente formulario.</p>
          <form ref={formRef}>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
              <h6>Tu Nombre y Apellido completo*</h6>
              <InputGroup
                className={
                  "input-lg" + (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Máximo 70 caracteres"
                  type="text"
                  onChange={(e)=>{setNombreCompleto(e.target.value)}}
                ></Input>
              </InputGroup>
              <br></br>
              <h6>Tu Correo Electrónico*</h6>
              <InputGroup
                className={
                  "input-lg" + (lastFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="example@email.com"
                  type="text"
                  onChange={(e)=>{setCorreo(e.target.value)}}
                ></Input>
              </InputGroup>
              <br></br>
              <h6>¿Posee documento de identidad Argentino?*</h6>
              <FormGroup style={{ display: "flex", padding: "0px 80px" }}>
                <Label for="radio1">
                  <Input
                    id="radio1"
                    type="radio"
                    value="1"
                    checked={dniArgentino === "1" ? true : false}
                    onChange={cambioDni}
                  >
                  </Input>
                  <span className="form-check-sign"></span>
                  Si
                </Label>
              </FormGroup>
              <FormGroup style={{ display: "flex", padding: "0px 80px" }}>
                <Label for="radio2">
                  <Input
                    id="radio2"
                    type="radio"
                    value="2"
                    checked={dniArgentino === "2" ? true : false}
                    onChange={cambioDni}
                  >
                  </Input>
                  <span className="form-check-sign"></span>
                  No
                </Label>
              </FormGroup>
              {dniArgentino === "1" ?
                <>
                  <h6>Escribí tu número de CUIL*</h6>
                  <InputGroup className="input-lg">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons business_badge"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Sólo números, sin guiones ni espacios"
                      type="text"
                      onChange={(e)=>{setDocumento(e.target.value)}}
                    ></Input>
                  </InputGroup>
                  <br></br>
                </>
                : dniArgentino === "2" ?
                  <>
                    <h6>Escribí tu número de documento extranjero*</h6>
                    <InputGroup className="input-lg">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        onChange={(e)=>{setDocumento(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <br></br>
                  </> : ""

              }
              <h6>¿Por qué motivo nos escribes?*</h6>
              <InputGroup
                className="input-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="-- Seleccione --"
                  type="select"
                  onChange={cambioMensaje}
                >
                  <option value="0" defaultValue disabled>-- Seleccione --</option>
                  <option value="1" aria-checked={ModMensaje === 1 ? 1 : 0}>Quiero sugerirles algo para mejorar el programa Soberania Alimentaria Formoseña</option>
                  <option value="2" aria-checked={ModMensaje === 2 ? 1 : 0}>Hay información errónea o desactualizada</option>
                  <option value="3" aria-checked={ModMensaje === 3 ? 1 : 0}>Denuncia</option>
                </Input>
              </InputGroup>
              <br></br>
              {ModMensaje === 0 ? "" :
                <>
                  <h6>Tu comentario*</h6>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name="name"
                      placeholder="Tu mensaje para nosotros"
                      rows="4"
                      type="textarea"
                      onChange={(e)=>{setMensaje(e.target.value)}}
                    ></Input>
                  </div>
                </>
              }
              <div className="send-button">
                <Button
                  className="btn-round"
                  color="info"
                  onClick={resgistroContacto}
                  size="lg"
                >
                  ENVIAR
                </Button>
              </div>
              <br></br>
            </Col>
          </form>
          <Alert color="dark">
            <h6 className="alert-heading description" style={{ padding: "3px" }}>
              <i className="now-ui-icons travel_info" style={{ padding: "6px" }}></i>
              Señor Consumidor y/o Usuario:
            </h6>
            <p className="description">Se informa tambien que para una respuesta más inmediata, puede acercarse a la Oficina de esta Subsecretaría de Defensa al Consumidor y Usuario de la Provincia de Formosa, sita en José María Uriburu Nº 820 - 2º Piso, en horario de Atención al Público, o comunicarse al Teléfono (0370) 4436-198 para ser asesorado personalmente y en caso de corresponder, formalizar el trámite administrativo pertinente.</p>
            <hr />
            <h6 className="mb-0 description">
              "HACEMOS VALER SUS DERECHOS"
            </h6>
          </Alert>
          <br></br>
        </Container>
      </div>
    </>
  );
}




export default ContactoFooter;