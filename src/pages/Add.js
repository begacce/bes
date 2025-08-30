import React, { useState } from "react";

function Add({ pets, setPets }) {
  const [form, setForm] = useState({ name: "", type: "", age: "", price: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const newPet = { ...form, id: Date.now() };
    setPets([...pets, newPet]);
    setForm({ name: "", type: "", age: "", price: "" });
    alert("İlan başarıyla eklendi!");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      <h2>Yeni İlan Ekle</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="name" placeholder="Hayvan Adı" value={form.name} onChange={handleChange} required />
        <input name="type" placeholder="Türü" value={form.type} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Yaşı" value={form.age} onChange={handleChange} required />
        <input name="price" placeholder="Fiyat" value={form.price} onChange={handleChange} required />
        <button type="submit" style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>Kaydet</button>
      </form>
    </div>
  );
}

export default Add;
