import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { MainPage } from "./components/Pages/MainPage/MainPage";
// import { Dialog } from "./cpmponents/page/dialog/dialog";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        {/* <Route path="/dialog" element={<Dialog />}></Route> */}
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
