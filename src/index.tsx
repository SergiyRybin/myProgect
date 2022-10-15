import React from "react";
import ReactDOM from "react-dom/client";
import FirstLesson from "./FirstLesson/components/FirstLesson/FirstLesson";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import SecondLesson from "./SecondLesson/App/SecondLesson";
import Lesson3 from "./ThirdLesson/components/App/Lesson3";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/firstLesson" element={<FirstLesson />} />
        <Route path="/secondLesson" element={<SecondLesson />} />
        <Route path="/3" element={<Lesson3/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
