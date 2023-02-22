import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { DialoguePage } from "./components/Pages/DialoguePage/DialoguePage";
import { MainPage } from "./components/Pages/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/dialog" element={<DialoguePage/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
