import React, { Component } from "react";
import qs from "qs";
import axios from "axios";

export default class Contact extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log();

    if (
      !event.target.firstname.value ||
      !event.target.lastname.value ||
      !event.target.emailaddress.value ||
      !event.target.phonenumber.value
    ) {
      return alert("Please enter the details");
    }

    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const emailaddress = event.target.emailaddress.value;
    const phonenumber = event.target.phonenumber.value;
    console.log(firstname, lastname, emailaddress, phonenumber);

    var data = qs.stringify({
      firstname,
      lastname,
      emailaddress,
      phonenumber,
    });

    var config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/api/contact/send",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <section class="p5">
          <div class="container" id="details" />
          <div class="row align-center justify-content-between">
            <div class="col-md p-5">
              <h1 class="mb-3">Contact me</h1>
              <p class="lead">
                Do you have any questions? Please do not hesitate to contact me
                directly. I will come back to you within a matter of hours.
              </p>
              <form
                method="POST"
                encType="application/x-www-form-urlencoded"
                onSubmit={this.handleSubmit}
              >
                <div class="mb-3">
                  <label for="firstname" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="firstname" />
                  <div class="text-danger">
                    <p id="firstnameError"></p>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="lastname" class="col-form-label">
                    Last Name:
                  </label>
                  <input type="text" class="form-control" id="lastname" />
                  <div class="text-danger">
                    <p id="lastnameError"></p>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="emailaddress" class="col-form-label">
                    Email:
                  </label>
                  <input type="text" class="form-control" id="emailaddress" />
                  <div class="text-danger">
                    <p id="emailaddressError"></p>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="phonenumber" class="col-form-label">
                    Phone number:
                  </label>
                  <input type="text" class="form-control" id="phonenumber" />
                  <div class="text-danger">
                    <p id="phonenumberError"></p>
                  </div>
                </div>
                {/* <div class="mb-5">
                  <p>Please select your preference</p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPreference[]"
                      name="checkPreference[]"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Fullstack
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPreference[]"
                      name="checkPreference[]"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Node.js
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPreference[]"
                      name="checkPreference[]"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      React
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPreference[]"
                      name="checkPreference[]"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Bootstrap
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPreference[]"
                      name="checkPreference[]"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Mongo DB
                    </label>
                  </div>
                  <div class="text-danger">
                    <p id="preferenceError"></p>
                  </div>
                </div> */}
                <div class="mb-3">
                  <input type="submit" value="Submit" class="btn btn-primary" />
                </div>
              </form>
            </div>

            <div class="col-md p-5">
              <h2>
                <span class="text-warning">My Address</span>
              </h2>
              <ul class="lead list-unstyled">
                <li>VB Park, Padamugal, Kakkanad</li>
                <li>Kochi, Kerala 682030</li>
                <li>+91-9048488822 (mobile phone)</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
