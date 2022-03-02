import React from "react";
import Home from "../screens/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginRegisterModal from "../common/tabContainer/LoginRegisterModal";
import DoctorDetails from "./doctorList/DoctorDetails";

const Controller = () => {
  const baseUrl = "/api/v1/";
  return (
    <Router>
      <div className="main-container">
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} baseUrl={baseUrl} />}
        />
          <Route
              exact
              path="/LoginRegisterModal"
              render={(props) => <LoginRegisterModal {...props} baseUrl={baseUrl} />}
          />
          {/*<Route*/}
          {/*    exact*/}
          {/*    path="/DoctorDetails"*/}
          {/*    render={(props) => <DoctorDetails {...props} baseUrl={baseUrl} />}*/}
          {/*/>*/}

      </div>
    </Router>
  );
};

export default Controller;
