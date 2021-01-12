import './App.css';
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import MyNavBar from "./components/MyNavbar";
import MyTitle from "./components/MyTitle";
import AboutMe from "./components/AboutMe";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import ExperienceEducation from "./pages/Experience-Education";

import dark from "./assets/img/carousal/dark.jfif";
import light from "./assets/img/carousal/light.jfif";
import Image from 'react-bootstrap/Image'
import Particles from 'react-particles-js';
import { particlesOptionsDark } from "./particlesOptionsDark";
import { particlesOptionsLight } from "./particlesOptionsLight";

import Fade from "react-reveal/Fade";

const App = () => {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div style={{ position: "relative" }}>
      <GlobalStyles/>
        <div className="App">
          <MyNavBar 
            click = {themeToggler}
            theme = {theme}
            />
            
            <Image id = "home" className = "custom-img" src={theme === 'light' ? light : dark} fluid />
            
            <Particles
              className="particles particles-box"
              params={theme === 'light' ? particlesOptionsLight : particlesOptionsDark}
            />
            <MyTitle/>
            <Fade duration={1000} right><AboutMe/></Fade>
            <div className = "skills"><Fade duration={2000}><Skills/></Fade></div>
            {/* <Education 
              theme = {theme}
            /> */}
            <ExperienceEducation/>
          {/* <button onClick={themeToggler}>Switch Theme</button> */}
          HEY!!!!!!
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
