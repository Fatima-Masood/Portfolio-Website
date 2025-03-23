import React, { useState } from "react";
import CustomNavigation from "./Components/Navigation/navbar";
import Home from "./Components/Sections/home";
import About from "./Components/Sections/about";
import Projects from "./Components/Sections/projects";
import Contact from "./Components/Sections/contact";
import "./App.css";
import LoginPage from "./Components/User/login";
import SignUpPage from "./Components/User/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState ("");
  return (
    <div className="App">
      <CustomNavigation email={user} setEmail={setUser}/>
      {user ? (
            <>
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
      ):(
        <LoginPage/>
      )}

      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;