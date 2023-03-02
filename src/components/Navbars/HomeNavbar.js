import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function HomeNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <NavLink to="/landing-page" tag={Link}>
            SAF
          </NavLink>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(!collapseOpen);
            }}
            aria-expanded={collapseOpen}
            className="navbar-toggler"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle aria-haspopup={true} caret color="default" nav>
                  <p>Actividades</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/recetarios-page" >
                    Recetarios
                  </DropdownItem>
                  <DropdownItem
                    href="/catalogo-page"
                 
                  >
                    Catalogo de Productos
                  </DropdownItem>
                  <DropdownItem
                    href="/verNoticias"
                  >
                    Noticias
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Sobre nosotros
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
        {/*       <NavLink color="default" to="/registerprod-page" tag={Link}>
                <i className="now-ui-icons users_circle-08 "></i>
                ZONA PRODUCTOR
              </NavLink> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HomeNavbar;
