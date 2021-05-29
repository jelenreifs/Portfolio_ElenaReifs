import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./components/intro";
import About from "./components/about";
import Contacto from "./components/contacto";
import ProyectoDestacado from "./components/proyecto_destacado";
import Proyectos from "./components/proyectos";
import Resumen from "./components/resumen";

import './index.css'

function App() {
  return (
    <>
        <Router>
            <Header />
              <Switch>
                  <Route exact path="/">
                      <Intro/>
                      <About/>
                      <Contacto/>
                  </Route>

                  <Route exact path="/portfolio">
                      <ProyectoDestacado/>
                      <Proyectos/>
                  </Route>
            
                  <Route exact path="/resumen">
                      <Resumen/>
                  </Route>
        </Switch>
        <Footer/>
        </Router>
   
    </>
  );
}

export default App;
