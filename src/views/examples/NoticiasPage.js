import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {  Row, Col, Spinner } from "reactstrap";

import "../../components/Funcionales/App.css";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import NoticiasPageHeader from "components/Headers/NoticiasPageHeader";
import NoticiaCard from "components/Cards/NoticiaCard";

function HomePage() {
  //estado de la lista de todos los productos
  const [noticias, setNoticias] = useState([]);
  //estado de la carga de peticiones
  const [loading, setLoading] = useState(true);
  //estado para la primera vez que se renderizan los productos en el catalogo
  const [primeraVez, setPrimeraVez] = useState(true);

  //Llamada a la api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/noticias");
        setNoticias(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  console.log(noticias);

  useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <HomeNavbar />
      <NoticiasPageHeader />
      <br></br>
      {loading ? (
        <div className=" d-flex align-items-center justify-content-center">
          <Spinner color="info" type="grow">
            Ups
          </Spinner>
          <span>Cargando..</span>
        </div>
      ) : (
        <Row>
          {noticias.map((noticia) => (
            <NoticiaCard {...noticia}/>
          ))}
        </Row>
      )}

{/*       <DefaultFooter /> */}
    </>
  );
}

export default HomePage;
