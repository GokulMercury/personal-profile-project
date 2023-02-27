import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/profile/get")
      .then((response) => {
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.data.map((item) => (
          <>
            <section class="p5">
              <div class="container" id="details" />
              <div class="row align-center justify-content-between">
                <div class="col-md">
                  <img
                    class="image-fluid d-none d-sm-block"
                    src="./img/programmer.webp"
                    alt="MERN Developer"
                  />
                </div>

                <div class="col-md p-5">
                  <h1 class="mb-5">{item.caption}</h1>
                  <h4>{item.name} Profile</h4>

                  <p class="lead">{item.headline}</p>
                  <a href="contact.html" class="btn btn-light mt-3">
                    <Link to="/contact" class="btn btn-primary btn-lg">
                      Contact
                    </Link>
                  </a>
                </div>
              </div>
            </section>

            <section class="p-5">
              <div class="container">
                <div class="row text-center g-4">
                  <div class="col-md">
                    <div class="card bg-dark text-light">
                      <div class="card-body text-center">
                        <div class="h1 mb-3">
                          <i class="bi bi-book-half mb-3"></i>
                        </div>
                        <h3 class="card-title mb-3">Strong NoSQL Skills</h3>
                        <p class="card-text mb-3">{item.highlights}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-book-half mb-3"></i>
                  </div>
                  <h3 class="card-title mb-3">Deep MERN Knowledge</h3>
                  <p class="card-text mb-3">
                    Developed full stack (backend tech stack: NodeJs, Mongo,
                    Mongo, Express, and ReactJs ) solutions for both small and
                    large scale organization.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-book-half mb-3"></i>
                  </div>
                  <h3 class="card-title mb-3">Full time & Freelance</h3>
                  <p class="card-text mb-3">
                    Experienced professional available to work fulltime or as
                    a freelancer to provide you the best-in-class solutions on
                    time.
                  </p>
                </div>
              </div>
            </div> */}
                </div>
              </div>
            </section>
          </>
        ))}
      </>
    );
  }
}
