import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../../pages/home/Home';
import Projects from '../../../pages/projects/Projects';
import Services from '../../../pages/service/Services';
import Contact from '../../../pages/contact/Contact';
import About from '../../../pages/about/About';





const Router = () => {

  

  return (

    <Routes>

      <Route
        index
        element={
         
          
          <Home key="/" />         

        }
      />


      <Route
        path="/services"
        element={
          
          <Services key="/services" />
         
        }
      />

      <Route
        path="/work"
        element={
          
          <Projects key="/work" />
        
        }
      />

      <Route
        path="/about"
        element={
        
          <About key="/about"  />
          
        }
      />

      <Route
        path="/contact"
        element={

          <Contact key="/contact"  />
         

        }
      />

    </Routes>

  );
};

export default Router;

