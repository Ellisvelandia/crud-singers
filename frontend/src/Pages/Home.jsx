import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="row container bg-success">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "70px" }}>Epic music bands</h2>
          <Link to="/singers" className="viewSinger my-3">View Bands</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "92.5vh" }}
        >
          <img
            className="img-fluid homeimg"
            src="https://wallpaper.dog/large/20522013.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
