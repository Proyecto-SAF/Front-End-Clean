import React, {useState, useEffect} from "react";
import  {Link}  from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import TransparentFooter from "components/Footers/TransparentFooter";
import * as yup from 'yup';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
let schemaDatosLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8,"Como minimo, 8 caracteres")
})


// core components

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [habilitado, setHabilitado] = useState(false);

  
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  },[]);

  useEffect(()=> {
    
    schemaDatosLogin.isValid({email, password})
    .then(
      (valid) => {
        if(valid){
          setHabilitado(true)
        }else{
          setHabilitado(false)
        }
      }
    )
   
  },[email, password]);


  
  const LoginUsu = async () => {
    let myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

const raw = JSON.stringify({
  email,
  password 
  
})

const options = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
}

const postData = await fetch("http://localhost:4000/auth/login", options)
const respu = await postData.json()
console.log(respu)

const {token}=respu
console.log(token)

window.localStorage.setItem(
  'LoginPage', token

)
window.location.href = '/home-page';

  }

 

  return (
    <>
    <ExamplesNavbar />
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/fondo_sing.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Iniciar Sesion
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border  input-group-focus" 
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      color="white"
                      onChange={(e)=>{setEmail(e.target.value)}}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border  input-group-focus" 
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_key-25"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Contraseña"
                      type="password"
                      onChange={(e)=>{setPassword(e.target.value)}}
                    ></Input>
                  </InputGroup>
                
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    disabled={habilitado ? false : true}
                    onClick={LoginUsu}
                    size="lg"
                  >
                     {habilitado ? "Aceptar" : "Aceptar"}
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-neutral btn-round"
              to="/login-page"
              size="lg"
              tag={Link}
            >
              Registrarte
            </Button>
          </div>
        </Container>
      </div>
      <TransparentFooter />
    </>
  );
}

export default SignUp;
