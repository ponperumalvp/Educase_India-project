import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginScreen from "../pages/LoginScreen";
import SignUpScreen from "../pages/SignUpScreen";
import Profile from "../pages/Profile";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routing;
