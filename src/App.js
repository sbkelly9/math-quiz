import React from "react"
import { Route, Link } from "react-router-dom"
import Addition from "./Components/Addition";
import Subtraction from "./Components/Subtraction"
import Division from "./Components/Division"
import Home from "./Components/Home"
import Multiplication from "./Components/Multiplication"
import "./App.css"

function App() {


  return (
    <div className="App">
      <nav>
        <Link to="/addition">
          <h1>Addition Test</h1>
        </Link>
        <Link to="/subtraction">
          <h1>Subtraction Test</h1>
        </Link>
        <Link to="/division">
          <h1>Division Test</h1>
        </Link>
        <Link to="/multiplication">
          <h1>Multiplication Test</h1>
        </Link>
      </nav>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/addition/" component={Addition} />
        <Route path="/subtraction" exact component={Subtraction} />
        {/* <Route path="/multiplication" exact component={Multiplication} /> */}
        <Route path="/division" exact component={Division} />
        <Route path="/multiplication" exact component={Multiplication} />
      </main>
      {/* {additionList}
      {divisionList} */}
      {/* <Addition />
      <Division /> */}
    </div>
  );
}

export default App;
