import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class About extends Component {
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
          <div key={item.id}>
            <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
              <div class="container">
                <div class="d-sm-flex align-items-center justify-content-between">
                  <div>
                    <h1>
                      Meet <span class="text-warning">{item.name}</span>
                    </h1>
                    <p class="lead my-4">A tech enthusiast and self-learner.</p>

                    <Link to="/contact" class="btn btn-primary btn-lg">
                      Contact
                    </Link>
                  </div>
                  <img
                    class="image-fluid w-50 d-none d-sm-block"
                    src="./img/hero-image.png"
                    alt="MERN Developer"
                  />
                </div>
              </div>
            </section>

            <section class="p5 bg-light text-dark">
              <div class="container" id="experience" />
              <div class="row align-center justify-content-between">
                <div class="col-md pt-5">
                  <img
                    class="image-fluid d-none d-sm-block"
                    src="./img/mern-dev-img.png"
                    alt="MERN Developer"
                  />
                </div>
                <div class="col-md p-5">
                  <h2>Experience</h2>
                  <p class="lead">{item.experience}</p>
                  <a href="#" class="btn btn-light mt-3">
                    <i class="bi bi-chevron-right"></i>Know more
                  </a>
                </div>
              </div>
            </section>

            <section class="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
              <div class="container" id="qualification">
                <div class="d-sm-flex align-items-center justify-content-between">
                  <div>
                    <h1>Qualification</h1>
                    <p class="lead my-4">{item.qualification}</p>
                    <button class="btn btn-primary btn-lg">Learn more</button>
                  </div>
                  <img
                    class="image-fluid w-50 d-none d-sm-block"
                    src="./img/hero-image.png"
                    alt="MERN Developer"
                  />
                </div>
              </div>
            </section>
          </div>
        ))}
      </>
    );
  }
}
