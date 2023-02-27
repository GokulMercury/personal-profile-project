import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
export default class Layout extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3">
          <div class="container">
            <Link to="/" class="navbar-brand">
              MERN Developer
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer />
      </>
    );
  }
}
