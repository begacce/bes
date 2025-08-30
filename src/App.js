import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: "Karabaş", type: "Köpek", age: 2, price: "500€" },
    { id: 2, name: "Pamuk", type: "Kedi", age: 1, price: "300€" }
  ]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{
        backgroundColor: "#FF5722",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
      }}>
        <h1>BesiSat 🐾</h1>
        <div>
          <Link to="/" style={{ color: "white", marginRight: "15px" }}>Ana Sayfa</Link>
          <Link to="/add" style={{ color: "white", marginRight: "15px" }}>Yeni İlan</Link>
          <Link to="/list" style={{ color: "white" }}>İlanlar</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home pets={pets} />} />
        <Route path="/add" element={<Add pets={pets} setPets={setPets} />} />
        <Route path="/list" element={<List pets={pets} />} />
      </Routes>
    </div>
  );
}

export default App;
