import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ProfileNavbar() {
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
                  <NavLink  to="/landing-page" tag={Link}
                  >
                   SAF
                  </NavLink>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                  <Collapse isOpen={collapseOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink to="/profile-page" tag={Link}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons users_single-02"
                          ></i>
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav>
                        <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={(e) => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                          ></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            href="pills3"
                          >
                            Editar perfil 
                          </DropdownItem>
                          <DropdownItem
                            href="/landing-page"
                            
                          >
                            Realizar reclamo
                          </DropdownItem>
                          <DropdownItem
                            href="/recetarios-page"
                          >
                            Recetarios
                          </DropdownItem>
                          <div className="divider"></div>
                          <DropdownItem
                            href="/home-page"
                           
                          >
                            Donde se Realizar
                          </DropdownItem>
                          <div className="divider"></div>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Container>
              </Navbar>
    </>
  );
}

export default ProfileNavbar;
