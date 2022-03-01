import React from "react";
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  HOME
                </Link>
              </li> 
              {/* <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/create">
                  create
                </Link>
              </li>  */}
                         
            </ul>
          </div>
         
         
        </div>
        {/* <button className="btn btn-light  mx-1" >Logout</button> */}
      </nav>
      
    </>
  );
}
