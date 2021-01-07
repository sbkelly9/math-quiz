import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Addition from "./Components/Addition";
import Subtraction from "./Components/Subtraction";
import SubtractionData from "./data/subtraction.json";
import AdditionData from "./data/additon.json";
import Division from "./Components/Division";
import DivisionData from "./data/division.json";
import "./App.css";


function App() {
  let subtractionList = SubtractionData.map((dataset, i) => {
    return (
      <div key={i}>
        <p>{dataset.problem}</p>
        <p>{dataset.answer}</p>
      </div>
    );
  });
  // let additionList = AdditionData.map((dataset, i) => {
  //   return (
  //     <div key={i}>
  //       <p>{dataset.problem}</p>
  //       <p>{dataset.answer}</p>
  //     </div>
  //   );
  // });
  // let divisionList = DivisionData.map((dataset, i) => {
  //   return (
  //     <div key={i}>
  //       <p>{dataset.problem}</p>
  //       <p>{dataset.answer}</p>
  //     </div>
    // );
  // });



  return (
    <div className="App">
      <nav>
        <Link to="/">
      {subtractionList}
      <h1>Subtraction Test</h1>
      </Link>
      <Link to="/addition"/>
    
      </nav>
      <main>
        {/* <Route path="/addition"
          component={Addition}
        /> */}
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
