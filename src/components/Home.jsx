import React from "react";
import img from './bg.jpg'
import Product from "./Product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src={img} className="card-img" alt="background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark l-2">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2 text-dark">
                CHECK OUT ALL THE TRENDS
            </p>
            </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
