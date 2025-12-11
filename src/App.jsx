import { useState } from 'react'
import './App.css'
import RatePage from './Component/RatePage/RatePage'
import RequestForm from './Component/RequestForm/RequestForm'
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Landing from "./Component/Landing/Landing"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ratepage" element={<RatePage />} />
      <Route path="/requestform" element={<RequestForm />} />
    </Routes>
  );
}
