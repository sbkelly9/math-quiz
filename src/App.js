import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Addition from "./Components/Addition";
import Subtraction from "./Components/Subtraction";
import AdditionData from "./data/additon.json";
import Division from "./Components/Division";
import DivisionData from "./data/division.json";
import Home from "./Components/Home";
import "./App.css";

function App() {


  return (
    <div className="App">
      <nav>
        <Link to ="/addition">
          <h1>Addition Test</h1>
        </Link>
        <Link to="/subtraction">
          <h1>Subtraction Test</h1>
        </Link>
      </nav>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/addition/" component={Addition} />
        <Route path="/subtraction" exact component={Subtraction} />
        {/* <Route path="/multiplication" exact component={Multiplication} /> */}
        <Route path="/division" exact component={Division} />
      </main>
      {/* {additionList}
      {divisionList} */}
      {/* <Addition />
      <Division /> */}
    </div>
  );
}

export default App;
