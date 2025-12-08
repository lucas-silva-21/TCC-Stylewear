import React, { useState } from 'react';
import './armario.css';

export default function Armario() {
  const pecas = {
    bone: [
      "/imagens/bone1.png",
      "/imagens/bone2.png",
      "/imagens/bone3.png",
    ],
    blusas: [
      "/imagens/Blusas1.png",
      "/imagens/Blusas2.png",
    ],
    camiseta: [
      "/imagens/camiseta1.png",
      "/imagens/camiseta2.png",
      "/imagens/camiseta3.png",
    ],
    parteDeBaixo: [
      "/imagens/Parte de Baixo1.png",
      "/imagens/Parte de Baixo2.png",
    ],
    tenis: [
      "/imagens/tenis1.png",
      "/imagens/tenis2.png",
      "/imagens/tenis3.png",
    ]
  };

  const [index, setIndex] = useState({
    bone: 0,
    blusas: 0,
    camiseta: 0,
    parteDeBaixo: 0,
    tenis: 0,
  });

  const mudarImg = (categoria, direcao) => {
    if (!pecas[categoria] || pecas[categoria].length === 0) return;
    const max = pecas[categoria].length;
    setIndex((prev) => ({
      ...prev,
      [categoria]:
        direcao === "esq"
          ? (prev[categoria] - 1 + max) % max
          : (prev[categoria] + 1) % max,
    }));
  };

  const renderItem = (categoria, label) => (
    <div className="armario-item-block" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
      <div className="seta-container">
        <button className="seta" onClick={() => mudarImg(categoria, "esq")}>⏴</button>

        <div className="armario-item">
          <img
            src={pecas[categoria][index[categoria]]}
            alt={label}
          />
        </div>

        <button className="seta" onClick={() => mudarImg(categoria, "dir")}>⏵</button>
      </div>
      <span className="armario-label">{label}</span>
    </div>
  );

  return (
    <div className="armario-container">

      {renderItem("bone", "Bonés")}

      <div className="armario-grid">
        <div>{renderItem("blusas", "Blusas")}</div>

        <div>{renderItem("camiseta", "Camisetas")}</div>
      </div>

      {renderItem("parteDeBaixo", "Parte de Baixo")}

      {renderItem("tenis", "Tênis")}

    </div>
  );
}
