import React from "react";
import MapView from "components/Funcionales/MapView";
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

function ProfileAdminPage() {
  const [pills, setPills] = React.useState("2");
  const [firstFocus, setFirstFocus] = React.useState(false);
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
  return (
    <>
      <ProfileNavbar />
      <ProfileAdminHeader />
      <Container>
        <Col className="ml-auto mr-auto" md="4">
          <div className="nav-align-center">
          <h2 className="title text-center">
                  Marca y Comunica
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
                  <Row>
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
                        placeholder="Titulo"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <div className="textarea-container">
                      <Input
                        cols="80"
                        name="name"
                        placeholder="Noticia SAF"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </div>
                    <div className="send-button">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        PUBLICAR
                      </Button>
                    </div>
                  </Row>
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
