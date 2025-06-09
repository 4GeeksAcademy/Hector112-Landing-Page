import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


const Home = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}> {/* Fondo gris para ver el área */}
      <Navbar />
      <div className="container" style={{ border: '2px solid red' }}> {/* Borde rojo para debug */}
        <Jumbotron />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

//crear componente
// const Home = () => {
//   return (
//     <>
//     <div>
//       <Navbar />
//       <div className="container mt-4">
//         <Jumbotron />
//         <div className="row"> 
//           <div className="col-md-3 mb-4">
//             <Card />
//           </div>
//           <div className="col-md-3 mb-4">
//             <Card />
//           </div>
//           <div className="col-md-3 mb-4">
//             <Card />
//           </div>
//           <div className="col-md-3 mb-4">
//             <Card />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//     </>
//   );
// };

export default Home;