import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RickRoll, SplineScene } from "./components";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<SplineScene />} />
        <Route path="/rr" element={<RickRoll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
