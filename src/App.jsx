import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import CountryDetail from "./components/CountryDetail";
import NavHeader from "./components/NavHeader";

export default function App() {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <>
      <NavHeader darkMood={darkMood} setDarkMood={setDarkMood} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
