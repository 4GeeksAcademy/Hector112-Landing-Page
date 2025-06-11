import React from "react";
import Navbar from "./Navbar";       // Barra de navegación
import Jumbotron from "./Jumbotron"; // Componente destacado (hero)
import Card from "./Card";           // Tarjetas de contenido
import Footer from "./Footer";       // Pie de página

const Home = () => {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">  
      
      <Navbar/>
      
      <div className="container">
        
        <Jumbotron/>
        
        <div className="row"> {/* Fila */}
          <div className="col-md-3 mb-4"> 
            <Card/>
          </div>

          <div className="col-md-3 mb-4">
            <Card/>
          </div>

          <div className="col-md-3 mb-4">
            <Card/>
          </div>

          <div className="col-md-3 mb-4">
            <Card/>
          </div>

        </div>
      </div>  

      <Footer/> 

    </div>
    </>
  );
};

export default Home;