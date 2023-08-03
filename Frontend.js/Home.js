import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-page">
      <h1>Welcome to Fitness Tracker</h1>
      <h2> Login or Register to Start Training! </h2>
    </div>
  );
};

export default Home;
