import Homepage from "./components/Homepage";
import CountryDetail from "./components/CountryDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Homepage />} />
          <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
