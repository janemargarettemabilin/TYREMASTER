import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import Home from "./home/Home";
import CustomerInquiry from "./pages/Operations/CustomerInquiry";
import AssessmentForm from "./pages/Operations/AssessmentForm";
import "./App.css";


const App = () => {
  // Determine the current route
  const location = useLocation();

  // Conditionally apply background styles
  const isAuthPage = location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className={isAuthPage ? "auth-background" : "white-background"}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/operations/customer-inquiry" element={<CustomerInquiry />} />
        <Route path="/operations/assessment-form" element={<AssessmentForm />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
