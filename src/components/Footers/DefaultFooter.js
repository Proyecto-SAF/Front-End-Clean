/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Gobierno de la Provincia
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            
             NHN CORP.
           
            
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
