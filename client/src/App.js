import * as React from "react";
import PickUsername from "./pages/PickUsername";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoom from "./pages/MainRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoom />} />
        <Route path="/pickusername" element={<PickUsername />} />
        <Route path="/mainroom" element={<MainRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
