/*eslint-disable*/
import React, {useRef} from "react";

// reactstrap components
import { Container, Button, Col } from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();
 
 
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

    const targetRef = useRef(null);
  
    const handleClick = () => {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
    
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        
        <Container>
        <Col className="ml-auto mr-auto" md="4">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
        </Col>
            <h3 className="title">En este mapa podras encontrar donde se esta relizando el programa SAF</h3>
            <div id="Map" ref={targetRef} />
            <Button
                className="btn-round btn-icon"
                color="info"
                size="lg"
                onClick={handleClick}
              >
              <span aria-hidden="true">
               <i className="now-ui-icons arrows-1_minimal-down"></i>
              </span>
              </Button>
           
        </Container>
        
      </div>
    </>
  );
}

export default IndexHeader;
