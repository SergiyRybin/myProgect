import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lesson5 from "./Lesson5/components/App/Lesson5";
import "./index.css";
import 'leaflet/dist/leaflet.css';
import FirstLesson from "./Lesson1/components/FirstLesson/FirstLesson";
import SecondLesson from "./Lesson2/App/SecondLesson";
import Lesson3 from "./Lesson3/components/App/Lesson3";
import StartPage from "./StartPage/StartPage";
import WebSock from './WEB/WebSock'
import Leaflet from "./6_Leaflet/Leaflet";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/1" element={<FirstLesson />} />
        <Route path="/2" element={<SecondLesson />} />
        <Route path="/3" element={<Lesson3 />} />
        <Route path="/5/*" element={<Lesson5 />} />
        <Route path="/web" element={<WebSock/>} />
        <Route path="/leaflet" element={<Leaflet/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
