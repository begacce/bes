import React from "react";
function Home({ pets }) {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Hoşgeldiniz!</h2>
      <p>BesiSat ile hayvan ilanlarını kolayca görebilir ve ekleyebilirsiniz.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {pets.map(pet => (
          <div key={pet.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "200px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}>
            <h3>{pet.name}</h3>
            <p>{pet.type} - {pet.age} yaşında</p>
            <p style={{ fontWeight: "bold" }}>{pet.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
