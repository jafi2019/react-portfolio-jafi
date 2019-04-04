import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./home";
  import About from "./about";
  import Contact from "./contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>   
        <div>
          <div classname="title"> 
            <img src="jafi.png" alt="Jafi" />
            <h1> Japheth HABINSHUTI N.(Jafi)</h1>
          </div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>   
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;