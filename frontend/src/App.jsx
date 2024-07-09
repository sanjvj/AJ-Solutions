import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { Portfolio } from "./pages/Portfolio";
function App() {
  return (
    <>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/Portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
}

export default App;
