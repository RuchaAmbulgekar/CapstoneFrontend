import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Controller from "./screens/Controller";
import DoctorDetails from "./screens/doctorList/DoctorDetails";

import Home from "./screens/home/Home";
import LoginRegisterModal from "./common/tabContainer/LoginRegisterModal";
import Header from "./common/header/Header";

//ReactDOM.render(<Controller />, document.getElementById("root"));

 ReactDOM.render(<Controller />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
