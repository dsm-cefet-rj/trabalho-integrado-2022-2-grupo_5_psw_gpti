import Navbar from "./components/Navbar";
import Home from "./Home";
import "./styles/global";
import Cronograma from "./components/Cronograma/Cronograma";
import { Route, Routes } from "react-router-dom";
import Equipe from "./components/Equipe/Equipe";
import Metas from "./components/Metas/Metas";
import NotFound from "./components/NotFound";
import { Component } from "react";


 function App() { 
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cronograma" element={<Cronograma />} />
          <Route path="/Equipe" element={<Equipe />} />
          <Route path="/Metas" element={<Metas/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
 } 
export default App;
