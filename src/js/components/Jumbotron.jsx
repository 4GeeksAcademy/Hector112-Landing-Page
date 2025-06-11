import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 bg-light rounded-3 mb-4">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">¡Una cálida bienvenida!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, 
          in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis 
          illo aspernatur vitae fugiat numquam reprietat.
        </p>
        <button className="btn btn-primary btn-lg">Call to action!</button>
      </div>
    </div>
  );
};

export default Jumbotron;