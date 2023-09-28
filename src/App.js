import React from "react";
import Navbar from "./components/nav/nav.js"
import Home from "./components/home/home.js"
import SocialLink from "./components/socialLink/socialLink.js"
import About from "./components/about/about.js"
import Portfolio from "./components/portfolio/portfolio.js"
import Contact from "./components/contact/contact.js"; 
import Experience from "./components/experience/experience.js";


function App(){
    return (
    <div >
       <Navbar />
       <Home />
       <SocialLink />
       <About />
       <Experience />
       <Portfolio />
       <Contact />
    </div>
             )
}


export default App;