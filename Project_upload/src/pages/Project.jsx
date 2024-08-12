import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";


function Project() {

  return (
    <>
      <Header />

      <h1 className="text-center mt-5">Projects</h1>

      <div className="row w-100 mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex">
          <input
            type="text"
            placeholder="Technologies"
            className="form-control"
            
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ marginTop: "13px", marginLeft: "-30px" }}
            flip="horizontal"
          />
        </div>
        <div className="col-md-4"></div>
      </div>

      
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-4">
            <ProjectCard />
          </div>
          
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <div className=" row w-100">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstOxJpNWWcfH6GpyoEy4x813Iw-J1undhdQ&s"
              alt="No image"
            />
            <h4>
              Please{" "}
              <Link to={"/login"} className="text-danger">
                login
              </Link>
            </h4>
          </div>
          <div className="col-md-2"></div>
        </div>
    </>
  );
}

export default Project;
