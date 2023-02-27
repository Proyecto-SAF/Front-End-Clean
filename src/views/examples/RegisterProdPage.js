import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import * as yup from "yup";
let ProductorShema = yup.object().shape({
  nro_renspa: yup.string().required(),
  provincia: yup.string().required(),
  localidad: yup.string().required(),
  description: yup.string().required(),

})

let token=window.localStorage.getItem('LoginPage')
  
 export const setToken= newToken=>{
  
    token=`Bearer ${newToken}`
  
  }

function RegisterProdPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [squares1to6, setSquares1to6] = React.useState("");
  const [descripcion, setDescripcion] = useState('');
  const [nro_renspa, setNro_renspa] = useState('');
  const [localidad, setLocalidad] = useState('');
  
  const [provincia, setprovincia] = useState('');
  const [resgistrado, setResgistrado] = useState(null);
  const [squares7and8, setSquares7and8] = React.useState("");
  const [habilitado, setHabilitado] = useState(false);
  React.useEffect(() => {
    
    document.body.classList.toggle("resgiter-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);

  


  useEffect(()=> {
    ProductorShema.isValid({nro_renspa, provincia, localidad, descripcion})
    .then(
      (valid) => {
        if(valid){
          setHabilitado(true)
        }else{
          setHabilitado(false)
        }
      }
    )
  },[nro_renspa, provincia, localidad, descripcion,  ProductorShema]);



  const history = useHistory()
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  


  const resgistroNuevoProd = async () => {
    let myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");


const raw = {
  nro_renspa,
  provincia,
  localidad,
  descripcion

}
console.log("el cuerpo es:", raw)

const options = {
  method: 'POST',
  headers: {
    "Content-Type":"application/json",
    token
  },
  body: JSON.stringify(raw),
 
}

console.log(token)
const postData = await fetch("https://plataforma-saf-back.onrender.com/productor", options, )
const res = await postData.json()
console.log(res)
setResgistrado(true)

  }

  useEffect(() => {
    if(resgistrado){
      history.push("/profile-page")
    }
  },[resgistrado])




  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
            <Card className="card-signup" data-background-color="blue">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Numero RENSPA"
                        type="text"
                        onChange={(e)=>{setNro_renspa(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_world"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Provincia"
                        type="text"
                        onChange={(e)=>{setprovincia(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Localidad"
                        type="text"
                        onChange={(e)=>{setLocalidad(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons education_paper"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Descripcion"
                        type="text"
                        onChange={(e)=>{setDescripcion(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <Button
                    className="btn-neutral btn-round"
                    color="info"
                    onClick={resgistroNuevoProd}
                    size="lg"
                  >ENVIAR
                  </Button>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Registrarse
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Nesecito ayuda
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default RegisterProdPage;
