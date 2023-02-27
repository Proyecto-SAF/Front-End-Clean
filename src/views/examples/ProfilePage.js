import React from "react";
import Iframe from "react-iframe";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import Agenda from "components/Agenda/Agenda";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import EditorTexto from "components/Funcionales/EditorTexto";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
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
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
        
            <h3 className="title">Sobre Mi</h3>
            <h5 className="description">
              Soy un productor oriundo de Riacho He he pongo todo de mi en lo
              que hago siento que mi trabajo habla por mi mismo y mi produccion
              de igual manera.
            </h5>
            <Col className="ml-auto mr-auto" md="6">
              <h4 className="title text-center">
                Tus actividades
              </h4>
              <div className="nav-align-center">
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
                        <i className="now-ui-icons ui-1_calendar-60"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons location_map-big"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <i className="now-ui-icons text_caps-small"></i>
                      </NavLink>
                    </NavItem>
                </Nav>
              </div>
            </Col>
            <TabContent className="gallery" activeTab={"pills" + pills}>
              <TabPane tabId="pills1">
                <Col className="ml-auto mr-auto" md="10"></Col>
              </TabPane>
              <TabPane tabId="pills2">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections"></Row>
                </Col>
              </TabPane>
              <TabPane tabId="pills3">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <Col md="6">
                    <h4 className="title text-center">
                Mapa de limitantes de Produccion
              </h4>
                      <div>
                        <Iframe
                          allowFullScreen
                          style="border: none;"
                          height="600"
                          width="900"
                          src="http://localhost:8082/mapstore/#/context/MapaLimit"
                        ></Iframe>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
              <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="40">
                    <Row className="collections">
                      <Col md="12">
                        <Agenda />
                        
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills1">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <Col md="6">
                    <h4 className="title text-center">
                Mapa de Produccion por regiones y productores del SAF
              </h4>
                      <div>
                        <Iframe
                          allowFullScreen
                          style="border: none;"
                          height="600"
                          width="900"
                          src="http://localhost:8082/mapstore/#/context/RegionesPROD"
                        ></Iframe>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
              <TabPane tabId="pills4">
                  <Col className="ml-auto mr-auto" md="40">
                    <Row className="collections">
                      <Col md="12">
                        <EditorTexto />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
            </TabContent>
     
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
