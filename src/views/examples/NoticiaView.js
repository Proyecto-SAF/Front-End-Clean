import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {  Row,  Spinner } from "reactstrap";

import "../../components/Funcionales/App.css";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar";
import NoticiasPageHeader from "components/Headers/NoticiasPageHeader";

function NoticiaView(_id) {
  //estado de la lista de todos los productos
  const [noticia, setnoticia] = useState([]);
  //estado de la carga de peticiones
  const [loading, setLoading] = useState(true);
  //estado para la primera vez que se renderizan los productos en el catalogo


  //Llamada a la api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/verNoticia/`);
        setnoticia(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    console.log("ACA ESTARIA LA NOTICIA")
    console.log(noticia)
  }, []);
  return (
    <>
      <HomeNavbar/>
      <NoticiasPageHeader/>
      <br></br>
      <h5>fecha</h5>
      <h1>Hola mundo</h1>
      <h3>jakdjasd</h3>
      <h5>ubicacion</h5>
      <img alt="img:(" src="https://agenfor.com.ar/wp-content/uploads/2021/03/Soberania-Alimentaria-en-Villa-Dos-Trece5.jpg"></img>
    </>
  );
}

export default NoticiaView;